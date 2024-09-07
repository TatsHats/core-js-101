/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */
function getRectangleArea(width, height) {
  return width * height;
}
function getCircleCircumference(radius) {
  const pi = 3.141592653589793;
  return radius * 2 * pi;
}
function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  const distanceX = x2 - x1;
  const distanceY = y2 - y1;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}
function getLinearEquationRoot(a, b) {
  return -b / a;
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(/* x1, y1, x2, y2 */) {
  throw new Error('Not implemented');
}

function getLastDigit(value) {
  return Math.abs(value % 10);
}
function parseNumberFromString(value) {
  return Number(value);
}
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}
function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow; // factor - множитель
  return Math.round(num / factor) * factor;
}
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) { // Math.sqrt - корень из числа,т.к. n наиб возм делит
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function toNumber(value, def) {
  const number = Number(value);
  return Number.isNaN(number) ? def : number;
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
