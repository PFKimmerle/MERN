import React, { useState } from 'react';

function FormComponent() {
    // State hooks for each form input
    const currentStep = 1; // This is now a constant since we are not updating it
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');


    // Handler functions for the form inputs
    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const handlePhoneChange = (event) => setPhone(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic goes here
    };

    // Function to mask the password
    const maskPassword = (password) => '*'.repeat(password.length);

    return (
        <div className="form-container">
            {/* Progress Bar */}
            <div className="progress-bar">
                <div className={currentStep >= 1 ? "progress-step completed" : "progress-step"}>Step 1</div>
                <div className={currentStep >= 2 ? "progress-step completed" : "progress-step"}>Step 2</div>
                <div className={currentStep >= 3 ? "progress-step completed" : "progress-step"}>Step 3</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:*</label>
                    <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:*</label>
                    <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:*</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone: (optional)</label>
                    <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:*</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:*</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </div>
                <button type="submit" className="continue-button">Continue</button>
            </form>
            <div className="form-data">
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {maskPassword(password)}</p>
                <p>Confirm Password: {maskPassword(confirmPassword)}</p>
            </div>
        </div>
    );
}

export default FormComponent;
