// Persistent navi 
$(function(){
    var navTop = $('#floatingbar').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop() > navTop){
            $('#floatingbar').addClass('floater');
        } 
        else {
            $('#floatingbar').removeClass('floater');
        }
    });

// footer back to top
    var windowHeight = $(window).height();
    $(window).scroll(function(){
        if ($(window).scrollTop() > navTop){
            $('footer p a#topbutton').fadeIn(200);
        } 
        else {
            $('footer p a#topbutton').fadeOut(200);

        }
    });

// top button scroll
    $('footer p a#topbutton').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300); 
    });
});