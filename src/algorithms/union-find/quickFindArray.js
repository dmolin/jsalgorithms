// connect two elements by assigning the first element id to the second one
// every time x and y are connected, the value used is the smaller one (by convention)
// (that means a previous connection is already active on that cell)
// 0, 1, 2, 3 ,4, 5, 6, 7, 8, 9
// this is easy to implement but it's not efficient, since connect() runs in O(n) time
// connect(0, 2)  0, 1, 0, 3, 4, 5, 6, 7, 8, 9
// connect(7, 5)  0, 1, 0, 3, 4, 5, 6, 5, 8, 9
// connect(2, 7)  0, 1, 0, 3, 4, 0, 6, 0, 8, 9
// connect(4, 5)  0, 1, 0, 3, x, x, 6, 0, 8, 9

export function connect (network = [], from, to) {
  const val = Math.min(from, to);
  network[from] = val;
  network[to] = val;
  // look for all the cells following max(from, to) and convert values if appropriate
  for (let i = val; i < network.length; i++) {
    if (network[i] === from || network[i] === to) {
      network[i] = val;
    }
  }
}

export function connected (network = [], from, to) {

}

export default {
  connect,
  connected
};
