import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initAnalytics } from './utils/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

initAnalytics();
reportWebVitals();
