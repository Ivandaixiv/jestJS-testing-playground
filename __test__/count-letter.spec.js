const countLetters = require("../lib/countLetter");

describe("counterLetters", () => {
  describe("when a string had one of each letter", () => {
    it("should return c1a1r1", () => {
      expect(countLetters("car")).toEqual("c1a1r1");
    });
  });
  describe("when a string more than one of each letter", () => {
    it("should return a3b3c3", () => {
      expect(countLetters("aaabbbccc")).toEqual("a3b3c3");
    });
  });
});
