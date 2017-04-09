var Alexa = require('alexa-sdk');
var request = require('request');
 
const skillName = "Times Movie Reviews";
 
var handlers = {
 
    "RatingIntent": function () {
        var speechOutput = "";
        var movie = this.event.request.intent.slots.Movie.value;
        var self = this;

        request.get({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json",
            qs: {
                'api-key': process.env.TimesAPIKey,
                'query': movie
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            var title = "MPAA Rating of " + movie;
            speechOutput += movie + " was rated " + body.results[0].mpaa_rating;
            self.emit(':tellWithCard', speechOutput, title, speechOutput);
        })

        
    },

    "DateIntent": function () {
        var speechOutput = "";
        var movie = this.event.request.intent.slots.Movie.value;
        var self = this;

        request.get({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json",
            qs: {
                'api-key': process.env.TimesAPIKey,
                'query': movie
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            var title = "Premier of " + movie;
            speechOutput += movie + " premiered on " + body.results[0].opening_date;
            self.emit(':tellWithCard', speechOutput, title, speechOutput);
        })
    },

    "CriticIntent": function () {
        var speechOutput = "";
        var criticPicks = "";
        var self = this;

        request.get({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json",
            qs: {
                'api-key': process.env.TimesAPIKey,
                'critics-pick': "Y"
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            length = body.results.length;
            for(var i = 0; i<length; i++ ){
                if(i===length-1) {
                    criticPicks += "and ";
                }
                criticPicks += body.results[i].display_title + ", ";
            }
            var title = "Critic Picks ";
            speechOutput += "The Critic Picks are " + criticPicks;
            self.emit(':tellWithCard', speechOutput, title, speechOutput);
        })
    },

    "SummaryIntent": function () {
        var speechOutput = "";
        var movie = this.event.request.intent.slots.Movie.value;
        var self = this;

        request.get({
            url: "https://api.nytimes.com/svc/movies/v2/reviews/search.json",
            qs: {
                'api-key':process.env.TimesAPIKey,
                'query': movie
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            var title = "New York Times Review of " + movie;
            var imageObj = {
                smallImageUrl: body.results[0].multimedia.src,
                largeImageUrl: body.results[0].multimedia.src
            }
            speechOutput += body.results[0].summary_short; 
            self.emit(':tellWithCard', speechOutput, title, speechOutput, imageObj);
        })
    },
 
    "AMAZON.HelpIntent": function () {
        var speechOutput = "";
        speechOutput += "Here are some things you can say: ";
        speechOutput += "what is the parental rating of a movie ";
        speechOutput += "when did a movie premier. ";
        speechOutput += "You can also say stop if you're done. ";
        this.emit(':ask', speechOutput, speechOutput);
    },
 
    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },
 
    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },
 
    "LaunchRequest": function () {

        var speechText = "";
        speechText += "Hello, Ask me about any movies reviewed by the New York Times";
        this.emit(':ask', speechText);
       
    }
 
};
 
exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.cbac7eaf-0fb2-4504-b998-6e6718ad29b4";
    alexa.registerHandlers(handlers);
    alexa.execute();
};