import { getStorage } from "../store/getStorage";
export function isAuth(name) {
  if (!getStorage(name)) {
    console.log("is not authorized");
  } else {
    console.log("is authorized");
  }
}
