import { buildTree } from './binary-tree-base';

export function isBalanced(root: (number | null)[]): boolean {
    return !buildTree(root).find(node => Math.abs((node?.left?.depth ?? 0) - (node?.right?.depth ?? 0)) > 1)
};
