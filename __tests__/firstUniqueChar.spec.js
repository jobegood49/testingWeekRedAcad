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

  describe("the string as many unique chars", () => {
    it("should return the first unique char", () => {
      const result = firstUniqueChar("dddeeefggghhh");
      expect(result).toEqual("f");
    });
  });

  describe("the string as many unique chars", () => {
    it("should return the first unique char", () => {
      const result = firstUniqueChar("terfg");
      expect(result).toEqual("t");
    });
  });

  describe("the string as many unique chars", () => {
    it("should return the first unique char", () => {
      const result = firstUniqueChar("terfg");
      expect(result).toEqual("r");
    });
  });

  describe("the string is all same character", () => {
    it("should return undefined", () => {
      const result = firstUniqueChar("aaaaa");
      expect(result).not.toBeUndefined();
    });
  });

  // describe("the string contains a unique character", () => {
  //   it("", () => {});
  // });

  // describe("the string contains multiple unique", () => {
  //   it("", () => {});
  // });

  // describe("the string contains no unique", () => {
  //   it("", () => {});
  // });
});
