package eu.javaland.ck.models;

import java.io.Serializable;

public class Vote implements Serializable {
    String id;
    String userId;
    int speakerId;
    String speakerName;
    int questionId;
    int questionAnswer;

    public Vote() {
    }

    public Vote(String id, String userId, int speakerId, String speakerName, int questionId, int questionAnswer) {
        this.id = id;
        this.userId = userId;
        this.speakerId = speakerId;
        this.speakerName = speakerName;
        this.questionId = questionId;
        this.questionAnswer = questionAnswer;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getSpeakerId() {
        return speakerId;
    }

    public void setSpeakerId(int speakerId) {
        this.speakerId = speakerId;
    }

    public String getSpeakerName() {
        return speakerName;
    }

    public void setSpeakerName(String speakerName) {
        this.speakerName = speakerName;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }

    public int getQuestionAnswer() {
        return questionAnswer;
    }

    public void setQuestionAnswer(int questionAnswer) {
        this.questionAnswer = questionAnswer;
    }
}
