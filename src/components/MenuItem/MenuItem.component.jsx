import React from 'react';
import { withRouter } from 'react-router-dom';

import { Hats, Jackets, Mens, Sneakers, Womens } from './../../assets/images/js/HomePageImages.component';

import './MenuItem.styles.css';

const MenuItem = (props) => {
    // console.log(props);
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
        
        <div className = {`${props.size} MenuItem`}>

            <div className = "BackgroundImage" style = {{ background : `url('${bgImage}')` }}></div>

            <div className = "Content">

                <h1 className = "Title"> {props.title.toUpperCase()} </h1>
                <span className = "Subtitle"> SHOP NOW </span>

            </div>

        </div>
    )
}

export default withRouter(MenuItem);