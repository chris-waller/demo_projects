// npm imports
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import moment from "moment";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

// import all of the react pages here
import Home from './pages/Home';
import AsyncPage from './pages/DynamicPage';
import NoMatch from './pages/NoMatch';

// css imports
import 'bootstrap/dist/css/bootstrap.min.css';

// The date format that will be used when displaying dates throughout the site
// TODO: need to move this into a common file, state or redux
const DATE_FORMAT = "dddd, MMMM Do YYYY, h:mm:ss a";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

/**
 * The main application file for the site.
 */
class App extends Component {

  /**
   * Constructor
   */
  constructor() {
    super(); 

    this.state =  {
      lastUpdateTime: "N/A",
      fakeErrorCounter: 0,
      updateError: false,
    };

  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {

    // create an interval to constantly hit the backend API in order to keep the data up-to-date
    this.interval = setInterval(() => {
      this.callBackendAPI()
        .then(res => { 
          
          // this code simulates a 3 second error every 10 seconds
          let fakeErrorInduced = false;
          let fakeErrorCounter = this.state.fakeErrorCounter;
          if (this.state.fakeErrorCounter > 10) {
            fakeErrorInduced = true;
            
            // reset the timer every 13 seconds -- I could have used modulus instead of a timer
            // reset here but this will avoid memory leaks due to a long running demo app.
            this.state.fakeErrorCounter === 13 ? fakeErrorCounter = 1 : fakeErrorCounter++;           
          } else { fakeErrorCounter++ }; 

          // update the state depending on the API results
          this.setState({ 
            lastUpdateTime: moment(res.currentTime).format(DATE_FORMAT),
            updateError: fakeErrorInduced,
            fakeErrorCounter,
          })
        })
        .catch(err => console.log(err));
    }, 1000);
  }

  /**
   * ComponentWillUnmount
   */
  componentWillUnmount() {
    // We should alway clear a js interval in React. It probably doesn't matter in this
    // particular case as this is the main application file but it's good practice so
    // I'll leave it in.
    clearInterval(this.timer);
  }  
   
   /**
    * Call the node server to hit an API.
    * Note that this is a Promise as it uses the async keyword
    * TODO: this is just a placeholder function 
    */
   async callBackendAPI() {
      
    // TODO: don't hardcode this here. Get from a config file
    // TODO: make server secure (https)
    const url = "http://localhost:5000/express_backend";
    const response = await fetch(url);
    const body = response.json();
    
    // error processing the request
    if (response.status != 200) {
      const errorMessage = `There was an error when trying to access url ${url}. \n` + 
        `Response status: ${response.status}`;  
      throw Error(errorMessage)                     
    }  

    return body;
  };

  /**
   * Render.
   */
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <Router>
          <Switch>
            {/* Setup all the routes here */ }
            {/* TODO: depending on where this app goes, might be more secure to pass in the
            individual state variables rather than the entire state itself */}
            <Route exact path="/" render={(props) => 
              <Home {...this.state} />} 
            />
            <Route exact path="/dynamic" render={(props) =>
              <AsyncPage {...this.state} />} 
            />
            <Route render={(props) =>
              <NoMatch {...this.state} />} 
            />
          </Switch>
        </Router>
      </ReduxProvider>
    );
  }
}

export default App;