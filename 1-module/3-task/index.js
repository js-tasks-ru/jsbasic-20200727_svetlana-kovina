/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  str =  str ? str[0].toUpperCase() + str.substring(1) : str
  return str
}
