# New York Times Movie Review - Alexa Skill
An Alexa Skill created to interact with the New York Times Movie Reviews API

It runs hosted via a Lambda function on Amazon Webservices. The Alexa Skill Kit settings are below.

## Intent Schema
```
{
  "intents": [
    {
      "slots": [
        {
          "name": "Movie",
          "type": "movie"
        }
      ],
      "intent": "RatingIntent"
    },
    {
      "slots": [
        {
          "name": "Movie",
          "type": "movie"
        }
      ],
      "intent": "SummaryIntent"
    },
    {
      "slots": [
        {
          "name": "Movie",
          "type": "movie"
        }
      ],
      "intent": "DateIntent"
    }
  ]
}
```
## Sample Utterances
```
RatingIntent what is the rating of {Movie}
RatingIntent is {Movie} appropriate for kids
RatingIntent what is the parental rating of {Movie}
RatingIntent what is {Movie} rated
SummaryIntent summarize {Movie}
SummaryIntent {Movie}
SummaryIntent tell me about {Movie}
SummaryIntent about {Movie}
DateIntent when did {Movie} come out
DateIntent when did {Movie} premier
DateIntent is {Movie} out yet
CriticIntent what are the critic picks
CriticIntent critic picks
```
