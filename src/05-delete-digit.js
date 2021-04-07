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
  const resultArr = [];
  for (let i = 0; i < String(n).length; i++) {
    resultArr.push(Number(String(n).replace(String(n)[i], '')));
  }
  return Math.max.apply(null, resultArr);
}

module.exports = deleteDigit;
