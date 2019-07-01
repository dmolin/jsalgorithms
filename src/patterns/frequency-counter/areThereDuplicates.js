/**
 * @summary Implement a function called "areThereDuplicates" which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param  {...any} inputs
 */
export function areThereDuplicates(...inputs) {
  if (!inputs || !inputs.length) return false;

  const frequency = {};
  for (let idx in inputs) {
    const v = inputs[idx];
    if (frequency[v]) return true;
    frequency[v] = 1;
  }
  return false;
}
