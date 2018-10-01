//Function to make down arrow like a gif
function gif () {
var windowHeight = $(window).height();
var i = 0;
$(".downbutton").css("top", windowHeight - 300);
$("#scroll").css("top", "0px");
$("#scroll").animate({top: "10px"}, 1000, function() {
gif();
});
}
gif();
$(".scrollcont").on("click", function () {
    $(".head-name").animate({top: "-100vh"}, 1000);
    setTimeout(function() {
        $(".subheading").animate({top: "-100vh"}, 750)
    }, 500)
    setTimeout(function() {
        $('body, html').animate({scrollTop: $(window).height()}, 1250);

    }, 1000);
    setTimeout(function() {
    $(".head-name").removeAttr("style");
    $(".subheading").removeAttr("style");
    }, 2000)
});

$(".scroll-up").on("click", function () {
    console.log("clicked");
    $('body, html').animate({scrollTop: (-1 * $("body").height())}, 1250);
    $(".scroll-up-about").css("position", "absolute");
});

// setTimeout(function() {
//     $(".rotate").fadeIn();
// }, 2000)

$(".card-grid").hover(function() {
    $(".rotate").fadeIn();
}, function() {
    $(".rotate").fadeOut();
}
)

$(".card-grid").flip({trigger: "click"});
