import { binaryGap } from "./binaryGap";

describe("binaryGap", () => {
  test("should return 0 if no value is provided", () => {
    expect(binaryGap()).toEqual(0);
  });

  test("should return 0 if no number is provided", () => {
    expect(binaryGap("aaa")).toEqual(0);
  });

  test("should return the gap if found", () => {
    expect(binaryGap(20)).toEqual(1);
    expect(binaryGap(529)).toEqual(4);
  });

  test("should return ZERO if gap is not found", () => {
    expect(binaryGap(15)).toEqual(0);
    expect(binaryGap(32)).toEqual(0);
  });

});
