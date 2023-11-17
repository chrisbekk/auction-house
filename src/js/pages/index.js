import { animateTitle } from "../animations/title.js";

import { checkState } from "../state/user.js";
import { search } from "../listeners/search.js";
export function main() {
  animateTitle();
  checkState("#user-sign-button");
}

main();
