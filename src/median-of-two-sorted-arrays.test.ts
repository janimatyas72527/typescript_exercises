import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

describe("findMedianSortedArrays", () => {
    test("findMedianSortedArrays", () => {
        expect(findMedianSortedArrays([1,3], [2])).toEqual(2.0);
        expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5);
    })
});