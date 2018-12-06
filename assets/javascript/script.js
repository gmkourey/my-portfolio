document.addEventListener("scroll", function () {

    var windowHeight = $(window).innerHeight();

    var topWindow = $(window).scrollTop();

    //Slide in summary if top of screen is at 50% of vertical height
    if(topWindow > (0.5 * windowHeight)) {
        $(".summarycontainer").animate({left: "0px"}, 1000);
    } 
    
    if(topWindow > (1.5 * windowHeight)) {
        $(".card1").animate({left: "0px"}, 1000);
        setTimeout(function() {
            $(".card2").animate({left: "0px"}, 1000);
        }, 250)
        setTimeout(function() {
            $(".card3").animate({left: "0px"}, 1000);
        }, 500)
        setTimeout(function() {
            $(".card4").animate({left: "0px"}, 1000);
        }, 750)
        setTimeout(function() {
            $(".card5").animate({left: "0px"}, 1000);
        }, 1000)
        setTimeout(function() {
            $(".card6").animate({left: "0px"}, 1000);
        }, 1250)
        setTimeout(function() {
            $(".card7").animate({left: "0px"}, 1000);
        }, 1500)
    }
});

$(".card-grid").flip({trigger: "click"});
