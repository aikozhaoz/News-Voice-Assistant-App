import React from 'react';
import reactDom from 'react-dom';

// Get styling
import './index.css';
import App from './App';

// Render the whole application and put the whole program to root
// Note: The <html> HTML element represents the root (top-level element) of an HTML document
ReactDOM.render(<App />, document.getElementById('root'));