import { asteroidCollision } from './asteroid-collision';

describe("asteroidCollision", () => {
    test("asteroidCollision", () => {
        expect(asteroidCollision([5,10,-5])).toEqual([5,10]);
        expect(asteroidCollision([5,10,-15])).toEqual([-15]);
        expect(asteroidCollision([8,-8])).toEqual([]);
        expect(asteroidCollision([-5,-3,6,9])).toEqual([-5,-3,6,9]);
        expect(asteroidCollision([5,-5,6,7,-4,-7])).toEqual([6]);
        expect(asteroidCollision([8,-8,5,-5])).toEqual([]);
    })
});