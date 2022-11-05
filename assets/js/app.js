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

    $(document).mouseup(function(event) {

        event.preventDefault();

        var div = $("#nav_toggle");

        if (!div.is(event.target) && div.has(event.target).length === 0) {
            $("#nav").removeClass("active");
            $("#nav_toggle").removeClass("active");
        }

    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        
        event.preventDefault();

        var blockId= $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

})