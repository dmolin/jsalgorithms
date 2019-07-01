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

export default frequencyCounter;
