$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 150) $("#container").css({top: '0', position: 'relative', zIndex: '100'});
        else $("#container").css({top: '0', position: 'fixed'});
    });
});
