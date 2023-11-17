import { toStorage } from "../store/toStorage";

export function signIn() {
  console.log("signed in");
  toStorage("token", "value");

  location.reload();
}
