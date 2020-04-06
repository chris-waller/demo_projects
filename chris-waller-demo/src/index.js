// npm imports
import { AppContainer } from 'react-hot-loader';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import main application file
import App from './App';

/**
 * This is the main js component that 'pairs' with index.html.
 * Think of it as the file that hooks the react pages/components with index.html.
 */
class Index extends Component {
  render() {
    return (
      <AppContainer>
        <Component />
      </AppContainer>
    );
  }
}

// render the application
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./App', () => render(App));