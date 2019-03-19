package eu.javaland.ck;

import dev.rico.client.remoting.ClientContext;
import dev.rico.client.remoting.FXBinder;
import dev.rico.client.remoting.Param;
import dev.rico.client.remoting.view.AbstractFXMLViewController;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.ProgressBar;

import static eu.javaland.ck.TeamConstants.QUESTION;
import static eu.javaland.ck.TeamConstants.QUESTION_CONTROLLER;
import static eu.javaland.ck.TeamConstants.SET_QUESTION_ACTION;
import static eu.javaland.ck.TeamConstants.SET_TEAM_ACTION;
import static eu.javaland.ck.TeamConstants.TEAM;
import static eu.javaland.ck.TeamConstants.TEAM_CONTROLLER;

public class QuestionViewController extends AbstractFXMLViewController<QuestionsModel> {

    @FXML
    private Label titleLabel;

    @FXML
    private Label valueOneLabel;

    @FXML
    private Label valueTwoLabel;

    @FXML
    private Label valueThreeLabel;

    @FXML
    private Label valueFourLabel;

    @FXML
    private ProgressBar valueOneProgress;

    @FXML
    private ProgressBar valueTwoProgress;

    @FXML
    private ProgressBar valueThreeProgress;

    @FXML
    private ProgressBar valueFourProgress;

    private final int questionID;

    public QuestionViewController(final ClientContext clientContext, final int questionID) {
        super(clientContext, QUESTION_CONTROLLER, QuestionViewController.class.getResource("questions.fxml"));
        this.questionID = questionID;
    }

    protected void init() {
        FXBinder.bind(titleLabel.textProperty()).to(getModel().titleProperty());

        FXBinder.bind(valueOneLabel.textProperty()).to(getModel().valueOneTitleProperty());
        getModel().valueOneProperty().onChanged(e -> valueOneProgress.setProgress(e.getNewValue()));

        FXBinder.bind(valueTwoLabel.textProperty()).to(getModel().valueTwoTitleProperty());
        getModel().valueTwoProperty().onChanged(e -> valueTwoProgress.setProgress(e.getNewValue()));

        FXBinder.bind(valueThreeLabel.textProperty()).to(getModel().valueThreeTitleProperty());
        getModel().valueThreeProperty().onChanged(e -> valueThreeProgress.setProgress(e.getNewValue()));

        FXBinder.bind(valueFourLabel.textProperty()).to(getModel().valueFourTitleProperty());
        getModel().valueFourProperty().onChanged(e -> valueFourProgress.setProgress(e.getNewValue()));

        FXBinder.bind(valueOneLabel.visibleProperty()).to(getModel().showNamesProperty());
        FXBinder.bind(valueTwoLabel.visibleProperty()).to(getModel().showNamesProperty());
        FXBinder.bind(valueThreeLabel.visibleProperty()).to(getModel().showNamesProperty());
        FXBinder.bind(valueFourLabel.visibleProperty()).to(getModel().showNamesProperty());

        invoke(SET_QUESTION_ACTION, new Param(QUESTION, questionID));
    }
}
