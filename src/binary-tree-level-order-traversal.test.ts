import { getNodesInLevelOrder } from './binary-tree-level-order-traversal';

describe("getNodesInLevelOrder", () => {
    test("getNodesInLevelOrder", () => {
        expect(getNodesInLevelOrder([3,9,20,null,null,15,7])).toEqual([[3],[9,20],[15,7]]);
        expect(getNodesInLevelOrder([1])).toEqual([[1]]);
        expect(getNodesInLevelOrder([])).toEqual([]);
    })
});