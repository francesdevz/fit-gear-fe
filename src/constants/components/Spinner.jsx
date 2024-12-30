import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';

/**
 * A custom spinner component that shows a loading animation.
 * 
 * This component utilizes React Bootstrap's `Spinner` component to display a 
 * loading spinner when the `spin` prop is true. It includes an overlay for better 
 * visibility of the spinner on the page.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.spin - A flag that determines whether the spinner should be shown. 
 *                               If true, the spinner will be rendered; otherwise, it will be hidden.
 * 
 * @returns {JSX.Element|null} The rendered spinner component, or null if `spin` is false.
 */
const CustomSpinner = (props) => {
    return (
        props.spin ? 
            <div className="spinner-container"> 
                <div className="overlay"></div>
                <BootstrapSpinner className="custom-spinner" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </BootstrapSpinner>
            </div>
        : null 
    );
}

export default CustomSpinner;
