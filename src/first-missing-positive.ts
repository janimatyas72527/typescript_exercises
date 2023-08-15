export function firstMissingPositive(nums: number[]): number {
    const flags = new Array<boolean>(nums.length);
    nums.forEach(value => {
        if (value >= 1 && value <= nums.length) {
            flags[value - 1] = true;
        }
    })
    return flags.findIndex(value => !value) + 1;
}
