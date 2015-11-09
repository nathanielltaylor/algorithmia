var algorithmia = require("algorithmia");
var fs = require('fs');

var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var candidates = fs.readFileSync('articles/candidates.txt').toString();
var isis = fs.readFileSync('articles/isis.txt').toString();
var football = fs.readFileSync('articles/football.txt').toString();

var input = [[candidates, isis, football], 5];

client.algo("nlp/KeywordsForDocumentSet/0.1.7").pipe(input).then(function(output) {
  if (output.error) {
      console.log(output.error);
  } else {
      console.log(output.result);
  }
});
