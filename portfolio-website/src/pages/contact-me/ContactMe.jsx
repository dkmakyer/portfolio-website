import React from 'react'
import "./contact-me.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    const [isActive, setIsActive] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    });

    function openForm() {
        setIsActive(prev => !prev);
    }

    function openLinkedIn() {
        window.open("https://www.linkedin.com/in/david-akyer/", "_blank");
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        alert(`Sending: name: ${formData.name}, email: ${formData.email}, message: ${formData.message}`);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
        const submitButton = document.getElementById("submit-button");
        if (submitButton) {
            submitButton.style.backgroundColor = null;
        }
    }

    return (
        <>
            <div className="contact-me-container">
                <div className="contact-me-wrapper">
                    <h5>Get in Touch</h5>
                    <h1>Contact me</h1>
                    <div className="mode-of-contact">
                        <button onClick={openForm}>Send me a mail<FontAwesomeIcon icon={faEnvelope} /></button>
                        <button onClick={openLinkedIn}>LinkedIn<FontAwesomeIcon icon={faLinkedin} /></button>
                    </div>
                    {isActive ? (
                        <div className="form-container">
                            <input name='name' value={formData.name} type="text" placeholder='Name: ' onChange={handleChange} />
                            <input name='email' value={formData.email} type="text" placeholder='Email: ' onChange={handleChange} />
                            <textarea name='message' value={formData.message} onChange={handleChange} id="message-box" placeholder="Message: " cols="30" rows="10"></textarea>
                            <input type="submit" onClick={handleSubmit} id='submit-button' />
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default ContactMe
