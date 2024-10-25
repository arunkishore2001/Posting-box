import './SignUp.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        companyName: '',
        companyEmail: '',
        employeeSize: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  
    const validateForm = () => {
        const { name, phone, companyName, companyEmail, employeeSize } = formData;

        if (!name || !phone || !companyName || !companyEmail || !employeeSize) {
            return "All fields are required.";
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return "Invalid phone number. Must be 10 digits.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(companyEmail)) {
            return "Invalid email address.";
        }

        return null;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationError = validateForm();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/signup`, formData);
            console.log(response.data);
            alert('Form Submitted Successfully!');
            navigate('/create');
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Error submitting form, please try again.');
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
                        <h2 className="form-title">Sign Up</h2>
                        <p className="form-subtitle">Lorem Ipsum is simply dummy text</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>
                                    <i className="icon">&#xf007;</i>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="icon">&#xf095;</i>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone no."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="icon">&#xf1ad;</i>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="icon">&#xf0e0;</i>
                                    <input
                                        type="email"
                                        name="companyEmail"
                                        placeholder="Company Email"
                                        value={formData.companyEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label>
                                    <i className="icon">&#xf0c0;</i>
                                    <input
                                        type="number"
                                        name="employeeSize"
                                        placeholder="Employee Size"
                                        value={formData.employeeSize}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>

                            {/* Display error message if any */}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            
                            <p className="form-terms">
                                By clicking on proceed you will accept our <br /> <a href="#">Terms & Conditions</a>
                            </p>
                            <button type="submit" className="form-button">Proceed</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
