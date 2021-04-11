/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrRes = [];
  const objRes = {};
  for (let i = 0; i < domains.length; i++) {
    arrRes.push(domains[i].split('.'));
    for (let k = 0; k < arrRes[i].length; k++) {
      arrRes[i][k] = `.${arrRes[i][k]}`;
    }
    arrRes.reverse();
  }
  for (let n = 0; n < arrRes.length; n++) {
    arrRes[n].reverse();
    for (let j = 1; j < arrRes[n].length; j++) {
      arrRes[n][j] = arrRes[n][j - 1] + arrRes[n][j];
    }
  }
  arrRes = arrRes.flat();
  for (let y = 0; y < arrRes.length; y++) {
    if (!objRes[arrRes[y]]) {
      objRes[arrRes[y]] = 1;
    } else {
      objRes[arrRes[y]]++;
    }
  }
  return objRes;
}

module.exports = getDNSStats;
