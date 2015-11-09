var algorithmia = require("algorithmia");
var client = algorithmia(process.env.ALGORITHMIA_API_KEY);
var english = "This is a demo sentence for language detection.";
var thai = "นี่คือ ประโยค ตัวอย่างสำหรับ การตรวจหาภาษา";
var russian = "Это демо приговор для обнаружения языка.";
var spanish = "Esta es una sentencia de demostración para la detección de idioma."

var samples = [english, thai, russian, spanish];

for (i = 0; i <= samples.length; i++){
  client.algo("/nlp/LanguageIdentification/0.1.0").pipe(samples[i]).then(function(output) {
      if (output.error) {
          console.log(output.error);
      } else {
          console.log(output.result);
      }
  });
};
