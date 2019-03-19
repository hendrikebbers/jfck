package eu.javaland.ck;

import dev.rico.client.remoting.AbstractRemotingApplication;
import dev.rico.client.remoting.ClientContext;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

import java.net.MalformedURLException;
import java.net.URL;

import static eu.javaland.ck.TeamConstants.BUILD_TOOLS;

public class ClientApplication extends AbstractRemotingApplication {

    protected URL getServerEndpoint() throws MalformedURLException {
        return new URL("http://localhost:8080/remoting");
    }

    protected void start(Stage primaryStage, ClientContext clientContext) throws Exception {
        final Button buildToolsButton = new Button("BuildTools");
        buildToolsButton.setOnAction(e -> {
            final TeamViewController teamViewController = new TeamViewController(clientContext, BUILD_TOOLS);
            final Stage stage = new Stage();
            stage.setScene(new Scene(teamViewController.getParent()));
            stage.show();
        });

        primaryStage.setScene(new Scene(buildToolsButton));
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch();
    }

}
