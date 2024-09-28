import React from 'react';
import SingleNode from '../SingleNode/SingleNode';

class TreeNode {
    id: number;
    level: number;
    value: number;
    left?: TreeNode;
    right?: TreeNode;
    constructor(id: number, level: number, value: number) {
        this.id = id;
        this.level = level;
        this.value = value;
    }
}

interface TreeProps {
    nodes: string[];
}

const buildTree = (nodes: string[]): number[][] => {
    if (nodes.length === 0) return [];
    
    let queue: TreeNode[] = [];
    let id: number = 0;
    let level: number = 0; // Start level at 0
    let idx: number = 0;   // Start index at 0
    let traversalResult: number[][] = []; // Array of arrays for level order traversal

    let root: TreeNode = new TreeNode(id++, level, parseInt(nodes[idx++])); // Initialize root node
    queue.push(root);
    
    // Start the traversal result with the root level
    traversalResult.push([root.value]);

    while (queue.length !== 0) {
        let currentSize: number = queue.length;
        let currentLevelNodes: number[] = []; // Array to hold current level values

        while (currentSize-- > 0) {
            let tempNode = queue.shift();
            
            if (tempNode) {
                // Add left child
                if (idx < nodes.length) {
                    tempNode.left = new TreeNode(id++, level + 1, parseInt(nodes[idx])); // Assign left child
                    queue.push(tempNode.left);
                    currentLevelNodes.push(tempNode.left.value); // Store value
                    idx++;
                }

                // Add right child
                if (idx < nodes.length) {
                    tempNode.right = new TreeNode(id++, level + 1, parseInt(nodes[idx])); // Assign right child
                    queue.push(tempNode.right);
                    currentLevelNodes.push(tempNode.right.value); // Store value
                    idx++;
                }
            }
        }

        // Only add current level nodes if there are any
        if (currentLevelNodes.length > 0) {
            traversalResult.push(currentLevelNodes);
        }
        
        level++;
    }

    return traversalResult; // Return the level order traversal
};

const Tree: React.FC<TreeProps> = ({ nodes }) => {
    const levelOrderTraversal = buildTree(nodes);
    console.log("Level Order Traversal:", levelOrderTraversal); // Log traversal result for debugging

    return (
        <div>
            <h1>A Tree</h1>
            <pre>
                {levelOrderTraversal.map(level => (
                    <div key={level[0]?.id}>
                        {level.map(node => (
                            <SingleNode key={node.id} value={node.value} /> // Using SingleNode component
                        ))}
                    </div>
                ))}
            </pre>
        </div>
    );
}

export default Tree;