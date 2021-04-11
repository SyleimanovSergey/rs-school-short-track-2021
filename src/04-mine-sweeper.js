/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resArr = [];
  for (let i = 0; i < matrix.length; i++) {
    resArr.push([]);
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === true) {
        resArr[i].push(1);
      } else {
        resArr[i].push(0);
      }
      if (matrix[i][k] === false) {
        if (matrix[i - 1]) {
          if (matrix[i - 1][k - 1] === true) {
            resArr[i][k]++;
          }
          if (matrix[i - 1][k] === true) {
            resArr[i][k]++;
          }
          if (matrix[i - 1][k + 1] === true) {
            resArr[i][k]++;
          }
        }
        if (matrix[i + 1]) {
          if (matrix[i + 1][k - 1] === true) {
            resArr[i][k]++;
          }
          if (matrix[i + 1][k] === true) {
            resArr[i][k]++;
          }
          if (matrix[i + 1][k + 1] === true) {
            resArr[i][k]++;
          }
        }
        if (matrix[i][k - 1] === true) {
          resArr[i][k]++;
        }
        if (matrix[i][k + 1] === true) {
          resArr[i][k]++;
        }
      }
    }
  }
  return resArr;
}

module.exports = minesweeper;
