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
import static eu.javaland.ck.TeamConstants.QUESTION;
import static eu.javaland.ck.TeamConstants.QUESTION_CONTROLLER;
import static eu.javaland.ck.TeamConstants.SET_QUESTION_ACTION;
import static eu.javaland.ck.TeamConstants.SET_TEAM_ACTION;
import static eu.javaland.ck.TeamConstants.TEAM;
import static eu.javaland.ck.TeamConstants.TEAM_CONTROLLER;

@RemotingController(QUESTION_CONTROLLER)
public class QuestionsController {

    @RemotingModel
    private QuestionsModel model;

    @Autowired
    private RemotingEventBus eventBus;

    private int questionId;

    private final Gson gson = new Gson();

    @PostConstruct
    public void init() {
        eventBus.subscribe(CommunityEventTopics.UPDATE, e -> update());
    }

    private void update() {

    }


    @RemotingAction(SET_QUESTION_ACTION)
    public void setTeam(@Param(QUESTION) int questionId) {
        this.questionId = questionId;
        update();
    }

}
