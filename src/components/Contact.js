import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);

    // Send data to Formspree
    fetch('https://formspree.io/f/manwgqbv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true); 
        } else {
          alert('Oops! Something went wrong. Please try again.');
        }
      })
      .catch(() => alert('There was a problem submitting the form.'));
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2 >Contact Me</h2>
      </div>
      <p className="contact-subtitle">I'd love to hear from you!</p>

      {/* Conditionally render form or thank-you message */}
      {isSubmitted ? (
        <p className="thank-you-message">Thank you for contacting me, I will get back to you soon!.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
