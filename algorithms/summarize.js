var algorithmia = require("algorithmia");
var fs = require('fs');

var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var candidates = fs.readFileSync('/articles/candidates.txt').toString();
var isis = fs.readFileSync('/articles/isis.txt').toString();
var football = fs.readFileSync('/articles/football.txt').toString();
var articles = [candidates, isis, football];

for (var i = 0; i <= articles.length; i++) {
  client.algo("nlp/Summarizer/0.1.2").pipe(articles[i]).then(function(output) {
      if (output.error) {
        console.log(output.error);
      } else {
        console.log(output.result);
      }
  });
}
