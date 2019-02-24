// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
console.log (scrolled);
    if(scrolled  > 400) {
        $(".arrow-top").show();
    } else {
        $(".arrow-top").hide();
    }
});



