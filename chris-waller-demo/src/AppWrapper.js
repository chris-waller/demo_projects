// npm imports
import React, { Component } from 'react';
import { Provider } from "react-redux";

// redux store
import configureStore from "./redux/store";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

// the main app component
import App from "./components/App";

/**
 * A wrapper for the application to add redux.
 * I am doing it here rather than in App.js becaue I want App.js to be able
 * to access the store and update it with a timer
 */
class AppWrapper extends Component {
  /**
   * Render.
   */
  render() {
    return (
      <Provider store={reduxStore}>
        <App />
      </Provider>
    );
  }
}

export default AppWrapper