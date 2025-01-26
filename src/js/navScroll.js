import { SCROLL_THRESHOLD } from "./constant.js";

export default function navScroll() {
  const elNavbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    elNavbar.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
  });
}
