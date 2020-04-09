// npm imports
import React from 'react';
import ReactDOM from 'react-dom';

// import main application file
import AppWrapper from './AppWrapper';

// render the application
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppWrapper />, wrapper) : false;

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./AppWrapper', () => render(App));