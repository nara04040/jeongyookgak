$(document).ready(function () {
    let popup = $('.popup')
    let popup_close = $('.popup-first-exit')
    let header = $('.header')
    let icon_x = $('.more-div-close')
    let open_menu = $('.open-menu')
    let more_wrap = $('.more-wrap')
    let more_container = $('.more-container')

    // 햄버거 눌렀을때 나타나기
    open_menu.click(function () {
        more_wrap.show();
        more_container.addClass('more-container-slide');
    });
    // 닫기버튼 눌렀을때 닫히기 
    icon_x.click(function () {
        more_wrap.hide();
        more_container.removeClass('more-container-slide');
    });
    // 배경누르면 더보기 사라지기
    more_wrap.click(function () {
        more_wrap.hide();
        // more_container.hide();
        more_container.removeClass('more-container-slide');
    });
    // 다른곳 눌렀을때 닫히는거 막기
    more_container.click(function (event) {
        event.stopPropagation();
    });
    more_wrap.click(function () {
        buttonReset()
    })

});


window.onload = function () {
    // 스크롤시 header고정
    let header = $('.header');
    let wrap = $('.wrap');
    let fixY = $('.popup').height();

    // 스크롤 바 세로 상단 값
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > fixY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
        } else {
            header.removeClass('header-fix')
            wrap.removeClass('wrap-fix');
        };
    });
    // 팝업바 부드럽게 닫히기
    let popup_close = $('.popup-first-exit')
    popup_close.click(function () {
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

    /**
     * 
        1. 작성자 : 유한나라
        2. 작성일 : 2022.07.07
        3. 요구기능 : 
            a. 참조사이트 : [https://www.jeongyookgak.com/index](https://www.jeongyookgak.com/index)
            b. 베스트 상품 데이터 출력을 위한 업무
            c. 총 데이터 항목 개수는 6개
            d. 항목별 이름과 구조를 정의하시오
     */

    // 배열 예시
    // 베스트상품 데이터 목록

    // 베스트상품 이미지 목록

    // 베스트상품 타이틀 목록

    // 베스트상품 가격 목록

    // 베스트상품 옵션 1

    // 객체 예시
    /**
     * [
     *  {
     *      link(상품링크) : '상품링크주소'
     *      pic(제품사진) : '사진파일명'
     *      title(제품명) : '상품타이틀'
     *      itemDesc(상품가격/부가정보) :  '가격/부가정보'
     *      noGmo(무항생제인증) : '인증마크'
     *      cartLink(장바구니링크) :'장바구니페이지 링크 주소'
     *  }
     * ]
     */
    let bestItemsList = [{
        link: '#',
        pic: 'images/porkbelly-fresh-list.png',
        title: '초신선 돼지 삼겹살 구이용',
        itemDesc: '기준가 23,400원/600g',
        cartLink: '#'
    }, {
        link: '#',
        pic: 'images/chickef-cut-list.png',
        title: '초신선 닭볶음탕',
        itemDesc: '기준가 6,700원/950g',
        cartLink: '#'
    }, {
        link: '#',
        pic: 'images/porkcutlet-sirloin-list.png',
        title: '초신선 등심 돈까스',
        itemDesc: '기준가 11,800원/770g',
        cartLink: '#'
    }, {
        link: '#',
        pic: 'images/egg-fresh-list.png',
        title: '초신선 동물복지 무항생제 유정란',
        itemDesc: '기준가 7,800원/12구',
        noGmo: 'images/no-gmo.svg',
        cartLink: '#'
    }, {
        link: '#',
        pic: 'images/milk-fresh-list.png',
        title: '초신선 무항생제 우유',
        itemDesc: '기준가 3,600원/900ml',
        noGmo: 'images/no-gmo.svg',
        cartLink: '#'
    }, {
        link: '#',
        pic: 'images/baby-hanuround-bmix-list.png',
        title: '초신선 무항생제 이유식용 한우 우둔 다짐육',
        itemDesc: '기준가 15,300원/180g',
        noGmo: 'images/no-gmo.svg',
        cartLink: '#'
    }];

    let bestItemsData = $('.best-items-list');
    let bestItemsTotal = bestItemsList.length; 
    let bestItemsResult = '';
    for (let i = 0; i < bestItemsTotal; i++) {
        let data = bestItemsList[i];
        let temp = `
                    <li>
                        <a href="${data.link}">
                            <div class="no-gmo">
                                <img src="${data.noGmo}" alt="">
                            </div>
                                <div class="items-img-1">
                                    <img src="${data.pic}" alt="">
                                </div>
                            <div class="cart-img">
                                    <span class="material-icons-outlined">
                                        shopping_cart
                                    </span>
                            </div>
                        </a>
                        <h3>${data.title}</h3>
                        <p>${data.itemDesc}</p>
                    </li>
    `;
        bestItemsResult += temp;
    }
    bestItemsData.html(bestItemsResult)

};