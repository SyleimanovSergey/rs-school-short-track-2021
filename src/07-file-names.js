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
  const resArr = [];
  for (let i = 0; i < names.length; i++) {
    if (!resArr.includes(names[i])) {
      resArr.push(names[i]);
    } else {
      let n = 0;
      for (let k = 0; k < resArr.length; k++) {
        if (names[i] === names[k]) {
          n++;
        } else if (names[i] === resArr[k]) {
          n++;
        }
      }
      resArr.push(`${names[i]}(${n})`);
    }
  }
  return resArr;
}

module.exports = renameFiles;
