export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    depth: number;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.depth = 0;
    }
}

export const buildTree = (serialized: (number | null)[]) => {
    // Create array for nodes to be addressed by index
    const nodes = serialized.map(value => value != null ? new TreeNode(value) : null);
    // Build tree up from bottom
    for (let index = nodes.length - 1; index >= 0; --index) {
        const node = nodes[index];
        // Increase index by 1 for proper parent index calculation, then decrease parent index value
        // Parent node index is always the truncated half of the current index
        const parentIndex = Math.floor((index + 1) / 2) - 1;
        const parentNode = nodes[parentIndex];
        // If the calculated parent node is not null
        if (parentNode) {
            // If one-based current index is odd, set right parent
            if ((index + 1) % 2 == 1) {
                parentNode.right = node;
            // Otherwise set left parent
            } else {
                parentNode.left = node;
            }
            // Update parent node depth, for empty node parent depth is zero
            parentNode.depth = Math.max((node?.depth ?? -1) + 1, parentNode.depth);
        }
    }
    return nodes; // root is always the first node
}

export const serializeTree = (built: (TreeNode | null)[]) => {
    
}