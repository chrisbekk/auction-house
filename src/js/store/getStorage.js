/**
 *
 * @param {string} name | Key of local storage value
 * @returns boolean
 */

export function getStorage(name) {
  return localStorage.getItem(name);
}
