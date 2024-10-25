import React, { useState, useEffect } from 'react';
import './SignUp.css';
import axios from 'axios';

function Verification({ userEmail }) {  
    const [formData, setFormData] = useState({
        phoneOtp: '',
        emailOtp: ''
    });

    const [phoneOtpMessage, setPhoneOtpMessage] = useState('');
    const [emailOtpMessage, setEmailOtpMessage] = useState('');

    const [isPhoneVerified, setIsPhoneVerified] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    
    const [isPhoneVerifying, setIsPhoneVerifying] = useState(false);
    const [isEmailVerifying, setIsEmailVerifying] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleVerification = async (type) => {
        const { phoneOtp, emailOtp } = formData;
        if (type === 'phone') setIsPhoneVerifying(true);
        if (type === 'email') setIsEmailVerifying(true);

        try {
            const response = await axios.post(`http://localhost:8000/api/verify-${type}`, {
                otp: type === 'phone' ? phoneOtp : emailOtp,
                email: userEmail  
            });

            if (response.data.verified) {

                if (type === 'phone') {
                    setIsPhoneVerified(true);
                    setPhoneOtpMessage('Phone OTP verified successfully!');
                } else {
                    setIsEmailVerified(true);
                    setEmailOtpMessage('Email OTP verified successfully!');
                }
            } else {
                if (type === 'phone') {
                    setPhoneOtpMessage('Invalid Phone OTP. Please try again.');
                } else {
                    setEmailOtpMessage('Invalid Email OTP. Please try again.');
                }
            }
        } catch (error) {
            console.error(`Error verifying ${type} OTP:`, error);
            if (type === 'phone') {
                setPhoneOtpMessage('Error verifying Phone OTP. Please try again later.');
            } else {
                setEmailOtpMessage('Error verifying Email OTP. Please try again later.');
            }
        } finally {
            if (type === 'phone') setIsPhoneVerifying(false);
            if (type === 'email') setIsEmailVerifying(false);
        }
    };

    return (
        <section className="sign-up container">
            <div className="row">
                <div className="sign-para col-md-6">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="col-md-6">
                    <div className="form-container">
                        <h2 className="form-title">Verification</h2>
                        <p className="form-subtitle">Please enter the OTPs sent to your mobile and email</p>

                        <div className="form-group">
                            <label>
                                <i className="icon">&#xf0e0;</i>
                                <input
                                    type="text"
                                    name="emailOtp"
                                    placeholder="Email OTP"
                                    value={formData.emailOtp}
                                    onChange={handleChange}
                                    required
                                    disabled={isEmailVerified}
                                />
                            </label>
                            <button
                                type="button"
                                className="form-button"
                                onClick={() => handleVerification('email')}
                                disabled={isEmailVerified || isEmailVerifying}
                            >
                                {isEmailVerifying ? 'Verifying...' : 'Verify Email OTP'}
                            </button>
                        </div>

                        {emailOtpMessage && (
                            <p className={isEmailVerified ? 'success-message' : 'error-message'}>
                                {emailOtpMessage}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Verification;