import React, { useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  useEffect(() => {
    const messageContainer = document.getElementById('typed-message');
    const message = "Welcome!";
    let index = 0;
    let prevCursor = null;

    const typeLetter = () => {
      if (index < message.length) {
        if (prevCursor !== null) {
          prevCursor.remove(); 
        }
        const newLetter = document.createElement('span');
        newLetter.textContent = message[index];
        newLetter.classList.add('bold'); 
        const newCursor = document.createElement('span');
        newCursor.classList.add('cursor');
        messageContainer.appendChild(newLetter); 
        messageContainer.appendChild(newCursor); 
        prevCursor = newCursor; 
        index++;
        setTimeout(typeLetter, 100); // for speed --> 100ms = 0.1 seconds
      }
    };

    typeLetter();
  }, []);

  return <div id="typed-message"></div>;
};

export default TypingAnimation;
