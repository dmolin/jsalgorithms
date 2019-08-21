/**
 * @summary Checks whether the input sequence appears as a subsequence of the reference string. 
 *   The chars in the sequence don't have to appear consecutively in the refString, but their order need to be respected.
 * @param {*} sequence
 * @param {*} refString
 */
export function isSubsequence (sequence, refString) {
  if (!sequence || !refString) return false;

  let sequencePtr = 0;

  for (let refPtr = 0; refPtr < refString.length; refPtr++) {
    if (sequence[sequencePtr] === refString[refPtr]) {
      sequencePtr++;
    }
    if (sequencePtr == sequence.length) return true;
  }
  return false;
}
