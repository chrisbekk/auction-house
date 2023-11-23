export function filterListings(array, keyword) {
  if (keyword.trim() === "") {
    return array;
  } else {
    return array.filter(
      (item) =>
        (item.title &&
          item.title.toLowerCase().includes(keyword.toLowerCase())) ||
        (item.description &&
          item.description.toLowerCase().includes(keyword.toLowerCase())),
    );
  }
}
