import { useState } from 'react';
import InputBox from '../InputBox/InputBox';
import Tree from '../Tree/Tree';

// this function will return treenodes on every change 
function Main() {
    const [treeNodes, setTreeNodes] = useState<string[]>([]);
    return (
        <div id='main-box'>
            <InputBox onInputChange={setTreeNodes} />
            <Tree nodes={treeNodes} />
        </div>
    )
}

export default Main;