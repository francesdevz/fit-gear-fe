import React, { useState, Fragment } from 'react';
import GitHubIcon from './GitHubIcon';
import InputField from './InputField';
import LinkBtn from './LinkBtn';
import GoogleIcon from './GoogleIcon';
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { setField, LoginUser } from '../actions/reducers/loginReducer';
import { validateLoginForm } from '../utils/validateLoginForm';
import Spinner from '../components/Spinner';

/**
 * Configuration for form fields.
 * Each object defines the properties for a field to render dynamically.
 */
const fieldsConfig = [
  { name: 'emailAddress', type: 'email', label: 'Email Address', placeholder: 'Enter your Email Address' },
  { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your Password' },
];

/**
 * LoginAccount Component
 * 
 * A reusable component for user login functionality with email/password fields
 * and third-party sign-in options.
 * 
 * This component integrates Redux for managing form state and uses a utility
 * function for form validation.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.login - The current login form state from Redux.
 * @param {Function} props.setField - Redux action for updating individual form fields.
 * 
 * @returns {JSX.Element} The rendered LoginAccount component.
 */
const LoginAccount = ({ login, setField, LoginUser }) => {
  const dispatch = useDispatch();

  // State to manage form field errors
  const [errors, setErrors] = useState({});

  /**
   * Handle GitHub Sign-In.
   * Placeholder function for integrating GitHub OAuth or login logic.
   */
  const handleGitHubSignIn = () => {
    console.log("GitHub sign-in clicked");
  };

  /**
   * Handle Form Submission.
   * Validates form inputs and proceeds with the login process if valid.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleRegister = (e) => {
    e.preventDefault();
    const errors = validateLoginForm(login); // Validate the form inputs
    if (Object.keys(errors).length > 0) {
      setErrors(errors); // Set errors if validation fails
    } else {
      dispatch(LoginUser(login))
    }
  };

  return (
    <Fragment>
      {/* Spinner for loading state */}
      <Spinner spin={login.showSpinner}/>
      <div className="containers">
        <div className="create-account">
          <h2>Log In</h2>
          <p className="subtitle">Enter your email and password below to log in to your account.</p>

          {/* Login Form */}
          <form onSubmit={handleRegister}>
            {fieldsConfig.map((field) => (
              <div key={field.name} className="form-group">
                <InputField
                  label={field.label}
                  type={field.type}
                  value={login[field.name]} // Get the current field value from Redux state
                  onChange={(e) => dispatch(setField({ field: field.name, value: e.target.value }))} // Dispatch action to update field value
                  placeholder={field.placeholder}
                  className={errors[field.name] ? 'error-input' : ''} // Add error styling if validation fails
                />
              </div>
            ))}
            <p style={{ textAlign: 'center', color: '#111827' }}>
              Don't have an account?{' '}
              <LinkBtn style={styles} redirectStr="/register" label="Register" />
            </p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          {/* Divider for Social Login */}
          <div className="divider">
            <span>Or continue with</span>
          </div>

          {/* Social Login Buttons */}
          <div className="social-login">
            <button onClick={handleGitHubSignIn} className="btn btn-github">
              <GitHubIcon />
              GitHub
            </button>
            <button className="btn btn-google">
              <GoogleIcon />
              Google
            </button>
          </div>

          {/* Terms and Privacy Notice */}
          <p className="terms">
            By clicking continue, you agree to our{' '}
            <a href="#" className="link">Terms of Service</a> and{' '}
            <a href="#" className="link">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

/**
 * Styles object for inline CSS customization.
 */
const styles = {
  textDecoration: 'blue',
  marginLeft: '2px',
};

/**
 * Maps Redux state to component props.
 * 
 * @param {Object} state - The current Redux state.
 * @returns {Object} Props mapped from Redux state.
 */
const mapStateToProps = (state) => ({
  login: state.login, // Login form state
});

/**
 * Maps Redux dispatch actions to component props.
 * 
 * @param {Function} dispatch - Redux dispatch function.
 * @returns {Object} Props mapped from Redux actions.
 */
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setField, // Action to update individual form fields,
      LoginUser
    },
    dispatch
  );

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginAccount);
