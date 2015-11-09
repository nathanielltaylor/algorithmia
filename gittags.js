var algorithmia = require("algorithmia");
var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var inputA = ["nathanielltaylor", "tweetmaps"];
var inputB = ["nathanielltaylor", "algorithmia"];

client.algo("/tags/AutoTagGithub/0.1.1").pipe(inputB).then(function(output) {
    if (output.error) {
      console.log(output.error);
    } else {
      console.log(output.result);
    }
});
