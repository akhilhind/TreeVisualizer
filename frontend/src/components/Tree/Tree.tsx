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
    let level: number = 0;
    let idx: number = 0;
    let traversalResult: number[][] = [];

    let root: TreeNode = new TreeNode(id++, level, parseInt(nodes[idx++]));
    queue.push(root);
    
    // Start the traversal result with the root level
    traversalResult.push([root.value]);

    while (queue.length !== 0) {
        let currentSize: number = queue.length;
        let currentLevelNodes: number[] = [];

        while (currentSize-- > 0) {
            let tempNode = queue.shift();
            
            if (tempNode) {
                if (idx < nodes.length) {
                    tempNode.left = new TreeNode(id++, level + 1, parseInt(nodes[idx]));
                    queue.push(tempNode.left);
                    currentLevelNodes.push(tempNode.left.value);
                    idx++;
                }

                if (idx < nodes.length) {
                    tempNode.right = new TreeNode(id++, level + 1, parseInt(nodes[idx]));
                    queue.push(tempNode.right);
                    currentLevelNodes.push(tempNode.right.value);
                    idx++;
                }
            }
        }

        if (currentLevelNodes.length > 0) {
            traversalResult.push(currentLevelNodes);
        }
        
        level++;
    }

    return traversalResult;
};

const Tree: React.FC<TreeProps> = ({ nodes }) => {
    const levelOrderTraversal = buildTree(nodes);
    console.log(levelOrderTraversal);

    return (
        <div>
            <h1>A Tree</h1>
            {levelOrderTraversal.map((level, levelIndex) => (
                <div key={`level-${levelIndex}`}>
                    {level.map(node => (
                        <SingleNode key={node.id} value={node.value} /> 
                    ))}
                </div>
            ))}
        </div>
    );
};


export default Tree;