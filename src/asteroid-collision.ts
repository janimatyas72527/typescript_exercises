export function asteroidCollision(asteroids: number[]): number[] {
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
};
