const missingNum = require("../lib/missingNum");

describe("missingNum", () => {
  describe("when given numbers 1 - 6", () => {
    it("should return 5", () => {
      expect(missingNum([1, 3, 6, 4, 1, 2])).toEqual(5);
    });
  });
});
