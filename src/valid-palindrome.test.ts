import { isPalindrome } from './valid-palindrome';

describe("isPalindrome", () => {
    test("isPalindrome", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
        expect(isPalindrome("race a car")).toEqual(false);
        expect(isPalindrome(" ")).toEqual(true);
    })
});