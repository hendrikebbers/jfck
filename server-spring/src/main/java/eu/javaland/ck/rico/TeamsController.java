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
import eu.javaland.ck.TeamConstants;
import eu.javaland.ck.TeamsModel;
import eu.javaland.ck.models.Vote;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;

import java.io.FileReader;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;

import static eu.javaland.ck.DataConstants.ANDRES_ID;
import static eu.javaland.ck.DataConstants.ED_ID;
import static eu.javaland.ck.DataConstants.GEAL_ID;
import static eu.javaland.ck.DataConstants.GUNNAR_ID;
import static eu.javaland.ck.DataConstants.MICHAEL_ID;
import static eu.javaland.ck.DataConstants.SIMONS_ID;
import static eu.javaland.ck.TeamConstants.SET_TEAM_ACTION;
import static eu.javaland.ck.TeamConstants.TEAM;
import static eu.javaland.ck.TeamConstants.TEAM_CONTROLLER;

@RemotingController(TEAM_CONTROLLER)
public class TeamsController {

    @RemotingModel
    private TeamsModel model;

    @Autowired
    private RemotingEventBus eventBus;

    private String currentTeam;

    private final Gson gson = new Gson();

    private final JsonElement questionsElement;

    public TeamsController() {
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
        if(Objects.equals(currentTeam, TeamConstants.BUILD_TOOLS)) {
            model.titleProperty().set("Buildtools");
            model.valueOneTitleProperty().set("Gradle");
            model.valueTwoTitleProperty().set("Maven");
        }else if(Objects.equals(currentTeam, TeamConstants.ENTERPRISE)) {
            model.titleProperty().set("Enterprise Frameworks");
            model.valueOneTitleProperty().set("Jakarta EE");
            model.valueTwoTitleProperty().set("Spring");
        }else if(Objects.equals(currentTeam, TeamConstants.IDES)) {
            model.titleProperty().set("Buildtools");
            model.valueOneTitleProperty().set("Eclipse");
            model.valueTwoTitleProperty().set("Netbeans");
        }

        AtomicInteger countA = new AtomicInteger();
        AtomicInteger countB = new AtomicInteger();

        Database.votes.forEach((k, v) -> {
            final Vote vote = gson.fromJson(v, Vote.class);
            if (isCorrect(vote)) {
                if(Objects.equals(currentTeam, TeamConstants.BUILD_TOOLS) && vote.getSpeakerId() == ANDRES_ID) {
                    countA.incrementAndGet();
                } else if(Objects.equals(currentTeam, TeamConstants.BUILD_TOOLS) && vote.getSpeakerId() == GUNNAR_ID) {
                    countB.incrementAndGet();
                } else if(Objects.equals(currentTeam, TeamConstants.ENTERPRISE) && vote.getSpeakerId() == ED_ID) {
                    countA.incrementAndGet();
                } else if(Objects.equals(currentTeam, TeamConstants.ENTERPRISE) && vote.getSpeakerId() == SIMONS_ID) {
                    countB.incrementAndGet();
                } else if(Objects.equals(currentTeam, TeamConstants.IDES) && vote.getSpeakerId() == GEAL_ID) {
                    countA.incrementAndGet();
                } else if(Objects.equals(currentTeam, TeamConstants.IDES) && vote.getSpeakerId() == MICHAEL_ID) {
                    countB.incrementAndGet();
                }
            }
        });
        final int sum = countA.intValue() + countB.intValue();
        if(sum > 0) {
            final double aPercantage = countA.doubleValue() / sum;
            final double bPercantage = countB.doubleValue() / sum;

            System.out.println("COUNT: " + sum + " | A: " + countA.intValue() + " B: " + countB.intValue());

            model.valueOneProperty().set(aPercantage);
            model.valueTwoProperty().set(bPercantage);
        } else {
            model.valueOneProperty().set(0.0);
            model.valueTwoProperty().set(0.0);
        }
        model.showNamesProperty().set(Database.showNames);
    }

    private boolean isCorrect(final Vote vote) {
        try {
            final JsonElement questionElement = questionsElement.getAsJsonArray().get(vote.getQuestionId());
            final int answerIndex = questionElement.getAsJsonObject().get("solution").getAsInt();
            return vote.getQuestionAnswer() == answerIndex;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @RemotingAction(SET_TEAM_ACTION)
    public void setTeam(@Param(TEAM) String team) {
        this.currentTeam = team;
        update();
    }

}
