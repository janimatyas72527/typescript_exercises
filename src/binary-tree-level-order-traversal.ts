import { TreeNode, buildTree } from "./binary-tree-base";

export function getNodesInLevelOrder(
  serialized: (number | null)[]
): number[][] {
  const addNodeAtLevel = (node: TreeNode, level: number) => {
    const nodesAtLevel = nodesByLevel.get(level) ?? [];

    nodesAtLevel.push(node);
    nodesByLevel.set(level, nodesAtLevel);
  };
  const traverseNode = (node: TreeNode, level: number) => {
    addNodeAtLevel(node, level);
    if (node.left) {
      traverseNode(node.left, level + 1);
    }
    if (node.right) {
      traverseNode(node.right, level + 1);
    }
  };

  const nodesByLevel: Map<number, TreeNode[]> = new Map<number, TreeNode[]>();
  const rootNode =
    buildTree(serialized).find(node => node !== null) ?? null;

  if (rootNode) {
    traverseNode(rootNode, 0);
    return Array.from(nodesByLevel.values()).map((value) =>
      value.map((node) => node.val)
    );
  } else {
    return [];
  }
}
