const frogJumps = require("../lib/frog-jumps.js");
describe("frogJumps", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  })
  describe("when start is greater to end", () => {
    it("should return 0", () => {
      const result = frogJumps(100, 10, 5);
      expect(result).toEqual(0);
    });
  })
  describe("when start is less than end", () => {
    it("should return 0", () => {
      const result = frogJumps(1, 10, 5);
      expect(result).toEqual(2);
    });
  })
  describe("when jump is 0", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 1, 0);
      expect(result).toEqual(0);
    });
  })
  describe("when jump is less than 0", () => {
    it("should return 0", () => {
      const result = frogJumps(1, 10, -10);
      expect(result).toEqual(0);
    });
  })
});
