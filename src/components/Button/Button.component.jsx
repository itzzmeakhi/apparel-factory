import React from 'react';

import './Button.styles.css';

const Button = ({children, inverted, ...otherProps}) => {
    return(
        <button 
            className = {`${inverted ? 'Inverted' : ''} Button`} 
            {...otherProps}>
                {children}
        </button>
    )
}

export default Button;