import About from "./about.html?raw";
import Home from "./home.html?raw";
import Product from "./product.html?raw";

export function Content() {
  const main = document.createElement("main");
  main.innerHTML = Home + About + Product;

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

  return main;
}
