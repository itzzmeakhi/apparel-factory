import React from 'react';

import './Button.styles.css';

const Button = ({children, ...otherProps}) => {
    return(
        <button className = "Button" {...otherProps}>
            {children}
        </button>
    )
}

export default Button;