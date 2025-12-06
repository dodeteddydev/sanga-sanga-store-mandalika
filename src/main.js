import "./styles/global.css";
import { Header } from "./screens/header/index";
import { Content } from "./screens/content/index";
import { Footer } from "./screens/footer/index";

const app = document.querySelector("#app");

app.appendChild(Header());
app.appendChild(Content());
app.appendChild(Footer());

app.querySelector(".logo").addEventListener("click", () => {
  window.location.hash = "#beranda";
});

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
