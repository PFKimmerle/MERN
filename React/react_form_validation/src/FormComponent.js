import React, { useReducer } from 'react';

// Validation functions for each input
const validateFirstName = (name) => {
    if (!name.trim()) return 'First name is required.';
    return null;
};

const validateLastName = (name) => {
    if (!name.trim()) return 'Last name is required.';
    return null;
};

// Email validation using regex
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required.';
    if (!regex.test(email)) return 'Please enter a valid email.';
    return null;
};

// Initial state for the form
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

// Reducer function to update state based on action
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIRSTNAME':
            return {
                ...state,
                firstName: {
                    value: action.payload,
                    error: validateFirstName(action.payload)
                }
            };
        case 'SET_LASTNAME':
            return {
                ...state,
                lastName: {
                    value: action.payload,
                    error: validateLastName(action.payload)
                }
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: {
                    value: action.payload,
                    error: validateEmail(action.payload)
                }
            };
        default:
            return state;
    }
};

// React component
const FormWithValidation = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
    };

    return (
        <form>
            <div>
                <input
                    name="firstName"
                    value={state.firstName.value}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                {state.firstName.error && <p className="error">{state.firstName.error}</p>}
            </div>
            <div>
                <input
                    name="lastName"
                    value={state.lastName.value}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                {state.lastName.error && <p className="error">{state.lastName.error}</p>}
            </div>
            <div>
                <input
                    name="email"
                    value={state.email.value}
                    onChange={handleChange}
                    placeholder="Email"
                />
                {state.email.error && <p className="error">{state.email.error}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormWithValidation;
