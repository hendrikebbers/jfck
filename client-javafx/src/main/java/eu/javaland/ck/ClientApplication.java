package eu.javaland.ck;

import dev.rico.client.remoting.AbstractRemotingApplication;
import dev.rico.client.remoting.ClientContext;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

import java.net.MalformedURLException;
import java.net.URL;

import static eu.javaland.ck.TeamConstants.BUILD_TOOLS;
import static eu.javaland.ck.TeamConstants.ENTERPRISE;
import static eu.javaland.ck.TeamConstants.IDES;

public class ClientApplication extends AbstractRemotingApplication {

    protected URL getServerEndpoint() throws MalformedURLException {
        return new URL("http://localhost:8080/remoting");
    }

    protected void start(Stage primaryStage, ClientContext clientContext) throws Exception {
        final Button buildToolsButton = createTeamButton(clientContext, BUILD_TOOLS, "Build tools");
        final Button enterpriseButton = createTeamButton(clientContext, IDES, "IDEs");
        final Button ideButton = createTeamButton(clientContext, ENTERPRISE, "Enterprise frameworks");

        final Button question1Button = createQuestionButton(clientContext, 0, "1");
        final Button question2Button = createQuestionButton(clientContext, 1, "2");

        final HBox box = new HBox(buildToolsButton, enterpriseButton, ideButton, question1Button, question2Button);

        primaryStage.setScene(new Scene(box));
        primaryStage.show();
    }

    private Button createTeamButton(final ClientContext clientContext, final String teamId, final String buttonText) {
        final Button button = new Button(buttonText);
        button.setOnAction(e -> {
            final TeamViewController teamViewController = new TeamViewController(clientContext, teamId);
            final Stage stage = new Stage();
            stage.setScene(new Scene(teamViewController.getParent()));
            stage.show();
        });
        return button;
    }

    private Button createQuestionButton(final ClientContext clientContext, final int questionId, final String buttonText) {
        final Button button = new Button(buttonText);
        button.setOnAction(e -> {
            final QuestionViewController teamViewController = new QuestionViewController(clientContext, questionId);
            final Stage stage = new Stage();
            stage.setScene(new Scene(teamViewController.getParent()));
            stage.show();
        });
        return button;
    }


    public static void main(String[] args) {
        launch();
    }

}
