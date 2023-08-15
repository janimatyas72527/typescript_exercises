import { invertBinaryTree } from './invert-binary-tree';

describe("invertBinaryTree", () => {
    test("invertBinaryTree", () => {
        expect(invertBinaryTree([4,2,7,1,3,6,9])).toEqual([4,7,2,9,6,3,1]);
        expect(invertBinaryTree([2,1,3])).toEqual([2,3,1]);
        expect(invertBinaryTree([])).toEqual([]);
    })
});