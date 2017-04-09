# New York Times Movie Review - Alexa Skill
An Alexa Skill created to interact with the New York Times Moview Reviews API
**Intent Schema**
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
