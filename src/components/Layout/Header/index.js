import React from 'react';

const Header = (props) => {

    const inlineStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }

    return (
        <header style={inlineStyles}>
            <img 
            alt="logo"
            style={{width: '100px', objectFit: 'cover'}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_the_Ukrainian_Armed_Forces.svg/1200px-Emblem_of_the_Ukrainian_Armed_Forces.svg.png"
            />

           {props.children}
        </header>
    );
}

export default Header;
