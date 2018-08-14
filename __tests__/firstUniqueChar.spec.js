const firstUniqueChar = require("../lib/firstUniqueChar.js");

describe("firstUniqueChar", () => {
  describe("the string is empty", () => {
    it("should return 0", () => {
      const result = firstUniqueChar("");
      expect(result).toEqual(0);
    });
  });

  describe("the string has no unique char", () => {
    it("should return undefined", () => {
      const result = firstUniqueChar("tttttt");
      expect(result).toEqual(undefined);
    });
  });

  describe("the string as many unique chars", () => {
    it("should return the first unique char", () => {
      const result = firstUniqueChar("dddeeefggghhsdfzeo");
      expect(result).toEqual("f");
    });
  });
});
