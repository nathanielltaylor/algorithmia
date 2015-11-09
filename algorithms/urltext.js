var algorithmia = require("algorithmia");
var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var input = 'http://www.nytimes.com/';

client.algo("util/Url2Text/0.1.4").pipe(input).then(function(output) {
    if (output.error) {
      console.log(output.error);
    } else {
      console.log(output.result);
    }
});
