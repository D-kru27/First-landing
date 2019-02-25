$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    (scrolled  > 400) ? $(".arrow-top").show(): $(".arrow-top").hide();
});



