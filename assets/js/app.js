$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    /* Fixed header */
    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset){

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){

        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

})