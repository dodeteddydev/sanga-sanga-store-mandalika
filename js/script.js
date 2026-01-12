// HEADER
const header = document.querySelector("header");

const btnOrder = header.querySelector(".button-order");

if (btnOrder) {
  btnOrder.addEventListener("click", () => {
    window.open("https://wa.link/ne9y51", "_blank");
  });
}

const sidebar = header.querySelector(".sidebar");
const btnHamburger = header.querySelector(".hamburger");
const btnClose = header.querySelector(".sidebar-close");
const links = header.querySelectorAll(".navigation-item a");

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

// CONTENT
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.location.hash = entry.target.id;
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

const main = document.querySelector("main");

const buttonShopNow =
  main.querySelector(".button-order").textContent.trim() ===
  "Belanja Sekarang !";

if (buttonShopNow) {
  main.querySelector(".button-order").addEventListener("click", () => {
    window.location.hash = "#produk";
  });
}

const buttonOrderNow = [...main.querySelectorAll(".button-order")].filter(
  (button) => button.textContent.trim() === "Pesan Sekarang !"
);

if (buttonOrderNow.length) {
  buttonOrderNow.forEach((button) => {
    button.addEventListener("click", () => {
      window.open("https://wa.link/ne9y51", "_blank");
    });
  });
}

// FOOTER
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
