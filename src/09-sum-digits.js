/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('').map(Number);
  let sum = arr.reduce((partSum, a) => partSum + a, 0);
  while (sum >= 10) {
    arr = arr.slice(1);
    sum = arr.reduce((partSum, a) => partSum + a, 0);
  }
  return sum;
}

module.exports = getSumOfDigits;
