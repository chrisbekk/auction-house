export function filterListings(array, keyword) {
  console.log(array);
  console.log(keyword);
  return array.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(keyword.toLowerCase())) ||
      (item.description &&
        item.description.toLowerCase().includes(keyword.toLowerCase())),
  );
}
