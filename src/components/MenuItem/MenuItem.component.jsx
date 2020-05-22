import React from 'react';

import './MenuItem.styles.css';

const MenuItem = (props) => {
    return(
        <div className = "MenuItem">

            <div className = "Content">

                <h1 className = "Title"> First Item </h1>
                <span className = "Subtitle"> SHOP NOW </span>

            </div>

        </div>
    )
}

export default MenuItem;