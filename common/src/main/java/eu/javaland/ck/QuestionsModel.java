package eu.javaland.ck;

import dev.rico.remoting.Property;
import dev.rico.remoting.RemotingBean;

@RemotingBean
public class QuestionsModel {

    private Property<String> title;

    private Property<String> valueOneTitle;

    private Property<String> valueTwoTitle;

    private Property<Double> valueOne;

    private Property<Double> valueTwo;

    public Property<String> titleProperty() {
        return title;
    }

    public String getTitle() {
        return title.get();
    }

    public void setTitle(String title) {
        this.title.set(title);
    }

    public Property<String> valueOneTitleProperty() {
        return valueOneTitle;
    }

    public String getValueOneTitle() {
        return valueOneTitle.get();
    }

    public void setValueOneTitle(String valueOneTitle) {
        this.valueOneTitle.set(valueOneTitle);
    }

    public Property<String> valueTwoTitleProperty() {
        return valueTwoTitle;
    }

    public String getValueTwoTitle() {
        return valueTwoTitle.get();
    }

    public void setValueTwoTitle(String valueTwoTitle) {
        this.valueTwoTitle.set(valueTwoTitle);
    }

    public Property<Double> valueOneProperty() {
        return valueOne;
    }

    public Double getValueOne() {
        return valueOne.get();
    }

    public void setValueOne(Double valueOne) {
        this.valueOne.set(valueOne);
    }

    public Property<Double> valueTwoProperty() {
        return valueTwo;
    }

    public Double getValueTwo() {
        return valueTwo.get();
    }

    public void setValueTwo(Double valueTwo) {
        this.valueTwo.set(valueTwo);
    }
}
