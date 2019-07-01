import { anagram } from "./anagram";

describe("anagram", () => {
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
