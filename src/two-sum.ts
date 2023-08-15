export function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; ++i) {
        const j = nums.indexOf(target - nums[i], i + 1);
        if (j > -1) {
            return [i, j];
        }
    }
    return [];
};
