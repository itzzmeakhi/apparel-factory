import React from 'react';

import CollectionItem from './../CollectionItem/CollectionItem.component';

import './CollectionPreview.styles.css';

const CollectionPreview = ({title, items}) => {
    return (
        <div className = "CollectionPreview">

            <h1 className = "Title">{title.toUpperCase()}</h1>

            <div className = "Preview">

                {items.filter((item, index) => index < 4).map(item => (
                    <CollectionItem 
                        key = {item.id} 
                        item = {item}
                    />
                ))}

            </div>

        </div>
    )
}

export default CollectionPreview;