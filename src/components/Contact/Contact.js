import React, { useState } from 'react';
import './Contact.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

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
    <section className="contact-container">
      <div className="contact-intro">
        <span className="section-eyebrow">05 / Get in touch</span>
        <div className="contact-title">
          <TypingAnimation text="Let's connect" />
        </div>
        <p className="contact-subtitle">I'd love to hear from you!</p>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/sanjana-gopalswamy-029887296/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/sgopal08"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-github" />
          </a>
          <a href="mailto:sgopal0809@gmail.com" className="icon">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      {isSubmitted ? (
        <p className="thank-you-message">
          Thank you for contacting me, I will get back to you soon!.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me what's on your mind..."
              required
            />
          </label>
          <button type="submit">
            Send message <span aria-hidden="true">↗</span>
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
