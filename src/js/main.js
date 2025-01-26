import "/node_modules/fslightbox/index.js";
import "/node_modules/flowbite/dist/flowbite.js";
import "/node_modules/isotope-layout/dist/isotope.pkgd.min.js";
import { PATH_BASE, ID_SUFFIX } from "./constant.js";
import { loadPartial } from "./loadPartial.js";
import priceToggleInit from "./priceToggle.js";
import tabInit from "./tab.js";
import swipperInit from "./swipperInit.js";
import darkModeHandle from "./darkModeHandle.js";
import navScroll from "./navScroll.js";

loadPartial(`${PATH_BASE}/navbar.html`, `nav${ID_SUFFIX}`, () => {
  navScroll();
  darkModeHandle();
});
loadPartial(`${PATH_BASE}/hero.html`, `hero${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/feature.html`, `feature${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/about.html`, `about${ID_SUFFIX}`, () => {
  refreshFsLightbox();
});
loadPartial(`${PATH_BASE}/team.html`, `team${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/services.html`, `services${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/pricing.html`, `pricing${ID_SUFFIX}`, () => {
  priceToggleInit();
});
loadPartial(`${PATH_BASE}/projects.html`, `projects${ID_SUFFIX}`, () => {
  tabInit();
});
loadPartial(
  `${PATH_BASE}/testimonials.html`,
  `testimonials${ID_SUFFIX}`,
  () => {
    swipperInit();
  },
);
loadPartial(`${PATH_BASE}/counter.html`, `counter${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/clients.html`, `clients${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/blog.html`, `blog${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/contact.html`, `contact${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/cta.html`, `cta${ID_SUFFIX}`);
loadPartial(`${PATH_BASE}/footer.html`, `footer${ID_SUFFIX}`);
