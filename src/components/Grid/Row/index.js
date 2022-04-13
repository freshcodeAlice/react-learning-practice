import React from 'react';

const Row = (props) => {
    return (
        <div style={{display: 'flex'}}>
            {props.children}
        </div>
    );
}

export default Row;
