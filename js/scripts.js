$(function() {


  $("#word-play form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence1").val();
    var userArray = userInput.split(' ');
    var length3 = [];
    userArray.forEach(function(word) {
      if(word.length >= 3) {
        length3.push(word);
      }
    });

    length3.reverse();
    var newString = length3.join(' ');
    $("#new-string").append(newString);

  })
});
