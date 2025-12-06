import header from "./header.html?raw";

export function Header() {
  const div = document.createElement("div");
  div.innerHTML = header;

  const element = div.firstElementChild;

  const btnOrder = element.querySelector(".button-order");

  if (btnOrder) {
    btnOrder.addEventListener("click", () => {
      window.open("https://wa.link/ne9y51", "_blank");
    });
  }

  const sidebar = element.querySelector(".sidebar");
  const btnHamburger = element.querySelector(".hamburger");
  const btnClose = element.querySelector(".sidebar-close");
  const links = element.querySelectorAll(".navigation-item a");

  function showSidebar() {
    sidebar.classList.remove("sidebar-hidden");
  }

  function hideSidebar() {
    sidebar.classList.add("sidebar-hidden");
  }

  btnHamburger.addEventListener("click", showSidebar);
  btnClose.addEventListener("click", hideSidebar);

  function updateActiveLink() {
    const hash = window.location.hash;

    links.forEach((link) => {
      const href = link.getAttribute("href");

      if (href === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  updateActiveLink();

  window.addEventListener("hashchange", updateActiveLink);

  return element;
}
