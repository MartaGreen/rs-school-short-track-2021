/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (result.indexOf(names[i]) !== -1) {
      let counter = 1;
      let flag = true;
      while (flag) {
        const checkStr = `${String(names[i])}(${String(counter)})`;
        if (result.indexOf(checkStr) === -1) {
          flag = false;
          result.push(checkStr);
        } else counter += 1;
      }
    } else result.push(names[i]);
  }
  return result;
}

module.exports = renameFiles;
