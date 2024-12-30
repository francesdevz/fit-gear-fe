

/**
 * Validates form inputs and returns an object containing error messages for invalid fields.
 * @param {Object} formData - The data to validate.
 * @returns {Object} An object where keys are field names and values are error messages.
 */
export const validateRegisterForm = (formData) => {
    const errors = {};
  
    if (!formData.fullName || formData.fullName.trim() === '') {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.emailAddress || formData.emailAddress.trim() === '') {
      errors.emailAddress = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      errors.emailAddress = 'Invalid Email Address';
    }
    if (!formData.password || formData.password.trim() === '') {
      errors.password = 'Password is required';
    }
    if (!formData.repeatPassword || formData.repeatPassword.trim() === '') {
      errors.repeatPassword = 'Repeat Password is required';
    } else if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }
  
    return errors;
  };
  