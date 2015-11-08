var algorithmia = require("algorithmia");
var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var input = "terrible";
var no_retweets = [];

console.log("Analyzing tweets containing keyword: " + input);
client.algo("/diego/RetrieveTweetsWithKeyword/0.1.2").pipe(input).then(function(output) {
    if (output.error) {
        console.log(output.error);
    } else {
        var tweets = [];
        var tweets = output.result;
        for (var i = 0; i < output.result.length; i++) {
          if (tweets[i].indexOf('RT') == -1) {
            no_retweets.push(tweets[i]);
          }
    }
}

analyze_tweets(no_retweets);
});

var analyze_tweets = function(no_retweets) {
    var total_score = 0;
    var score_count = 0;
    var final_score = 0;
    console.log("Please wait while tweets are analyzed.")
    console.log("The scores will be printed as they are determined, followed by an overall score.")

    for (var j = 0; j < no_retweets.length; j++) {
        client.algo("nlp/SentimentAnalysis/0.1.1").pipe(no_retweets[j]).then(function(output) {
        if(output.error) {
            console.log(output.error);
        } else {
            console.log(output.result + ' out of 4');
            score_count = score_count + 1;
            total_score = total_score + output.result;
        }
        if (score_count == no_retweets.length) {
            final_score = total_score / score_count;
            console.log('Final Score: ' + final_score + ' out of 4');
        }
    })
  }
}
