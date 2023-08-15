export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const mergedArray = [...nums1, ...nums2].sort();
  const middleIndex = Math.floor(mergedArray.length / 2);
  // By odd-length merged arrays the median is the middle array element, and
  // by even length merged arrays the median is the average of the two middle elements
  return mergedArray.length % 2 == 1
    ? mergedArray[middleIndex]
    : (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
}
