import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = (props) => {
    const {children, flexDirection, justifyContent, alignItems} = props;

const inlineStyles = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems
}

    return (
        <div style={inlineStyles}>
            {children}
        </div>
    );
}

FlexContainer.defaultProps = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
}


FlexContainer.propTypes = {
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
}

export default FlexContainer;
