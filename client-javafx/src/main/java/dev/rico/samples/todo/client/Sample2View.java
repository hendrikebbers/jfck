package dev.rico.samples.todo.client;

import dev.rico.client.remoting.ClientContext;
import dev.rico.client.remoting.FXBinder;
import dev.rico.client.remoting.view.AbstractFXMLViewController;
import dev.rico.client.remoting.view.AbstractViewController;
import dev.rico.samples.todo.Sample2Bean;
import dev.rico.samples.todo.ToDoItem;
import dev.rico.samples.todo.ToDoList;
import javafx.fxml.FXML;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;

public class Sample2View extends AbstractViewController<Sample2Bean> {

    private Label label = new Label("huhu");

    public Sample2View(ClientContext clientContext) {
        super(clientContext, "sample2");
    }

    @Override
    protected void init() {
    }

    @Override
    public Node getRootNode() {
        return label;
    }
}
