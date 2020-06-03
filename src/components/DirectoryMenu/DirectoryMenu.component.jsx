import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './../../redux/directory/directory.selectors';

import MenuItem from '../MenuItem/MenuItem.component';

import './DirectoryMenu.styles.css';

const DirectoryMenu = (props) => {
  return(
      <div className = "DirectoryMenu">

          {props.sections.map(section => {
              return <MenuItem 
                          key = {section.id} 
                          {...section} />;
          })}

      </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);