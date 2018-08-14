const compressed = require("../lib/compressed");

describe("compressed", () => {
  describe("when string contains numbers", () => {
    it("should return 0", () => {
      const result = comprepsed("a7bcd");
      expect(result).toEqual(0);
    });
  });

  describe("when asked to compress not a string", () => {
    it("should return 0", () => {
      const result = compressed("420");
      expect(result).toEqual(0);
    });
  });

  describe("when string contains repeated chars", () => {
    it("should return 0", () => {
      const result = compressed("aabccdaa");
      expect(result).toEqual("aabccdaa");
    });
  });

  describe("when string contains non letters", () => {
    it("should return 0", () => {
      const result = compressed("..12hellooo");
      expect(result).toEqual("h1e1l2o3");
    });
  });
});
