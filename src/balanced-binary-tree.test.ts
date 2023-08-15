import { isBalanced } from './balanced-binary-tree';

describe("isBalanced", () => {
    test("isBalanced", () => {
        expect(isBalanced([3, 9, 20, null, null, 15, 7])).toEqual(true);
        expect(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4])).toEqual(false);
        expect(isBalanced([])).toEqual(true);
    })
});