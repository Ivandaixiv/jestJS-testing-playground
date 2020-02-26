const uniqueChar = require("../lib/uniqueChar");

describe("uniqueChar", () => {
  describe("when only one letter is unique", () => {
    it("should return f", () => {
      expect(uniqueChar("dddeeefggghhh")).toEqual("f");
    });
  });
  describe("when there is no value in the string", () => {
    it("should return undefined", () => {
      expect(uniqueChar()).toEqual(undefined);
    });
  });
  describe("when there is no unique in the string", () => {
    it("should return undefined", () => {
      expect(uniqueChar("aabbcc")).toEqual(undefined);
    });
  });
});
