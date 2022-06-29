$(document).ready(function () {
    let popup = $('.popup')
    let popup_close = $('.popup-first-exit')
    let header = $('.header')
    let icon_x = $('.more-div-close')
    let open_menu = $('.open-menu')
    let more_wrap = $('.more-wrap')
    let more_container = $('.more_container')

    // 햄버거 눌렀을때 나타나기
    open_menu.click(function () {
        more_wrap.show();
        more_container.show();
    })
    // 닫기버튼 눌렀을때 닫히기 
    icon_x.click(function () {
        more_wrap.hide();
        more_container.hide();
    })
    // 배경누르면 더보기 사라지기

    
})

window.onload = function () {
    // 스크롤시 header고정
    let header = $('.header');
    let wrap = $('.wrap');
    let fixY = $('.popup').height();

    // 스크롤 바 세로 상단 값
    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > fixY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
        }else {
            header.removeClass('header-fix')
            wrap.removeClass('wrap-fix');
        };
    });
    // 팝업바 부드럽게 닫히기
    let popup_close = $('.popup-first-exit')
    popup_close.click(function(){
        fixY = 0;
        $('.popup').slideUp(300)
    });


    new Swiper('.sw-event', {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

};