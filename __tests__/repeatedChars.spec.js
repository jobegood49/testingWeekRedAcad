const repeatedChars = require("../lib/repeatedChars");

describe("repeatedChars", () => {
  describe("when string is empty ", () => {
    it("should return false", () => {
      const result = repeatedChars("");
      expect(result).toEqual(false);
    });
  });
  describe("when string is a just one character ", () => {
    it("should return character with concatenated 1", () => {
      const result = repeatedChars("a");
      expect(result).toEqual("a1");
    });
  });
  describe("when string has consecutive set of characters ", () => {
    it("should return chars with concatenated length of string", () => {
      const result = repeatedChars("");
      expect(result).toEqual(false);
    });
  });
  describe("when string has consecutive chars a different positions ", () => {
    it("should return chars with concatenated number of times repeated", () => {
      const result = repeatedChars("aaajibbkz");
      expect(result).toEqual("a3j1i1b2k1z1");
    });
  });
});

// Solution;

// describe("when string contains numbers ", () => {
//   it("should return 0", () => {
//     const result = repeatedChars("a7bcd");
//     expect(result).toEqual(0);
//   });
// });

// describe("when asked to compress not a string ", () => {
//   it("should return 0", () => {
//     const result = repeatedChars("420");
//     expect(result).toEqual(0);
//   });
// });

// describe("when string contains non letters ", () => {
//   it("should ignore those and count the letters", () => {
//     const result = repeatedChars("");
//     expect(result).toEqual(0);
//   });
// });

// describe("when string contains repeated chars ", () => {
//   it("should ignore those and count the letters", () => {
//     const result = repeatedChars("aabccdaa");
//     expect(result).toEqual("aabccdaa");
//   });
// });
