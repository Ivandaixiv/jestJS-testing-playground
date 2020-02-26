const oneEdit = require("../lib/oneEdit");

describe("oneEdit", () => {
  describe("when given words that are one edit away", () => {
    it("should return true", () => {
      expect(oneEdit("car", "cars")).toBe(true);
    });
  });
  describe("when given words that are one edit away", () => {
    it("should return true", () => {
      expect(oneEdit("cars", "car")).toBe(true);
    });
  });
  describe("when given no words", () => {
    it("should return undefined", () => {
      expect(oneEdit()).toEqual(undefined);
    });
  });
  describe("when given words not one edit away", () => {
    it("should return undefined", () => {
      expect(oneEdit("a", "apple")).toBe(false);
    });
  });
});
