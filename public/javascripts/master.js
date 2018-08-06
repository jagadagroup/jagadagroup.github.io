$(document).ready(() => {
    var menu = $('#menu-button');
    var page = $('.page');
    var scale = 1-($('#menu-holder').width()/$(window).width())
    var transform = `scale(${scale})`;
    menu.click(event => {
        if (menu.hasClass('active')) {
            page.css({
                transform: 'none'
            });
            page.removeClass('active');
            menu.removeClass('active');
        } else {
            page.css({
                transform: transform
            });
            menu.addClass('active');
            page.addClass('active');
        }
    });
});