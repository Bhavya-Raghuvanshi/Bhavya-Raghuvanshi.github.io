var navbar = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".mobile-nav ul li");
window.onscroll = function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("stickyadd");
  } else {
    navbar.classList.remove("stickyadd");
  }

  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

var slider = tns({
  container: ".oliver_client",
  controlsText: ["<i class='mdi mdi-chevron-double-left'></i>", "<i class='mdi mdi-chevron-double-right'></i>"],
  loop: true,
  controls: true,
  autoplayButtonOutput: false,
  controlsPosition: "bottom",
  autoplay: true,
  nav: false,
  responsive: {
    1200: {
      gutter: 20,
      items: 3,
    },
    1024: {
      gutter: 20,
      items: 2,
    },
    991: {
      gutter: 20,
      items: 1,
    },
    768: {
      gutter: 20,
      items: 1,
    },
  },
});

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Menu Colleped
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Counter
var a = 0;
$(window).on("scroll", function () {
  var t = $("#counter").offset().top - window.innerHeight;
  0 == a &&
    $(window).scrollTop() > t &&
    ($(".count").each(function () {
        var t = $(this),
          n = t.attr("data-count");
        $({
          countNum: t.text()
        }).animate({
          countNum: n
        }, {
          duration: 2e3,
          easing: "swing",
          step: function () {
            t.text(Math.floor(this.countNum));
          },
          complete: function () {
            t.text(this.countNum);
          },
        });
      }),
      (a = 1));
});