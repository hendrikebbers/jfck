package eu.javaland.ck.rico;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import dev.rico.server.remoting.Param;
import dev.rico.server.remoting.RemotingAction;
import dev.rico.server.remoting.RemotingController;
import dev.rico.server.remoting.RemotingModel;
import dev.rico.server.remoting.event.RemotingEventBus;
import eu.javaland.ck.CommunityEventTopics;
import eu.javaland.ck.Database;
import eu.javaland.ck.QuestionsModel;
import eu.javaland.ck.TeamConstants;
import eu.javaland.ck.TeamsModel;
import eu.javaland.ck.models.Vote;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;

import static eu.javaland.ck.DataConstants.ANDREAS_ID;
import static eu.javaland.ck.DataConstants.ED_ID;
import static eu.javaland.ck.DataConstants.GEAL_ID;
import static eu.javaland.ck.TeamConstants.*;

@RemotingController(QUESTION_CONTROLLER)
public class QuestionsController {

    @RemotingModel
    private QuestionsModel model;

    @Autowired
    private RemotingEventBus eventBus;

    private int questionId = -1;

    private final Gson gson = new Gson();

    private final JsonElement questionsElement;

    public QuestionsController() {
        try {
            final JsonParser parser = new JsonParser();
            questionsElement = parser.parse(new FileReader(TeamsController.class.getResource("questions.json").getFile()));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostConstruct
    public void init() {
        eventBus.subscribe(CommunityEventTopics.UPDATE, e -> update());
    }

    private void update() {
        if(questionId >= 0) {
            final JsonElement questionElement = questionsElement.getAsJsonArray().get(questionId);
            final String q = questionElement.getAsJsonObject().get("question").getAsString();
            model.titleProperty().set(q);

            final String a1 = questionElement.getAsJsonObject().get("options").getAsJsonArray().get(0).getAsString();
            final String a2 = questionElement.getAsJsonObject().get("options").getAsJsonArray().get(1).getAsString();
            final String a3 = questionElement.getAsJsonObject().get("options").getAsJsonArray().get(2).getAsString();
            final String a4 = questionElement.getAsJsonObject().get("options").getAsJsonArray().get(3).getAsString();

            model.valueOneTitleProperty().set(a1);
            model.valueTwoTitleProperty().set(a2);
            model.valueThreeTitleProperty().set(a3);
            model.valueFourTitleProperty().set(a4);

            AtomicInteger countA = new AtomicInteger();
            AtomicInteger countB = new AtomicInteger();
            AtomicInteger countC = new AtomicInteger();
            AtomicInteger countD = new AtomicInteger();

            Database.votes.forEach((k, v) -> {
                final Vote vote = gson.fromJson(v, Vote.class);
                if(vote.getQuestionId() == questionId) {
                    if (vote.getQuestionAnswer() == 0) {
                        countA.incrementAndGet();
                    }
                    if (vote.getQuestionAnswer() == 1) {
                        countB.incrementAndGet();
                    }
                    if (vote.getQuestionAnswer() == 2) {
                        countC.incrementAndGet();
                    }
                    if (vote.getQuestionAnswer() == 3) {
                        countD.incrementAndGet();
                    }
                }
            });

            final int sum = countA.intValue() + countB.intValue() + countC.intValue() + countD.intValue();
            if(sum > 0) {
                final double aPercantage = countA.doubleValue() / sum;
                final double bPercantage = countB.doubleValue() / sum;
                final double cPercantage = countC.doubleValue() / sum;
                final double dPercantage = countD.doubleValue() / sum;

                model.valueOneProperty().set(aPercantage);
                model.valueTwoProperty().set(bPercantage);
                model.valueThreeProperty().set(cPercantage);
                model.valueFourProperty().set(dPercantage);
            } else {
                model.valueOneProperty().set(0.0);
                model.valueTwoProperty().set(0.0);
                model.valueThreeProperty().set(0.0);
                model.valueFourProperty().set(0.0);
            }

        } else {
            model.titleProperty().set("");
            model.valueOneTitleProperty().set("");
            model.valueTwoTitleProperty().set("");
            model.valueThreeTitleProperty().set("");
            model.valueFourTitleProperty().set("");
        }
        model.showNamesProperty().set(Database.showNames);
    }

    private boolean isAnswer(final Vote vote, final int answerNumber) {
        try {
            final JsonElement questionElement = questionsElement.getAsJsonArray().get(vote.getQuestionId());
            return vote.getQuestionAnswer() == answerNumber;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @RemotingAction(SET_QUESTION_ACTION)
    public void setTeam(@Param(QUESTION) int questionId) {
        this.questionId = questionId;
        update();
    }

    @RemotingAction(PREV)
    public void prev() {
        this.questionId--;
        update();
    }

    @RemotingAction(NEXT)
    public void next() {
        this.questionId++;
        update();
    }

}
