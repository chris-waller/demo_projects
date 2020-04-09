// npm imports
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from "react-redux";
import moment from "moment";

// import all of the react pages here
import Home from '../pages/Home';
import AsyncPage from '../pages/DynamicPage';
import NoMatch from '../pages/NoMatch';

// The date format that will be used when displaying dates throughout the site
// TODO: need to move this into a common file, state or redux
const DATE_FORMAT = "dddd, MMMM Do YYYY, h:mm:ss a";

// redux actions
import ACTIONS from "../redux/actions";
import DynamicPage from '../pages/DynamicPage';

/**
 * The main application file for the site.
 */
class ReduxWrapper extends Component {

  /**
   * Constructor
   */
  constructor() {
    super(); 
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {
    this.updateServerData();
    // create an interval to constantly hit the backend API in order to keep the data up-to-date
    this.interval = setInterval(() => {
      this.updateServerData();
    }, 10000);
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

  updateServerData() {
    this.callBackendAPI()
    .then(res => { 
      this.props.updateRetrievalTime(moment(res.currentTime).format(DATE_FORMAT));         
    })
    .catch(err => console.log(err));
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

  render() {
    return(
      <Router>
        <Switch>
          {/* Setup all the routes here */ }
          {/* TODO: depending on where this app goes, might be more secure to pass in the
          individual state variables rather than the entire state itself */}
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NoMatch} />} 
          />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateRetrievalTime: item => dispatch(ACTIONS.updateRetrievalTime(item)),
});

export default connect(
  null, // don't need to read the store 
  mapDispatchToProps
)(ReduxWrapper);