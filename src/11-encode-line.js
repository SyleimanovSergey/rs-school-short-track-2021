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
  let res = '';
  let n = 0;
  if (str.length !== 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        n += 1;
      } else if (n === 0) {
        res += str[i];
      } else {
        res += n + 1 + str[i];
        n = 0;
      }
    }
    return res;
  } return '';
}

module.exports = encodeLine;
