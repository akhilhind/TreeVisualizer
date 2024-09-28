import React from 'react';

type AllowedType = string;

interface InputBoxProps {
    onInputChange: (value: string[]) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onInputChange }) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nodes = e.target.value.split(',');
        const allowedNodes = nodes.filter((value: AllowedType) => {
            const trimmedValue = value.trim();
            return trimmedValue === 'null' || Number.isInteger(parseInt(trimmedValue, 10));
        });
        console.log(allowedNodes);
        onInputChange(allowedNodes);
    }
    return (
        <div id='input-box'>
            <input type='text' placeholder='Enter nodes...' onChange={(e) => handleInput(e)} />
        </div>
    )
}

export default InputBox;