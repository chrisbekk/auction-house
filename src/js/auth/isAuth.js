import { getStorage } from "../store/getStorage";
export function isAuth(name) {
  if (!getStorage(name)) {
    console.log("is not authorized");
    document.querySelector("#profile-href").style.display = "none";
    return false;
  } else {
    console.log("is authorized");
    document.querySelector("#profile-href").style.display = "block";
    return true;
  }
}
