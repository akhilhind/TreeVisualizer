import React from 'react';

interface SingleNodeProps {
    value: number
}

const SingleNode: React.FC<SingleNodeProps> = ({ value }) => {
    return (
        <div className='single-node'>
            {value}
        </div>
    );
};

export default SingleNode;