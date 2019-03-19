#!/usr/bin/env bash

userId=0
while true; do
    questionAnswer=$(( (RANDOM % 4) + 1))
    speakerId=$(( (RANDOM % 2) + 1))
    body="{\"id\":\"fooo\", \"userId\":\"$userId\", \"speakerId\": $speakerId, \"speakerName\": \"\", \"questionId\": 1, \"questionAnswer\": $questionAnswer}"
    echo $body
    curl -H "Content-Type: application/json" -d "$body" -XPUT http://172.18.125.124:8080/votes
    sleep 0.1
    userId=$((userId+1))
done;