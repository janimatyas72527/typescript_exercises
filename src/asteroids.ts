/* 
We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. 
Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]

Example 2:
Input: asteroids = [8,-8]
Output: []

Example 3:
Input: asteroids = [-5,-3,6,9]
Output: [-5,-3,6,9]

constraints:
- 2 <= asteroids.length <= 104
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0
*/

/* YOUR SOLUTION */
const asteroidCollision = (asteroids: Array<number>): Array<number> => {
    const isEmptyArray = (array: Array<number>) => array.length === 0;
    const areDivergent = (array: Array<number>) => 
        // Only one sign change, and it is from negative to positive
        array.filter((value, index, numbers) => {
            const rightIndex = Math.min(index + 1, numbers.length);

            return value < 0 && numbers[rightIndex] > 0;
        }).length === 1;
    ;
    const moveIntoSameDirection = (array: Array<number>) => Math.min(...array) * Math.max(...array) > 0;

    const state: Array<number> = [...asteroids];

    do {
        console.log(state);
        state.forEach((value, index, asteroids) => {
            const left = value;
            const rightIndex = Math.min(index + 1, asteroids.length);
            const right = asteroids[rightIndex];
            // Collision situation
            if (index < rightIndex && left > 0 && right < 0) {
                if (left + right === 0) {
                    // Both explode
                    state.splice(index, 2);
                }
                if (left + right > 0) {
                    // Right explodes
                    state.splice(rightIndex, 1);
                }
                if (left + right < 0) {
                    // Left exlpodes
                    state.splice(index, 1);
                }
            }
        })
        // Check empty array, divergent asteroids, asteroids moving into same direction
    } while (!isEmptyArray(state) && !areDivergent(state) && !moveIntoSameDirection(state));
    return state;
}


/* "TEST ENVIRONMENT" */
const testCases = [
    { input: [5,10,-5], expected: [5,10] },
    { input: [5,10,-15], expected: [-15] },
    { input: [8,-8], expected: [] },
    { input: [-5,-3,6,9], expected: [-5,-3,6,9] },
    { input: [5,-5,6,7,-4,-7], expected: [6] },
    { input: [8,-8,5,-5], expected: [] },
]

const runTestCases = () => {
    console.clear();
    let successCount = 0;
    let failureCount = 0;
    testCases.forEach(({ input, expected }) => {
        const result = asteroidCollision(input);
        const isPassed = arrayEquals(expected, result);
        if (isPassed) {
            console.log(`Testcase PASSED\nfor [${input}] it correctly returned [${result}]`);
            successCount += 1;
        } else {
            console.log(`Testcase FAILED\nfor [${input}] it should return [${expected}], but it returned [${result}]`);
            failureCount += 1;
        }
    });

    console.log(`${failureCount === 0 ? "SUCCESS" : "FAIL"}\n${testCases.length} executed, ${successCount} succeded, ${failureCount} failed`)
}

const arrayEquals = (a: Array<number>, b: Array<number>) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

runTestCases();

/*interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const compareTreeNode = (left: TreeNode | null, right: TreeNode | null): boolean => {
    let evalResult = (left?.value ?? null) === (right?.value ?? null);

    if (evalResult && left != null && right != null) {
        evalResult = compareTreeNode(left.left, right.left) && compareTreeNode(left.right, right.right);
    }
    return evalResult;
}*/
