import { clearStorage } from "../store/clearStorage";

export function signOut() {
  console.log("signing out");
  clearStorage();
  location.reload();
}
