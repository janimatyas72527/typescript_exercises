export function invertBinaryTree(nodes: number[]) {
    let index = 0;          // Starting index in array
    let levelNumber = 0;    // Current level number
    let levelSize = 1;      // Current level size, is 2^levelNumber
    let invertedNodes: (number | null)[] = [];

    // Process cyclically until last level
    while (index + levelSize < nodes.length) {
        const invertedLevel = nodes.slice(index, index + levelSize).reverse();

        // Append inverted level
        invertedNodes = [...invertedNodes, ...invertedLevel];
        // Adjust indices
        index += levelSize;
        ++levelNumber;
        levelSize = 2 ** levelNumber;
    }
    // At last level, original nodes length might be smaller than needed
    const numOfRemaining = nodes.length - index;

    // numOfRemaining is zero in case of empty input array
    if (numOfRemaining > 0) {
        // Fill with nulls on the left
        const invertedLevel = [...Array<number | null>(levelSize - numOfRemaining).fill(null), ...nodes.slice(index, index + levelSize).reverse()];
        // Append inverted level
        invertedNodes = [...invertedNodes, ...invertedLevel];
    }

    return invertedNodes;
}