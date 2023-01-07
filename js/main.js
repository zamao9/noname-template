document.addEventListener("DOMContentLoaded", () => {
  /* Burger - Nav */
  const burgerActive = () => {
    const burger = document.querySelector(".header__burger"),
      nav = document.querySelector(".nav"),
      links = document.querySelectorAll(".nav__link"),
      body = document.getElementsByTagName("body");

    burger.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      nav.classList.toggle("active");
      body[0].classList.toggle("active");
    });

    for (let i = 0; links.length > i; ++i) {
      links[i].addEventListener("click", (e) => {
        for (i = 0; links.length > i; ++i) {
          links[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
        nav.classList.remove("active");
        burger.classList.remove("active");
        body[0].classList.remove("active");
      });
    }
  };
  burgerActive();

  /* Active Link Of Scroll */
  const links = document.querySelectorAll(".nav__link"),
    section = document.querySelectorAll(".section"),
    header = document.querySelector(".header__head");
  const navInit = (link, section, header) => {
    section.forEach((section) => {
      if (window.pageYOffset + header.offsetHeight + 1 >= section.offsetTop) {
        link.forEach((li) => {
          li.classList.remove("active");
          if (li.dataset.section === section.dataset.section) {
            li.classList.add("active");
          }
        });
      }
    });
  };
  navInit(links, section, header);
  window.addEventListener("scroll", () => {
    navInit(links, section, header);
  });
  window.addEventListener("resize", () => {
    navInit(links, section, header);
  });

  /* Burger On Scroll */
  window.onscroll = () => {
    const header = document.querySelector(".header__head"),
      up = document.querySelector(".up");
    if (window.scrollY > 10) {
      header.classList.add("scroll");
    } else if (window.scrollY < 10) {
      header.classList.remove("scroll");
    }

    if (window.scrollY > 200) {
      up.classList.add("active");
    } else if (window.scrollY < 200) {
      up.classList.remove("active");
    }
  };

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

/* Scroll On Link */
$(function () {
  $("[data-scroll").click(function (event) {
    event.preventDefault();

    let blockId = $(this).data("scroll"),
      header = document.querySelector(".header__head");

    let blockOffset = $(blockId).offset().top - header.offsetHeight;

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      900
    );
  });
});
