$(document).ready(function (){
    let popup = $('.popup')
    let popup_close = $('.popup-first-exit')
    let header = $('.header')
    let icon_x = $('.more-div-close')
    // 닫기 눌렀을때 창 닫힘
    popup_close.click(function(){
        popup.addClass('popup-close')
        icon_x.addClass('more-div-none')
    })
    // Scroll
    $(window).scroll(function () {
        // 위치
        let temp = $(window).scrollTop();
        // if(popup_close) {
        //     header.addClass('header-fix')
        // } else {

        //숨기기
        if(temp > 60) {
            header.addClass('header-fix')
        }else{
            header.removeClass('header-fix')
        }
    })
    // 새로고침했을때 페이지 상단으로
    $(function(){
        setTimeout(function(){
            scrollTo(0,0);
        }, 100)
    })
})

window.onload = function () {
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