package eu.javaland.ck;

import dev.rico.remoting.Property;
import dev.rico.remoting.RemotingBean;

@RemotingBean
public class TeamsModel {

    private Property<String> title;

    private Property<String> valueOneTitle;

    private Property<String> valueTwoTitle;

    private Property<Double> valueOne;

    private Property<Double> valueTwo;

    private Property<Boolean> showNames;

    public Property<Boolean> showNamesProperty() {
        return showNames;
    }

    public Property<String> titleProperty() {
        return title;
    }

    public Property<String> valueOneTitleProperty() {
        return valueOneTitle;
    }

    public Property<String> valueTwoTitleProperty() {
        return valueTwoTitle;
    }

    public Property<Double> valueOneProperty() {
        return valueOne;
    }

    public Property<Double> valueTwoProperty() {
        return valueTwo;
    }
}
