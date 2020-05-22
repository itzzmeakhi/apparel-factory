import React from 'react';

import './MenuItem.styles.css';

const MenuItem = (props) => {
    return(
        <div className = "MenuItem" style = {{ background : `url('https://i.ibb.co/cvpntL1/hats.png')` }}>

            <div className = "Content">

                <h1 className = "Title"> {props.title} </h1>
                <span className = "Subtitle"> SHOP NOW </span>
                <p> {props.imageUrl} </p>

            </div>

        </div>
    )
}

export default MenuItem;