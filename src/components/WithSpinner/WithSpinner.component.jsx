import React from 'react';

import './WithSpinner.styles.css';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div className = "SpinnerOverlay">
                <div className = "SpinnerContainer"></div>
            </div>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }

    return Spinner;
}

export default WithSpinner;