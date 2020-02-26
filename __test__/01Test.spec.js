const test = require("../lib/01Test");
describe("test", () => {
  describe("when only one letter is unique", () => {
    it("should return f", () => {
      expect(uniqueChar("dddeeefggghhh")).toEqual("f");
    });
  });
});
