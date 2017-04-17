
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
