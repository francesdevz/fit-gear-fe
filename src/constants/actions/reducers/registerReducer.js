import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as constants from '../../payload/payload';
import submitFormData from '../../apis/submitFormData';
import * as route from '../../routes/Routes';
import { METHOD } from '../../apis/apiCall';

/**
 * Async thunk to submit registration data.
 * This thunk sends a POST request to the server with the provided payload (user registration data).
 * 
 * @param {Object} payload - The registration data to be submitted.
 * @returns {Promise<Object>} The response data from the server.
 * @throws {Error} Throws error if the request fails.
 */
export const submitRegisteredUser = createAsyncThunk("register/submit", async (payload) => {
    try {
        return await submitFormData(METHOD.POST, route.route.register, payload);
    } catch (error) {
        console.log(error);
        throw error;
    }
});

/**
 * Slice for handling registration-related state in the Redux store.
 * This slice includes the registration form state and actions to handle user input and submission status.
 */
const registerReducer = createSlice({
    name: "Register",
    initialState: constants.registerPayload, // Initial state from the constants file
    reducers: {
        /**
         * Action to set a field value in the registration form.
         * This action updates the state for a specific field (e.g., fullName, email, password).
         * 
         * @param {Object} state - The current state of the registration form.
         * @param {Object} action - The action object containing field and value.
         * @param {string} action.payload.field - The name of the field to update.
         * @param {any} action.payload.value - The new value for the field.
         */
        setField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
            console.log(state, value); // Log the state and field value for debugging
        }
    },
    extraReducers: builder => {
        builder.addCase(submitRegisteredUser.pending, (state) => {
            // Show spinner when the request is in progress
            state.showSpinner = true;
        });
        builder.addCase(submitRegisteredUser.fulfilled, (state) => {
            // Reset the form fields and hide the spinner once the registration is successful
            state.fullName = "";
            state.emailAddress = "";
            state.password = "";
            state.repeatPassword = "";
            state.showSpinner = false;
        });
    }
});

// Exporting actions for dispatching in the component
export const { setField } = registerReducer.actions;

// Exporting the reducer to be added to the Redux store
export default registerReducer.reducer;
