import React from "react";
import './contact.styles.scss';

const ContactPage = () =>(
    <div className="contact-page">
        <h1>Contact Us</h1>
        <div className="row">
            <div className="column">
                <h2>Quick Access</h2>
                <h3>Shopping Easy Donation</h3>
                <p>1-800-XXX-XXX1</p>
                <h3>General Customer Care</h3>
                <p>1-800-XXX-XXX2</p>
                <h3>Technical Support</h3>
                <p><a href="mailto:ClaudiaSun2015@gmail.com">ClaudiaSun2015@gmail.com</a></p>
            </div>
            
            <div className="column">
                <h2>Address</h2>
                <h3>Easy Donation Ltd</h3>
                <p>Customer Relations</p>
                <p> PO Box 3XX,
                    Houston, TX 7XXXX
                </p>
            </div>
        </div>
        
    </div>

);

export default ContactPage;