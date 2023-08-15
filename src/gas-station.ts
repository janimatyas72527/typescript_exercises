function canCompleteCircuitFrom(gas: number[], cost: number[], startIndex: number): boolean {
    // Tank is initially empty
    let tank = 0;
    for (let i = 0; i < gas.length; ++i) {
        const currentIndex = (startIndex + i) % gas.length;
        tank = tank + gas[currentIndex] - cost[currentIndex];
        if (tank < 0) return false;
    }
    return true;
}

export function canCompleteCircuit(gas: number[], cost: number[]): number {
    return gas.findIndex((_, index) => canCompleteCircuitFrom(gas, cost, index));
};
