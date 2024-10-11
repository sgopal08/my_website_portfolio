
# My Personal Portfolio Website

Over the summer, I taught myself how to use the React.js framework and learned basics of JavaScript, HTML, and CSS. I created a responsive personal portfolio website to showcase my professional/exctracurricular experiences and projects.

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/35417dc6-1e03-4222-be17-fb8ae253cad9">


### Key Features

**1) Dynamic Screen View**


I implemented a responsive design across both mobile and desktop views, ensuring that users enjoy a seamless experience no matter what device they use. Utilizing CSS media queries and state management in React, the layout adjusts dynamically based on screen size.

```
const showButton = () => {
  if (window.innerWidth <= 960) {
  } 
};
```
**2) Hover Effects for Enhanced Visual Feedback**

I integrated smooth hover transitions for interactive tiles in the 'Experience' section. As the user hovers over each tile, the description fades in, providing a detailed view of each experience while maintaining a clean, minimalistic layout.

```
.experience-item:hover .experience-item-content {
  opacity: 0; /* Hide content on hover */
}

.experience-item:hover .experience-item-description {
  opacity: 1; /* Show description on hover */
}
```

**3) Typing Animation for Engaging Introductory Text**

I implemented a typing animation using JavaScript and React hooks. The text "Welcome! Take a look around..." is typed out one letter at a time.
```
const typeLetter = () => {
  if (index < message.length) {
    const newLetter = document.createElement('span');
    newLetter.textContent = message[index];
    newLetter.classList.add('bold'); 
    messageContainer.appendChild(newLetter);
    index++;
    setTimeout(typeLetter, 100); 
  }
};
```
**4) Interactive Contact Form for User Engagement**

The contact page includes an interactive form that is integrated with Formspree to allow users to send messages directly. Once the form is submitted, a thank-you message is displayed. I used the `fetch` API for form submission and handled success/failure responses.

```
const handleSubmit = (e) => {
  e.preventDefault(); 
  const formData = new FormData(e.target);
  fetch('https://formspree.io/f/manwgqbv', {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        setIsSubmitted(true); 
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    });
};
```




