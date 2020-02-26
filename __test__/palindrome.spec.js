// __tests__/palindrome.spec.js
const checkPalindrome = require("../lib/checkPalidrome.js");

describe("checkPalindrome", () => {
  describe("when the string is a palindrome", () => {
    it("should return true", () => {
      expect(checkPalindrome("racecar")).toBe(true);
    });
  });
  describe("when the string is not a palindrome", () => {
    it("should return false", () => {
      expect(checkPalindrome("Hello")).toBe(false);
    });
  });
  describe("when the string is a palindrome but capitalised", () => {
    it("should return false", () => {
      expect(checkPalindrome("Mom")).toBe(true);
    });
  });
  describe("when the string has spaces", () => {
    it("should return true", () => {
      expect(checkPalindrome("never odd or even")).toBe(true);
    });
  });
  describe("when the string has spaces but the string is not a palindrome", () => {
    it("should return true", () => {
      expect(checkPalindrome("never odd or never")).toBe(false);
    });
  });
  describe("when the passed value has numbers", () => {
    it("should return true", () => {
      expect(checkPalindrome("m0o0m")).toBe(true);
    });
  });
  describe("when the passed value is not a string", () => {
    it("should throw an error", () => {
      expect(() => checkPalindrome(3)).toThrow();
    });
  });
});
