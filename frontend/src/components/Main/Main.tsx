import { useState } from 'react';
import InputBox from '../InputBox/InputBox';
import Tree from '../Tree/Tree';

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