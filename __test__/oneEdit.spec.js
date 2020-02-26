const oneEdit = require("../lib/oneEdit");

describe("oneEdit", () => {
  describe("when given words that are one edit away", () => {
    it("should return true", () => {
      expect(oneEdit("car", "cars")).toBe(true);
    });
  });
});
