import { isSubsequence } from "./isSubsequence";

describe("isSubsequence", () => {
  test("should return false if no input is provided", () => {
    expect(isSubsequence()).toBe(false);
    expect(isSubsequence("aa")).toBe(false);
    expect(isSubsequence("", "")).toBe(false);
  });

  test("should return true if a match is found", () => {
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  test("should return false if no match is found", () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});
