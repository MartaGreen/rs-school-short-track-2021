/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const varArr = [];
  const num = String(n);
  for (let i = 0; i < num.length; i++) {
    const newElem = Number(num.split('').slice(0, i).join('') + num.split('').slice(i + 1).join(''));
    varArr.push(newElem);
  }
  return Math.max.apply(null, varArr);
}

module.exports = deleteDigit;
