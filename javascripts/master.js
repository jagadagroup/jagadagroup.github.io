var main = () => {
    var init = true;
    var menu = $('#menu-button');
    var menuHolder = $('#menu-holder');
    var page = $('.page');
    var scale = 1 - ($('#menu-holder').width() / $(window).width());
    var diff, transform;
    if (scale < 0.75) {
        diff = (0.75 - scale) * page.width();
        scale = 0.75;
        transform = `translateX(-${diff}px) scale(${scale})`;
    } else {
        transform = `scale(${scale})`;
    }
    menu.unbind('click');
    if (init) {
        menu.click(event => {
            if (menu.hasClass('active')) {
                page.css({
                    transform: 'none'
                });
                page.removeClass('active');
                menu.removeClass('active');
                menuHolder.removeClass('active');
            } else {
                page.css({
                    transform: transform
                });
                menu.addClass('active');
                menuHolder.addClass('active');
                page.addClass('active');
            }
        });
        init = false;
    }

    // adding expand and collapse action to menu
    $('.menu-rollout').click(function() {
        var subMenu = $(this);
        subMenu.text(
            /\+/.test(subMenu.text())? subMenu.text().replace(/\+/, '-') : subMenu.text().replace(/\-/, '+')
        );
        subMenu.next()
            .toggleClass('d-none')
            .toggleClass('d-flex');
        // if (subMenu.hasClass('d-none')) {
        //     subMenu
        // }
    });
}

$(document).ready(main);
$(window).resize(() => {
    var menu = $('#menu-button');
    var menuHolder = $('#menu-holder');
    var page = $('.page');
    page.css({
        transform: 'none'
    });
    page.removeClass('active');
    menu.removeClass('active');
    menuHolder.removeClass('active');
    main();
});