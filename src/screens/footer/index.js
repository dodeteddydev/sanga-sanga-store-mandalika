import footer from "./footer.html?raw";

export function Footer() {
  const div = document.createElement("div");
  div.innerHTML = footer;

  const year = div.querySelector(".year");
  year.textContent = new Date().getFullYear();

  return div.firstElementChild;
}
