const names = require("../lib/names");

describe("names", () => {
  describe("count all names", () => {
    it("should return 4", () => {
      expect(names(["Ivan", "Ian", "Lance", "Rango"], "a")).toEqual(4);
    });
  });
  describe("missing names", () => {
    it("should return error", () => {
      expect(() => {
        names("a");
      }).toThrow();
    });
  });
  describe("missing char", () => {
    it("should return error", () => {
      expect(() => {
        names(["Ivan", "Ian", "Lance", "Rango"]);
      }).toThrow();
    });
  });
  describe("count all names", () => {
    it("should return 10", () => {
      expect(
        names(
          [
            "Ivan",
            "Ian",
            "Lance",
            "Rango",
            "Ivan",
            "Ian",
            "Lance",
            "Rango",
            "Ivan",
            "Ian"
          ],
          "a"
        )
      ).toEqual(10);
    });
  });
});
