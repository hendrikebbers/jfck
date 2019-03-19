package eu.javaland.ck.rico;

import dev.rico.server.remoting.Param;
import dev.rico.server.remoting.RemotingAction;
import dev.rico.server.remoting.RemotingController;
import dev.rico.server.remoting.RemotingModel;
import dev.rico.server.remoting.event.RemotingEventBus;
import eu.javaland.ck.CommunityEventTopics;
import eu.javaland.ck.TeamsModel;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;

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

    @PostConstruct
    public void init() {
        eventBus.subscribe(CommunityEventTopics.UPDATE, e -> update());
    }

    private void update() {
        model.setTitle("Buildtools");
        model.setValueOneTitle("Maven");
        model.setValueTwoTitle("Gradle");

        model.setValueOne(Math.random());
        model.setValueTwo(Math.random());
    }

    @RemotingAction(SET_TEAM_ACTION)
    public void setTeam(@Param(TEAM) String team) {
        this.currentTeam = team;
        update();
    }

}
