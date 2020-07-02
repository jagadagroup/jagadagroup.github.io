$('#ham-burger').click(e => console.log);
console.log($('#ham-burger'));


$(window).scroll(function() {
    if ($(window).scrollTop() + 200 > $('.em-circle').offset().top) {
        // trigger
        $(window).off('scroll');
        var data = [];
        console.log(this);

        // $('.em-circle').each(function(i, div) {
            $('.em-circle > span').each(function(i, span) {
                data.push(+span.innerText);
                span.innerText = 0;
            });
            var count = 0;
            var timer = setInterval(function() {
                $('.em-circle > span').each(function(i, span) {
                    if (data[i] > +span.innerText) {
                        span.innerText = +span.innerText + 1;
                    }
                });
                if (count > 10) {
                    clearInterval(timer);
                } else {
                    count++;
                }
            }, 100);
        // });
    }
})