import React from 'react';

const Column = (props) => {
    const {colNum, children} = props;
    return (
        <div className={`col-${colNum}`}>
            {children}
        </div>
    );
}

export default Column;
