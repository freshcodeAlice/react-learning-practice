import React from 'react';

const ImageWrapper = (props) => {
    const {children, width, height, ...restProps} = props;

    //CSS-in-JS
    const inlineStyles = {
     width,
     height,
    }

    return (
        <div style={inlineStyles} {...restProps}>
            {children}
        </div>
    );
}

export default ImageWrapper;
