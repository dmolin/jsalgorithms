import { frequencyCounter } from "./frequencyCounter";

/**
 * @summary Given 2 strings, check if they are anagram of each other
 * Case is "insensitive"
 */
export function anagram(str1, str2) {
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
