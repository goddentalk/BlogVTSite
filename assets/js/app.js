/* Header */
let header = document.createElement("header");
header.setAttribute("class","header");
header.setAttribute("id","header");
header.innerHTML = `
<div class="container">
    <div class="header__inner">
        <div class="header__logo" data-scroll="#intro">OKBlog</div>
        <nav class="nav" id="nav">
            <a class="nav__link active" href="#"> News</a>
            <a class="nav__link" href="index_blog.html"> Blog</a>
            <a class="nav__link" href="#"> About</a>
            <a class="nav__link" href="https://vk.com/okoleloves"> <i class="fa-brands fa-vk"></i></a>
            <a class="nav__link" href="https://www.instagram.com/okoleloves/"> <i class="fa-brands fa-instagram"></i></a>
        </nav>
        <button class="nav-toggle" id="nav_toggle" type="button">
            <span class="nav-toggle__item">Menu</span>
        </button>
    </div>
</div>
`
document.querySelector("body")?.append(header)

/* Footer */
let footer = document.createElement("footer");
footer.setAttribute("class","footer");
footer.innerHTML = `
<div class="container">
        <div class="footer__inner">
            <div class="footer__col footer__col--first">
                <div class="footer_logo">OKBlog</div>
                <div class="footer__text">This is my blog where I talk about everything that is on my mind :)</div>
                <form class="subscribe" action="/" method="post">
                    <input class="subscribe__input" type="email" name="name" placeholder="Your email...">
                    <button class="subscribe__btn" type="submit">Subscribe</button>
                </form>
            </div>
            <div class="footer__col footer__col--second">
                <div class="footer__title">Blogs</div>
                <div class="blogs">
                    <div class="blogs__item">
                        <a href="#">
                            <img class="blogs__img" src="assets/images/blog/2.jpg" alt="">
                        </a>
                        <div class="blogs__content">
                            <a class="blogs__title" href="#">My movie WORLD</a>
                            <div class="blogs__date">5 Oct, 2022</div>
                        </div>
                        
                    </div>
                    <div class="blogs__item">
                        <a href="#">
                            <img class="blogs__img" src="assets/images/blog/1.jpg" alt="">
                        </a>
                        <div class="blogs__content">
                            <a class="blogs__title" href="#">My favorite reading!</a>
                            <div class="blogs__date">10 Sep, 2022</div>
                        </div>
                        
                    </div>
                    <div class="blogs__item">
                        <a href="#">
                            <img class="blogs__img" src="assets/images/blog/3.jpg" alt="">
                        </a>
                        <div class="blogs__content">
                            <a class="blogs__title" href="#">Why did I create a blog?</a>
                            <div class="blogs__date">21 Aug, 2022</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="footer__col footer__col--third">
                <div class="footer__title">Instagram</div>
                <div class="instagram">
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/1.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/2.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/3.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/4.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/5.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/6.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/7.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/8.jpg" alt="">
                    </a>
                    <a class="instagram__item" href="https://www.instagram.com/okoleloves/" target="_blank">
                        <img src="assets/images/instagram/9.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright">
            @ 2022 OKBook site by <span>goddentalk</span>
        </div>
    </div>
`
document.querySelector("body")?.append(footer)

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