/**
 * This pattern is useful when we want to determine the "frequency" of something or were we're comparing different inputs and we
 * want to check if the frequency of appearance of their content values is the same (like with anagrams) *
 */

/**
 * @summary Returns an aggregate representing the frequency of each element of the input array
 * @param {} arr Array of values
 * @returns {object} Object whose keys are the values of the array and valus is the frequency they occur in the input array
 */
export function frequencyCounter(arr = []) {
  if (!arr || !arr.length) return {};

  function isAlpha(char) {
    const code = char.charCodeAt(0);
    return (code > 47 && code < 58) || (code > 64 && code < 91) || (code > 96 && code < 123) || false;
  }

  return arr.reduce((acc, v) => {
    // const value = v;
    // lowecase everything
    const value = typeof v === "string" ? v.toLowerCase() : v;
    if (isAlpha(`${value}`)) {
      acc[value] = (acc[value] || 0) + 1;
    }
    return acc;
  }, {});
}


/**
 * @summary Example of application of frequency counter.
 * Given 2 arrays in input, check that the second contains the squares of the values of the first.
 * Order is not important, but the frequecy must match.
 * @param {*} first
 * @param {*} second
 */
export function sameButSquared (first, second) {
  if (!first && !second) return false;
  if (first.length !== second.length) return false;

  const _counter = first.reduce((acc, v) => {
    const value = v ** 2;
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < second.length; i++) {
    let key = second[i];
    let value = _counter[key];
    if (value === undefined) break;
    _counter[key] = value - 1;
    /* istanbul ignore next */
    if (!_counter[key]) {
      delete _counter[key];
    }
  }
  return Object.keys(_counter).length === 0;
}

/**
 * @summary Given 2 strings, check if they are anagram of each other
 * Case is "insensitive"
 */
export function anagram (str1, str2) {
  if (typeof str1 !== "string") return false;
  if (typeof str2 !== "string") return false;

  if (str1.length !== str2.length) return false;

  // build the frequency counter for both strings
  const counter1 = frequencyCounter(str1.split(""));
  const counter2 = frequencyCounter(str2.split(""));

  // compare the counters
  for (const key in counter1) {
    if (!(key in counter2) || counter2[key] !== counter1[key]) return false;
  }
  return true;
}

/**
 * @summary This problem is also solved with the "multiple pointers" approach, in O(1) space
 * @param {} sortedArr
 */
export function countUniqueValues(sortedArr) {
  if (!sortedArr) return 0;

  const counter = sortedArr.reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(counter).length;
}

export const Applications = {
  sameButSquared,
  anagram,
  countUniqueValues
}


export default frequencyCounter;
