const minPosInteger = require("../lib/minPosInteger.js");

describe("minPOsInteger", () => {
  describe("when array is made of different integer", () => {
    it("should return the smallest integer not in the array", () => {
      const result = minPosInteger([1, 3, 6, 4, 1, 2]);
      expect(result).toEqual(5);
    });
  });
});
