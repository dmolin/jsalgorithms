export function areThereDuplicates(...inputs) {
  if (!inputs || !inputs.length) return false;

  const frequency = {};
  for (let idx in inputs) {
    const v = inputs[idx];
    frequency[v] = (frequency[v] || 0) + 1;
    if (frequency[v] > 1) return true;
  }
  return false;
}
