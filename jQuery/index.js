
/*
$("h1").click(function () {
    $("h1").css("color","purple");
});

$("h1").dblclick(function () {
    $("h1").css("color","blue");
});

$("h1").hover(function () {
    $("h1").css("color","green");
});

$("button").click(function () {
    $("h1").css("color", "pink")
    
});

$("h1").on("mouseover", function () {
   $("h1").css("color","red") ;
})

$(document).keypress(function (event){
    $("h1").text(event.key);
});*/
/*
$("button").click(function () {
    $("h1").slideToggle();
    
});
*/


//animate() function adds only css rule that contains numberical values
$("button").on("click", function () {
    $("h1").animate({opacity: 0.5});
    
});

