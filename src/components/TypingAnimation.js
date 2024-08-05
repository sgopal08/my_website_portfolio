import React, { useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  useEffect(() => {
    const messageContainer = document.getElementById('typed-message');
    const message = 'Welcome! Take a look around...';
    let index = 0;
    let prevCursor = null;

    const typeLetter = () => {
      if (index < message.length) {
        if (prevCursor !== null) {
          prevCursor.remove(); // Remove previous cursor
        }
        const newLetter = document.createElement('span');
        newLetter.textContent = message[index];
        newLetter.classList.add('bold'); // Add bold styling
        const newCursor = document.createElement('span');
        newCursor.classList.add('cursor');
        messageContainer.appendChild(newLetter); // Add new letter
        messageContainer.appendChild(newCursor); // Add new cursor
        prevCursor = newCursor; // Update previous cursor
        index++;
        setTimeout(typeLetter, 100); // Adjust speed here (100ms = 0.1 seconds)
      }
    };

    typeLetter();
  }, []);

  return <div id="typed-message"></div>;
};

export default TypingAnimation;
