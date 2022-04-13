import React from 'react';

const SideBar = (props) => {
const {callback} = props;

const inlineStyles = {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'dodgerblue'
}
    return (
        <div style={inlineStyles}>
            <p onClick={callback}>Main page</p>
            <p>Second page</p>
            <p>Third page</p>
            <p>Fourth page</p>
            <p>Your user account</p>
           {props.children}
        </div>
    );
}

export default SideBar;
