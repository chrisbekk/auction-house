import { getListings } from "../js/api/getListings.js";
import { productCard } from "../js/components/productCard.js";
import { searchListings } from "../js/listeners/searchListings.js";
import { filterListings } from "../js/utils/filterListings.js";
import { getParam } from "../js/utils/getParam.js";
import "../scss/styles.scss";
import { checkState } from "../js/state/user.js";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
export function listings() {
  console.log("listings");
  const listingsSearch = getParam("search");
  getListings().then((listingsArray) => {
    console.log(listingsArray);
    console.log(listingsSearch);
    if (listingsSearch) {
      const test = filterListings(listingsArray, listingsSearch);
      console.log(test);
      test.forEach((listing) => {
        document.getElementById("listings-container").innerHTML +=
          productCard(listing);
      });
    } else {
      listingsArray.forEach((listing) => {
        document.getElementById("listings-container").innerHTML +=
          productCard(listing);
      });
      document
        .getElementById("search-listings")
        .addEventListener("click", () => {
          const searchString = searchListings();
          const filteredArray = filterListings(listingsArray, searchString);
          console.log(filteredArray);
          document.getElementById("listings-container").innerHTML = "";
          filteredArray.forEach((listing) => {
            document.getElementById("listings-container").innerHTML +=
              productCard(listing);
          });
        });
      document.getElementById("search").addEventListener("input", (e) => {
        if (e.target.value.trim() === "") {
          document.getElementById("listings-container").innerHTML = "";
          listingsArray.forEach((listing) => {
            document.getElementById("listings-container").innerHTML +=
              productCard(listing);
          });
        }
      });
    }
  });
}

listings();
