$(window).scroll(function() {
    $(".header-image").css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });          
});