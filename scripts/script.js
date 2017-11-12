$('window').on('scroll', function(){
    var theOffset = $(this).offset();
    $('body,html').animate({
        scrollTop: theOffset.top + 659
    });
});