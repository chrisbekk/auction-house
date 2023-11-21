export function checkValues(obj) {
  const valuesArray = Object.values(obj);
  const allTrue = valuesArray.every((value) => value === true);

  return allTrue;
}
