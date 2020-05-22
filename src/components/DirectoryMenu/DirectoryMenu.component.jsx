import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem.component';

import './DirectoryMenu.styles.css';

class DirectoryMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'Hats',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'Jackets',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'Sneakers',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'Womens',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'Mens',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
              
        }
    }


    render() {
        return(
            <div className = "DirectoryMenu">

                {this.state.sections.map(section => {
                    return <MenuItem 
                                key = {section.id} 
                                imageUrl = {section.imageUrl} 
                                title = {section.title} 
                                size = {section.size} 
                                linkUrl = {section.linkUrl} />;
                })}

            </div>
        )
    }
}

export default DirectoryMenu;