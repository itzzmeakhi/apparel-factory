import React from 'react';

import './CollectionItem.styles.css';

const CollectionItem = ({imageUrl, name, price}) => {
    return(
        <div className = "CollectionItem">
            <div className = "Image"
                style = {{
                    backgroundImage : `url(${imageUrl})`
                }}>
            </div>
            <div className = "CollectionFooter">
                <span className = "Name">{name}</span>
                <span className = "Price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;