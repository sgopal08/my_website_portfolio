import React, { useEffect, useRef } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ( {text = "Hello, world!", fontSize = "50px"} ) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const messageContainer = containerRef.current;
    if(!messageContainer) return;

    messageContainer.innerHTML = "";

    let index = 0;
    let prevCursor = null;

    const typeLetter = () => {
      if (index < text.length) {
        if (prevCursor !== null) {
          prevCursor.remove(); 
        }
        const newLetter = document.createElement('span');
        newLetter.textContent = text[index];
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
  }, [text]);

  return <div ref={containerRef} id="typed-message" style={{fontSize: fontSize}}></div>;
};

export default TypingAnimation;
