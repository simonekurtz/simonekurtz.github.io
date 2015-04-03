$("#pirate").remove();

$("body").addClass("gradient");

//$("#toggle").click(function(){
//$("#status").html("GO");
//$("#status").css({"background-color" : "green"});
//$("#toggle").html("Stop");
//});

// SHORTHAND:

var clicked = false;

$("#toggle").click(function() {
    if (clicked == false) {
        $("#status").html("GO");.css({"background-color" : "green"});
        $(this).html("Stop");
        clicked = true;
    } else {
        $("#status").html("STOP").css({"background-color" : "red"});
        $(this).html("Start");
        clicked = false;
    }
});


