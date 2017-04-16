//-----front end logic-----
// $(function() {
//   $("#formFlow").submit(function() {
//     event.preventDefault();
//     var userInput = $("#textInput").val();
//     gameList = countNumbers(userInput);
//     storageArray.forEach(function(listItems) {
//       $("#listOutput").append('<li>' + listItems + '</li>');
//     });
//   });
// });

var Calculator = require('./../js/scripts.js').calculatorModule;

$(function() {
  $("#formFlow").submit(function() {
    event.preventDefault();
    var userInput = $("#textInput").val();

    var simpleCalculator = new Calculator("hot pink");
        var output = simpleCalculator.countNumbers(textInput);

    gameList = countNumbers(userInput);
    storageArray.forEach(function(listItems) {
      $("#listOutput").append('<li>' + listItems + '</li>');
    });
  });
});
