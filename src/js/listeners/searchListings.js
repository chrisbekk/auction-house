export function searchListings() {
  const inputElement = document.getElementById("search");
  const searchString = inputElement.value;

  console.log(searchString);
  return searchString;
}
