var algorithmia = require("algorithmia");

var client = algorithmia(process.env.ALGORITHMIA_API_KEY);

var inputA = "http://www.lenna.org/full/len_full.jpg";
var inputB = "http://41.media.tumblr.com/3a0c494d4e3f781e8b7febcdffefd03a/tumblr_mo1szoyMdb1sud95yo1_500.jpg";
var inputC = "https://40.media.tumblr.com/12354f6cb4a7c3b569ef3320ce7a4ca4/tumblr_mixdiqkq0a1s5xd19o1_500.jpg";

client.algo("sfw/NudityDetection/1.0.x").pipe(inputA).then(function(output) {

  if (output.error) {
    console.log(output.error);
  } else {

    var result = output.result;
    var confidence = result.confidence;

    if (confidence < 0.85) {
      console.log("Uncertain");
    } else if (result['nude'] == 'true') {
      console.log("Nude");
    } else {
      console.log("Not nude");
    }
  }
});
