$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    (scrolled  > 400) ? $(".arrow-top").show(): $(".arrow-top").hide();
});

$('.burger').click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    return false;
});



