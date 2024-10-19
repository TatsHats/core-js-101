/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

function findElement(arr, value) {
  return arr.indexOf(value);
}
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 1 + 2 * i); // "_" указ. что перем. не используется
}
function doubleArray(arr) {
  return arr.concat(arr);
}
function getArrayOfPositives(arr) {
  return arr.filter((num) => num > 0);
}
function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
function getUpperCaseStrings(arr) {
  return arr.map((str) => str.toUpperCase());
}
function getStringsLength(arr) {
  return arr.map((str) => str.length);
}
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}
function getHead(arr, n) {
  return arr.slice(0, n);
}
function getTail(arr, n) {
  return arr.slice(arr.length - n);
}
function toCsvText(arr) {
  return arr.map((value) => value.join(',')).join('\n');
}
function toArrayOfSquares(arr) {
  return arr.map((value) => value * value);
}
function getMovingSum(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 !== 0);
}
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}
function getPositivesCount(arr) {
  return arr.filter((item) => typeof item === 'number' && item > 0).length;
}
function sortDigitNamesByNumericOrder(arr) {
  const names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => names.indexOf(a) - names.indexOf(b));
}
function getItemsSum(arr) {
  return arr.reduce((sum, el) => sum + el, 0);
}
function getFalsyValuesCount(arr) {
  return arr.filter((el) => !el).length;
}
function findAllOccurrences(arr, item) {
  return arr.filter((el) => el === item).length;
}
function toStringList(arr) {
  return arr.join(',');
}
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country > b.country) return 1;
    if (a.country < b.country) return -1;
    if (a.city > b.city) return 1;
    if (a.city < b.city) return -1;
    return 0;
  });
}

/**
 * Creates an identity matrix of the specified size //без исп. циклов
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (__, row) => Array.from(
    { length: n }, (_, col) => Number(row === col),
  ));
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  const arr = Array(end - start + 1).fill();
  return arr.map((_, index) => start + index);
}

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
  return Array.from(new Set(arr));
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
  return arr.map(childrenSelector).flat();
}

/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((acc, index) => acc[index], arr);
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  const halfLength = Math.floor(arr.length / 2);
  const middle = arr.length % 2 === 0 ? [] : [arr[halfLength]];
  const head = arr.slice(0, halfLength);
  const tail = arr.slice(arr.length % 2 === 0 ? halfLength : halfLength + 1);

  return tail.concat(middle, head);
}


module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
