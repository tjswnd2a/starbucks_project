const badgeEl = document.querySelector('header .badges');

// window -- 브라우저 창
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함, 시간)
// 300 -> 0.3초


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true //반복재생
});

new Swiper('.promotion .swiper', {
  direcition: 'horizontal', // 기본 값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

new Swiper('.awards .swiper', {
  direcition: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});





const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (!isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide')
  }
});

function random(min, max) {
  // .toFiexd()를 통해 변환된 문자 데이터를, 
  // parseFloat()을 통해 소수점을 가지는 숫자 데이터롤 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,
    random(1.5, 2.5), {
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 저장
    triggerHook: .8 // 0.8만큼의 트리거가 걸리면 애니메이션을 실행한다.
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

const topBtn = document.querySelector("#to-top");

topBtn.addEventListener("click", function() {
  console.log("aaa");
  window.scrollTo({top: 0, left: 0, behavior:'smooth'}); // x좌표, y좌표
})