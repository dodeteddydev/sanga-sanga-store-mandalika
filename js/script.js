// HEADER
const btn = document.getElementById("mobile-navigation-toggle");
const menu = document.getElementById("mobile-navigation");

btn.addEventListener("click", () => {
  const open = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", String(!open));
  menu.hidden = open;
});

const btnOrderNow = document.querySelector(".header__button-order");

btnOrderNow.addEventListener("click", () => {
  window.open("https://wa.link/ne9y51", "_blank");
});

// PRODUCT
const btnBuyProduct = document.querySelector("#buy-product");

btnBuyProduct.addEventListener("click", () => {
  window.open("https://wa.link/ne9y51", "_blank");
});
