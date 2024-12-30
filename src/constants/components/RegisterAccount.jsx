/**
 * RegisterAccount component handles the user registration form.
 * It includes input fields for Full Name, Email Address, Password, and Repeat Password.
 * When the form is submitted, it validates the form data and dispatches an action to submit the registration.
 * It also handles showing an error message if the form validation fails and manages the display of a loading spinner during the API call.
 * 
 * @component
 * @example
 * // Usage:
 * <RegisterAccount />
 */

import React, { useState, Fragment } from 'react';
import InputField from './InputField';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import LinkBtn from './LinkBtn';
import { submitRegisteredUser, setField } from '../actions/reducers/registerReducer';
import { validateRegisterForm } from '../validators/validateRegisterForm';
import Spinner from '../components/Spinner';

/**
 * Field labels for the registration form.
 * Used to display human-readable labels for each form field.
 * 
 * @constant
 * @type {Object}
 */
const fieldLabels = {
  fullName: "Full Name",
  emailAddress: "Email Address",
  password: "Password",
  repeatPassword: "Re-Enter Password",
};

/**
 * Field types for the registration form input elements.
 * Defines the type of each input (e.g., text, email, password).
 * 
 * @constant
 * @type {Object}
 */
const fieldTypes = {
  fullName: 'text',
  emailAddress: 'email',
  password: 'password',
  repeatPassword: 'password',
};

/**
 * RegisterAccount component.
 * This component renders a form that allows users to register for an account.
 * It includes form validation and dispatches actions for submitting the registration data.
 * 
 * @param {Object} props - The component's props.
 * @param {Object} props.register - The state for the registration form fields.
 * @param {Function} props.setField - Redux action to update form fields.
 * @param {Function} props.submitRegisteredUser - Redux action to submit the registration form data.
 * 
 * @returns {JSX.Element} The registration form component.
 */
const RegisterAccount = ({ register, setField, submitRegisteredUser }) => {
  /**
   * Local state to manage form errors.
   * @type {Object}
   */
  const [errors, setErrors] = useState({});
  
  /**
   * Dispatch function from Redux.
   * @type {Function}
   */
  const dispatch = useDispatch();

  /**
   * Handles the form submission for registration.
   * Validates the form and dispatches the registration action if valid.
   * 
   * @param {Event} e - The form submission event.
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const newErrors = validateRegisterForm(register);
    
    if (Object.keys(newErrors).length > 0) {
      // If errors are found, update the error state
      setErrors(newErrors);
    } else {
      // If no errors, submit the registration data
      dispatch(submitRegisteredUser(register));
    }
  };

  return (
    <Fragment>
      {/* Spinner for loading state */}
      <Spinner spin={register.showSpinner} />
      
      <div className="containers">
        <div className="create-account">
          <h2>Create Account</h2>
          <p className="subtitle">Enter your Fullname, email, and password below to register your account</p>
          
          {/* Registration form */}
          <form onSubmit={handleRegister}>
            {/* Loop over form fields */}
            {['fullName', 'emailAddress', 'password', 'repeatPassword'].map((field) => (
              <div key={field} className="form-group">
                <InputField
                  label={fieldLabels[field]}  // Field label
                  type={fieldTypes[field]}    // Field type (text, email, password)
                  placeholder={`Enter your ${fieldLabels[field]}`} // Placeholder text
                  value={register[field]}    // Current field value from Redux state
                  onChange={(e) => dispatch(setField({ field, value: e.target.value }))} // Handle input changes
                  className={errors[field] ? 'error-input' : ''}  // Add error class if there's an error for the field
                />
              </div>
            ))}
            
            {/* Link to login page */}
            <p style={{ textAlign: 'center', color: '#111827' }}>
              Already have an account? 
              <LinkBtn style={styles} redirectStr={"/login"} label={'Login'} />
            </p>
            
            {/* Submit button */}
            <button type="submit" className="btn btn-primary">
              Register Account
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

/**
 * Styles for the link button.
 * @constant
 * @type {Object}
 */
const styles = {
  textDecoration: 'blue',
  marginLeft: '2px',
};

/**
 * Maps Redux state to component props.
 * 
 * @param {Object} state - The Redux state.
 * @returns {Object} The props mapped from the Redux state.
 */
const mapStateToProps = (state) => ({
  register: state.register,
});

/**
 * Maps Redux actions to component props.
 * 
 * @param {Function} dispatch - The Redux dispatch function.
 * @returns {Object} The actions to be dispatched.
 */
const mapDispatchToProps = (dispatch) => bindActionCreators({
  setField,               // Action to update individual form fields
  submitRegisteredUser,   // Action to submit registration data
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAccount);
