/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const lettersArr = ['A', 'B', 'C', 'D', 'E', 'F'];
  const arr = String(n).split('-');
  if (arr.length !== 6) return false;
  const answ = arr.every((elem) => (
    elem.length === 2
      && ((Number.isNaN(Number(elem[0])) && lettersArr.indexOf(elem[0]) !== -1)
      || !Number.isNaN(Number(elem[0])))
      && ((Number.isNaN(Number(elem[1])) && lettersArr.indexOf(elem[1]) !== -1)
      || !Number.isNaN(Number(elem[1])))
  ));
  return answ;
}

module.exports = isMAC48Address;
