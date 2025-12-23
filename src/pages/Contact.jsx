import React from 'react';

const Contact = () => {
    return (
        <main className="wrapper">
            <section className="section">
                <div className="top-header">
                    <h1>Contact Me</h1>
                    <span>Get in touch</span>
                </div>
                <div className="contact-form">
                    <input type="text" className="contact-input" placeholder="Your Name" />
                    <input type="email" className="contact-input" placeholder="Your Email" />
                    <textarea className="contact-input" rows="5" placeholder="Message"></textarea>
                    <button className="btn blue-btn">Send Message <i className="uil uil-message"></i></button>
                </div>
            </section>
        </main>
    );
};

export default Contact;