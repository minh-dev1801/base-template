import Isotope from "isotope-layout";
const tabInit = () => {
  window.addEventListener("load", () => {
    // Khởi tạo Isotope
    const grid = document.getElementById("projectsId");
    if (!grid) {
      console.error("Element with ID 'projectsId' not found.");
      return;
    }
    const iso = new Isotope(grid, {
      itemSelector: ".projects__item",
      layoutMode: "masonry",
      percentPosition: true,
    });
    // Lọc nội dung khi nhấn nút
    const buttons = document.querySelectorAll(".btn__tab__projects");
    if (!buttons.length) {
      console.error("No buttons with class 'btn__tab__projects' found.");
      return;
    }
    buttons.forEach((button) => {
      button.onclick = () => {
        // Thay đổi trạng thái "active"
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        // Lọc các phần tử
        const filterValue = button.dataset.filter || "*";
        iso.arrange({ filter: filterValue });
      };
    });
  });
};

export default tabInit;
