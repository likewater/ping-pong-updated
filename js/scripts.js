//backend logic
$(function() {
  var count = function countNumbers(counter) {
    for (var i = 1; i <= counter; i++) {
      var f = i % 3 == 0, b = i % 5 == 0;
      console.log(f ? b ? "Ping-Pong" : "Ping" : b ? "Pong" : i);
      //Thanks Paul Irish!
      $("#listOutput").append('<li>' + (f ? b ? "Ping-Pong" : "Ping" : b ? "Pong" : i) + '</li>');
    }
    return result;
  }

//front end logic
  $("#formFlow").submit(function() {
    event.preventDefault();
    var userInput = $("#textInput").val();
    result = count(userInput);
  });
});

function resetFunction() {
  location.reload();
  }
