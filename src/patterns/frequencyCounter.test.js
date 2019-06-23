import { frequencyCounter, Applications } from "./frequencyCounter";

describe("frequencyCounter", () => {
  test("shoult return an empty object if no input is provided", () => {
    expect(frequencyCounter()).toEqual({});
  });

  test("should return an empty object if the input is not an array-like object", () => {
    expect(frequencyCounter({ a: 1 })).toEqual({});
  });

  test("should return the frequency of the values in the provided array", () => {
    expect(frequencyCounter([1, 3, 3, 1])).toEqual({ 1: 2, 3: 2 });
  });

  test("should ignore non alphanumeric chars", () => {
    expect(frequencyCounter([1,"a","%"])).toEqual({1:1, "a": 1});
  });
});

describe("Applications.sameButSquared", () => {
  const sameButSquared = Applications.sameButSquared;

  test("should return false if not enough input is provided", () => {
    expect(sameButSquared()).toBe(false);
  });

  test("should return false if the 2 arrays have different length", () => {
    expect(sameButSquared([1,2,3], [1,9])).toBe(false);
  });

  test("should return false if values are not matching", () => {
    expect(sameButSquared([1,2,3], [1,4,10])).toBe(false);
  });

  test("shhould check that 2 arrays are one the squares of the other (any order)", () => {
    expect(sameButSquared([1, 2, 3], [9, 1, 4])).toBe(true);
  });
})

describe("Applications.anagram", () => {
  const anagram = Applications.anagram;

  test("should return false if not all input is provided", () => {
    expect(anagram()).toBe(false);
    expect(anagram("", "")).toBe(true);
    expect(anagram(1, true)).toBe(false);
    expect(anagram("aa")).toBe(false);
    expect(anagram(null, "nn")).toBe(false);
    expect(anagram("", "aa")).toBe(false);
    expect(anagram("aa", "")).toBe(false);
  });

  test("should return false if the 2 strings are not anagrams", () => {
    expect(anagram("pip", "pap")).toBe(false);
  });

  test("should return true if the 2 strings are anagrams", () => {
    expect(anagram("smile", "silme")).toBe(true);
    expect(anagram("anagram", "nagaram")).toBe(true);
  });
});

describe("Applications.countUniqueValues", () => {
  const countUniqueValues = Applications.countUniqueValues;

  test("should return zero if empty or no input is provided", () => {
    expect(countUniqueValues()).toEqual(0);
    expect(countUniqueValues([])).toEqual(0);
  });

  test("should return the correct count", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1])).toEqual(1);
    expect(countUniqueValues([0, 1, 1, 2, 2, 3, 3])).toEqual(4);
    expect(countUniqueValues([-2, -1, -1, -1, 0, 2, 3])).toEqual(5);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toEqual(7);
  });
});
