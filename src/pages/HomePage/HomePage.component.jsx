import React from 'react';

import DirectoryMenu from './../../components/DirectoryMenu/DirectoryMenu.component';

import './HomePage.styles.css';

const HomePage = (props) => {
    return(
        <div className = "HomePage">
            <DirectoryMenu />
        </div>
    );
}

export default HomePage;