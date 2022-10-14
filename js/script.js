$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 30,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
      nav: false,
    },
    992: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      loop: false,
      nav: true,
    },
    1200: {
      items: 3,
      loop: false,
      nav: true,
    },
  },
});
//
document.querySelector(
  "[aria-label=Next]"
).innerHTML = `<img src="img/right-nav.svg" alt="">`;
document.querySelector(
  "[aria-label=Previous]"
).innerHTML = `<img src="img/left-nav.svg" alt="">`;

//hamberger functionality
const openBtn = document.querySelector(".hamberger-open");
const closeBtn = document.querySelector(".hamberger-close");
const mainHambergerCon = document.querySelector(".custom-menu");
const links = document.querySelectorAll(".menu-item-link");
const footerLinks = document.querySelectorAll(".new-footer-link");

function openHamberger() {
  mainHambergerCon.style.transform = "translateX(0)";
}
function closeHamberger() {
  mainHambergerCon.style.transform = "translateX(100%)";
}

function smoothScroll(e, element) {
  e.preventDefault();
  closeHamberger();
  const sectionId = element.getAttribute("href");
  document
    .querySelector(sectionId)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  // console.log(sectionId);
}

function smoothScrollFooter(e, element) {
  e.preventDefault();
  const sectionId = element.getAttribute("href");
  document
    .querySelector(sectionId)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  // console.log(sectionId);
}

links.forEach((cur) =>
  cur.addEventListener("click", (e) => {
    smoothScroll(e, e.target);
  })
);
footerLinks.forEach((cur) =>
  cur.addEventListener("click", (e) => {
    smoothScrollFooter(e, e.target);
  })
);

openBtn.addEventListener("click", openHamberger);
closeBtn.addEventListener("click", closeHamberger);