import { animateTitle } from "../animations/title.js";
import { isAuth } from "../auth/isAuth";

export function main() {
  animateTitle();
  isAuth("token");
}

main();
