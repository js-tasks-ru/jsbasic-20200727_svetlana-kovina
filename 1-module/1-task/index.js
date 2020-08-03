/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  } 
  while (n < 6) { 
    return n * factorial(n - 1);
  }
}
