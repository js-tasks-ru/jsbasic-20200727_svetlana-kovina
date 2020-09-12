/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  if (a && b) {
    return arr.filter(number => number < b && number >= a);
  }
  return arr
}
