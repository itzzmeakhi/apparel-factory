import React from 'react';

import './FormInput.styles.css';

const FormInput = (props) => {
    return(
        <div className = "FormInput">

            <input
                type = {props.type} 
                name = {props.name}
                id = {props.id}
                value = {props.value}
                onChange = {props.handleChange}
                placeholder = {props.placeholder}
                autoComplete = "off" />

            <label>{props.label}</label>
            
            {/* { props.label ? (<label for = {props.id}>{props.label}</label>) : null } */}

        </div>
    )
}

export default FormInput;