import { getListings } from "../api/getListings.js";
import { productCard } from "../components/productCard.js";
import { searchListings } from "../listeners/searchListings.js";
import { filterListings } from "../utils/filterListings.js";
import { getParam } from "../utils/getParam.js";
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
