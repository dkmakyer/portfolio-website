import React from 'react'
import "./contact-me.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactMe = () => {
    const [isActive, setIsActive] = React.useState(false);
    function openForm(){
        setIsActive(prev => !prev);
    }
  return (
    <>
        <div className="contact-me-container">
            <h5>Get in Touch</h5>
            <h1>Contact me</h1>
            <div className="mode-of-contact">
                <button onClick={openForm}><FontAwesomeIcon icon={faEnvelope}/>Send me a mail</button>
                <button><FontAwesomeIcon icon={faLinkedin}/>LinkedIn</button>
            </div>
            {isActive ? (
                <div className="form-container">
                    <input type="text" placeholder='Name: '/>
                    <input type="text" placeholder='Email: '/>
                    <textarea name="message" id="message-box" placeholder="Message: " cols="30" rows="10"></textarea>
                    <input type="submit" placeholder='send' />
                </div>
            ) : null}
        </div>
    </>
  );
}

export default ContactMe
