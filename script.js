$(".Start").click(function() {
    $(".Hello").show();
    $(".Question").show();
});

$(".Question").click(function() {
    $(".Hello").hide();
    $(".Start").hide();
    $(".Question").hide();
    $(".Begin").hide();
    $(".Accept").show();
    $(".Help").show();
    $(".Adventure").show();
});

$(".Adventure").click(function() {
    $(".Outside").show();
    $(".Accept").hide();
    $(".Help").hide();
    $(".Adventure").hide();
    $(".Walk").show();
});

$(".Walk").click(function() {
    $(".Dungeon").fadeIn();
    $(".Walk").hide();
    $(".Outside").fadeOut();
    $(".Inside").show();
});

$(".Inside").click(function() {
    $(".Bandits").fadeIn();
    $(".Inside").hide();
    $(".Dungeon").fadeOut();
    $(".Sneak").show();
    $(".Attack").show();
});

$(".Sneak").click(function() {
    $(".Bandits").hide();
    $(".Choice1").show();
    $(".Attack").hide();
    $(".Sneak").hide();
    $(".Snuck").show();
    $(".CutDown").show();

});

$(".Attack").click(function() {
    $(".Bandits").hide();
    $(".Choice2").show();
    $(".Attack").hide();
    $(".Sneak").hide();
    $(".Survied").show();
    $(".CutDown").show();
    $(".Choice1").show();
});

$(".CutDown").click(function() {
    $(".Run").show();
    $(".Snuck").hide();
    $(".Survied").hide();
    $(".Catch").show();
    $(".Choice1").hide();
    $(".CutDown").hide();
    $(".Choice2").hide();
    $(".Leave").show();
    $(".GoFurther").show();
    $(".Door").show();
});


$(".Leave").click(function() {
    $(".ImBack").show();
    $(".Door").hide();
    $(".Survied").hide();
    $(".Payment").show();
    $(".Septims").show();
    $(".Leave").hide();
    $(".GoFurther").hide();
    $(".Run").hide();
    $(".Catch").hide();
    $(".End").show();
});

$(".GoFurther").click(function() {
    $(".Door").hide();
    $(".Survied").hide();
    $(".Leave").hide();
    $(".GoFurther").hide();
    $(".Run").hide();
    $(".Catch").hide();
    $(".DragonStone").show();
    $(".DeepWithin").show();
    $(".Exit").show();
});

$(".Exit").dblclick(function() {
    $(".ExitP").show();
    $(".ImBack").show();
    $(".Payment").show();
    $(".Septims").show();
    $(".Exit").hide();
    $(".DragonStone").hide();
    $(".DeepWithin").hide();
    $(".End").show();
});

$(".End").mouseenter(function() {
    $(".End").text("Hi you found the random secret nothing new just different text hope the game was fun :)");
});