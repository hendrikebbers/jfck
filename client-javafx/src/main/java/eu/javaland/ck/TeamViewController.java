package eu.javaland.ck;

import dev.rico.client.remoting.ClientContext;
import dev.rico.client.remoting.FXBinder;
import dev.rico.client.remoting.Param;
import dev.rico.client.remoting.view.AbstractFXMLViewController;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.ProgressBar;

import static eu.javaland.ck.TeamConstants.SET_TEAM_ACTION;
import static eu.javaland.ck.TeamConstants.TEAM;
import static eu.javaland.ck.TeamConstants.TEAM_CONTROLLER;

public class TeamViewController extends AbstractFXMLViewController<TeamsModel> {

    @FXML
    private Label titleLabel;

    @FXML
    private Label valueOneLabel;

    @FXML
    private Label valueTwoLabel;

    @FXML
    private ProgressBar valueOneProgress;

    @FXML
    private ProgressBar valueTwoProgress;

    private final String teamName;

    public TeamViewController(final ClientContext clientContext, final String teamName) {
        super(clientContext, TEAM_CONTROLLER, TeamViewController.class.getResource("view.fxml"));
        this.teamName = teamName;
    }

    protected void init() {
        FXBinder.bind(titleLabel.textProperty()).to(getModel().titleProperty());
        FXBinder.bind(valueOneLabel.textProperty()).to(getModel().valueOneTitleProperty());
        FXBinder.bind(valueOneProgress.progressProperty()).bidirectionalToNumeric(getModel().valueOneProperty());
        FXBinder.bind(valueTwoLabel.textProperty()).to(getModel().valueTwoTitleProperty());
        FXBinder.bind(valueTwoProgress.progressProperty()).bidirectionalToNumeric(getModel().valueTwoProperty());

        invoke(SET_TEAM_ACTION, new Param(TEAM, teamName));
    }
}
