const frogJumps = require("../lib/frog-jumps.js");
describe("frogJumps", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      expect(frogJumps(10, 10, 5)).toEqual(0);
    });
  });
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      expect(frogJumps(10, -5, 1)).toEqual(0);
    });
  });
  describe("when not all required arguments are available", () => {
    it("should return error", () => {
      expect(() => {
        frogJumps(10, null, 0);
      }).toThrow();
    });
  });
  describe("when a parameter is not a number", () => {
    it("should return error", () => {
      expect(() => {
        frogJumps("String", 2, 3);
      }).toThrow();
    });
  });
  describe("when destination is exactly one jump away", () => {
    it("should return 1", () => {
      expect(frogJumps(5, 15, 10)).toEqual(1);
    });
  });
  describe("when destination is not exactly a jump away", () => {
    it("should return 2", () => {
      expect(frogJumps(5, 17, 10)).toEqual(2);
    });
  });
  describe("when destination is more than one jump away", () => {
    it("should return 3", () => {
      expect(frogJumps(5, 20, 5)).toEqual(3);
    });
  });
  describe("when jump length is zero", () => {
    it("should throw an error", () => {
      expect(() => {
        frogJumps(10, 10, 0);
      }).toThrow();
    });
  });
});
