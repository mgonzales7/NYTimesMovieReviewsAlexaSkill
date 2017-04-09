# New York Times Movie Review - Alexa Skill
An Alexa Skill created to interact with the New York Times Moview Reviews API
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
DateIntent when did {Movie} come out
DateIntent when did {Movie} premier
DateIntent is {Movie} out yet
```
