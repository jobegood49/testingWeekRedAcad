const palyndrome = require("../lib/palyndrome.js");
describe("palyndrome", () => {
  describe("when string is empty ", () => {
    it("should return false", () => {
      const result = palyndrome("");
      expect(result).toEqual(false);
    });
  })
  describe("when string is a letter ", () => {
    it("should return true", () => {
      const result = palyndrome("a");
      expect(result).toEqual(true);
    });
  })
  describe("when string is two same letters", () => {
    it("should return true", () => {
      const result = palyndrome("aa");
      expect(result).toEqual(true);
    });
  })
  describe("when the reversed string is equal to the string", () => {
    it("should return true", () => {
      const result = palyndrome("mom");
      expect(result).toEqual(true);
    });
  })
  describe("when the string has commas and spaces take out the spaces and commas and check", () => {
    it("should return true", () => {
      const result = palyndrome("never, odd or even");
      expect(result).toEqual(true);
    });
  })
  
});