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
