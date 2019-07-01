import { frequencyCounter } from "./frequencyCounter";

/**
 * @summary find out if two numbers have the same frequency of digits
 * @param {*} num1
 * @param {*} num2
 */
export function sameFrequency(num1, num2) {
  const counter1 = frequencyCounter(`${num1}`.split(""));
  const counter2 = frequencyCounter(`${num2}`.split(""));
  for (const key in counter1) {
    if (!(key in counter2) || counter2[key] !== counter1[key]) return false;
  }
  return true;
}
