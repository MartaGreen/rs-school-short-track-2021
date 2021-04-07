/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr;
  const newArr = array.filter((elem) => elem !== -1).sort();
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== -1) {
      array[i] = newArr[counter];
      counter += 1;
    }
  }
  return array;
}

module.exports = sortByHeight;
