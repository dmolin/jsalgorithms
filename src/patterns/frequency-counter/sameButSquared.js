/**
 * @summary Example of application of frequency counter.
 * Given 2 arrays in input, check that the second contains the squares of the values of the first.
 * Order is not important, but the frequecy must match.
 * @param {*} first
 * @param {*} second
 */
export function sameButSquared(first, second) {
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
