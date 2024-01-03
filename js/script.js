console.log("بسم الله الرحمن الرحيم");

$(document).ready(function() {
    $("#myButton").click(sayHello); 
    $(document).on("keypress", function (e) {
      if (e.which == 13) {
        e.preventDefault()
        sayHello();
      }
  });
});

function sayHello() {
  var inputText = $("#myInput").val();
  $("#say-hello").css("visibility", "visible").fadeIn(1000).text("Hello "+ inputText);  
}