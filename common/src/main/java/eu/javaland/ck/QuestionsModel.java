package eu.javaland.ck;

import dev.rico.remoting.Property;
import dev.rico.remoting.RemotingBean;

@RemotingBean
public class QuestionsModel {

    private Property<String> title;

    private Property<String> valueOneTitle;

    private Property<String> valueTwoTitle;

    private Property<String> valueThreeTitle;

    private Property<String> valueFourTitle;

    private Property<Double> valueOne;

    private Property<Double> valueTwo;

    private Property<Double> valueThree;

    private Property<Double> valueFour;

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

    public Property<String> valueThreeTitleProperty() {
        return valueThreeTitle;
    }

    public Property<String> valueFourTitleProperty() {
        return valueFourTitle;
    }

    public Property<Double> valueOneProperty() {
        return valueOne;
    }

    public Property<Double> valueTwoProperty() {
        return valueTwo;
    }

    public Property<Double> valueThreeProperty() {
        return valueThree;
    }

    public Property<Double> valueFourProperty() {
        return valueFour;
    }
}
