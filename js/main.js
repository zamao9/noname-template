document.addEventListener("DOMContentLoaded", () => {
  /* Accordeon */
  const aboutUsHead = document.querySelectorAll(".about-us__accordeon-head"),
    aboutUsBody = document.querySelectorAll(".about-us__accordeon-body"),
    aboutUsArrow = document.querySelectorAll(".about-us__arrow"),
    footerHead = document.querySelectorAll(".footer__accordeon-head"),
    footerBody = document.querySelectorAll(".footer__accordeon-body"),
    footerArrow = document.querySelectorAll(".footer__arrow");

  const accordeon = (head, body, arrow) => {
    for (let i = 0; head.length > i; ++i) {
      head[i].addEventListener("click", (e) => {
        for (let i = 0; head.length > i; ++i) {
          head[i].classList.remove("active");
          for (let i = 0; arrow.length > i; ++i) {
            arrow[i].classList.remove("active");
          }
        }
        arrow[i].classList.add("active");
        e.currentTarget.classList.add("active");

        let content = head[i].nextElementSibling;

        if (content.style.maxHeight) {
          body.forEach((el) => {
            el.style.maxHeight = null;
            el.style.padding = "0 20px";
            arrow[i].classList.remove("active");
            head[i].classList.remove("active");
          });
        } else {
          body.forEach((el) => {
            el.style.maxHeight = null;
            el.style.padding = "0 20px";
            content.style.maxHeight = content.scrollHeight + 50 + "px";
            content.style.padding = "10px 20px";
            el.style.borderTop = "1px solid rgba(255, 255, 255, 0.5)";
          });
        }
      });
    }
  };
  accordeon(aboutUsHead, aboutUsBody, aboutUsArrow);
  if (window.innerWidth < 768) {
    accordeon(footerHead, footerBody, footerArrow);
  } else {
    false;
  }

  /* Pa rtners Swiper */
  const swiperPartners = new Swiper(".partners__swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    pagination: {
      el: ".partners__pagination",
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },
  });
});
