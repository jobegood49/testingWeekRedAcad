

const oneEditAway = require("../lib/oneEditAway.js");

describe("oneEditAway", () => {
  describe("when one letter was deleted", () => {
    it("should return true", () => {
      const result = oneEditAway("pale", "ple");
      expect(result).toEqual(true);
    });
  });

  describe("when one letter was deleted", () => {
    it("should return true", () => {
      const result = oneEditAway("pales", "pale");
      expect(result).toEqual(true);
    });
  });

  describe("when one letter was edited", () => {
    it("should return true", () => {
      const result = oneEditAway("pale", "bale");
      expect(result).toEqual(true);
    });
  });

  describe("when more than one letter was edited", () => {
    it("should return false", () => {
      const result = oneEditAway("pale", "bake");
      expect(result).toEqual(false);
    });
  });

  describe("when more than one letter was edited and added", () => {
    it("should return false", () => {
      const result = oneEditAway("face", "factse");
      expect(result).toEqual(false);
    });
  });
});
