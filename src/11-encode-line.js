/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return str;
  let prevIndex = 0;
  let prevElem = str[0];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (prevElem !== str[i]) {
      result += (String(Number(i) - prevIndex) === '1')
        ? String(str[i - 1])
        : String(Number(i) - prevIndex) + String(str[i - 1]);
      prevIndex = i;
      prevElem = str[i];
    }
  }
  result += (String(str.length - prevIndex) === '1')
    ? String(str[str.length - 1])
    : String(str.length - prevIndex) + str[str.length - 1];
  return result;
}

module.exports = encodeLine;
