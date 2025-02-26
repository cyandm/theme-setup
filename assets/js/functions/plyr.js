import Plyr from "plyr";
import "plyr/dist/plyr.css";

export function PlyrLibs() {
  const plyrElements = document.querySelectorAll(".plyr_element");

  plyrElements.forEach((el) => {
    const player = new Plyr(el);
    console.log(el);
  });
}
