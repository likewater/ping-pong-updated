//-----variables-----
var storageArray = [];

//-----backend logic-----
function countNumbers(counter) {
  for ( var i = 1 ; i <= counter; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    storageArray.push(f ? b ? "Ping-Pong" : "Ping" : b ? "Pong" : i);
  }
}

function resetFunction() {
  location.reload();
}

//-----front end logic-----
$(function() {
  $("#formFlow").submit(function() {
    event.preventDefault();
    var userInput = $("#textInput").val();
    gameList = countNumbers(userInput);
    storageArray.forEach(function(listItems) {
      $("#listOutput").append('<li>' + listItems + '</li>');
    });
  });
});
