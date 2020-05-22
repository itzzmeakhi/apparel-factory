import React from 'react';

import { Hats, Jackets, Mens, Sneakers, Womens } from './../../assets/images/js/HomePageImages.component';

import './MenuItem.styles.css';

const MenuItem = (props) => {
    let bgImage = null;
    switch(props.imageUrl) {
        case 'Hats':
            bgImage = Hats;
            break;
        case 'Jackets':
            bgImage = Jackets;
            break;
        case 'Mens':
            bgImage = Mens;
            break;
        case 'Sneakers':
            bgImage = Sneakers;
            break;
        case 'Womens':
            bgImage = Womens;
            break;
        default:
            bgImage = null;
            break;
    }
    return(
        // <div className = {`${props.size} MenuItem`} style = {{ background : `url('${props.imageUrl}')` }}>
        
        <div className = {`${props.size} MenuItem`} style = {{ background : `url('${bgImage}')` }}>

            <div className = "Content">

                <h1 className = "Title"> {props.title} </h1>
                <span className = "Subtitle"> SHOP NOW </span>
                <p> {props.imageUrl} </p>

            </div>

        </div>
    )
}

export default MenuItem;