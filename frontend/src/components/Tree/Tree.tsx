import React from 'react';
import SingleNode from '../SingleNode/SingleNode';

interface SingleNode {
    id: number;
    level: number;
    value: number;
    left?: SingleNode;
    right?: SingleNode;
}

interface TreeProps {
    nodes: string[];
}


const buildTree = (nodes: string[]): SingleNode | null => {
    if(!nodes.length) return null;
}


const Tree: React.FC<TreeProps> = ({ nodes }) => {
    console.log(nodes);
    let level =     
    return (
        <div>

        </div>
    )
}

export default Tree;