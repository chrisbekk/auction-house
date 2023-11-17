import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export function animateTitle() {
  const title = document.querySelector("#hero-title");
  gsap.to(title, {
    duration: 2.5,
    text: {
      value: "We Bring Good Deals To You",
      delimiter: "",
      padSpace: true,
    },
    ease: "none",
    delay: 2,
  });
}

animateTitle();
