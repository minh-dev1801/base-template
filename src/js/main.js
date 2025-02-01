// Nhập các thư viện từ node_modules
import "swiper/css";
import "fslightbox/index.js"; // JS cho fslightbox
import "flowbite/dist/flowbite.js"; // JS cho Flowbite
import "/src/input.css";

// Nhập các file và hàm khác trong dự án
import { PATH_BASE, ID_SUFFIX } from "./constant.js";
import { loadPartial } from "./loadPartial.js";
import priceToggleInit from "./priceToggle.js";
import tabInit from "./tab.js";
import swipperInit from "./swipperInit.js";
import darkModeHandle from "./darkModeHandle.js";
import navScroll from "./navScroll.js";
import "./scrollUpInit.js";
import { animateTop, animateLeft, animateRight } from "./scrollRevealInit.js";

// Tải các partials HTML động
loadPartial(`${PATH_BASE}/navbar.html`, `nav${ID_SUFFIX}`, () => {
  navScroll();
  darkModeHandle();
});
loadPartial(`${PATH_BASE}/hero.html`, `hero${ID_SUFFIX}`, () => {
  animateLeft();
});
loadPartial(`${PATH_BASE}/feature.html`, `feature${ID_SUFFIX}`, () => {
  const items = [
    { name: ".animate-top", delay: 0 },
    { name: ".animate-top-delay-1", delay: 200 },
    { name: ".animate-top-delay-2", delay: 400 },
  ];
  items.forEach((item) => {
    ScrollReveal().reveal(item.name, {
      origin: "top",
      duration: 3000,
      distance: "30px",
      delay: item.delay,
      reset: false,
    });
  });
});
loadPartial(`${PATH_BASE}/about.html`, `about${ID_SUFFIX}`, () => {
  refreshFsLightbox();
  animateRight();
  animateLeft();
});
loadPartial(`${PATH_BASE}/team.html`, `team${ID_SUFFIX}`, () => {
  animateTop();
});
loadPartial(`${PATH_BASE}/services.html`, `services${ID_SUFFIX}`, () => {
  animateTop();
});
loadPartial(`${PATH_BASE}/pricing.html`, `pricing${ID_SUFFIX}`, () => {
  priceToggleInit();
  animateTop();
});
loadPartial(`${PATH_BASE}/projects.html`, `projects${ID_SUFFIX}`, () => {
  tabInit();
  animateTop();
});
loadPartial(
  `${PATH_BASE}/testimonials.html`,
  `testimonials${ID_SUFFIX}`,
  () => {
    swipperInit();
    animateTop();
  },
);
loadPartial(`${PATH_BASE}/counter.html`, `counter${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/clients.html`, `clients${ID_SUFFIX}`, () => {
  animateTop();
});
loadPartial(`${PATH_BASE}/blog.html`, `blog${ID_SUFFIX}`, () => {
  animateTop();
});
loadPartial(`${PATH_BASE}/contact.html`, `contact${ID_SUFFIX}`, () => {
  animateTop();
});
loadPartial(`${PATH_BASE}/cta.html`, `cta${ID_SUFFIX}`, () => {
  animateLeft();
  animateRight();
});
loadPartial(`${PATH_BASE}/footer.html`, `footer${ID_SUFFIX}`, () => {
  animateTop();
});
