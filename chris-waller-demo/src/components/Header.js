// npm imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip} from 'react-bootstrap';

import ACTIONS from "../redux/actions";
import { connect } from "react-redux";


// custom components
import HambugerMenu from './HamburgerMenu';

// css imports
import styles from './css/header.css';

// image imports
import logo from "../images/virus.jpg";
import popupIcon from "../images/question-mark.png";
import hamburgerIcon from "../images/hamburger-icon.png";

/**
 * This component is responsible for displaying the site header.
 * It is broken into the following parts:
 *  - traditional home page link/icon
 *  - last update time as well as update status
 *  - accordian menu for site navigation
 */
class Header extends Component {

  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = { 
      width: 1200,
      menuSide: "right", 
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  /**
   * ComponentWillUnmount.
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  /**
   * Update the windown dimensions so we can shift the hamburger menu to the left/right as required
   */
  updateWindowDimensions() {
    this.setState({ 
      menuSide: window.innerWidth < 640 ? "right" : "left",      
    });
  }

 
  /**
   * Render.
   */
  render() {
    return (
      
      <div className={"container " + styles.header}>

        <div className={"row " + styles.row}>          

          {/* Home link/icon section */}
          {/* *************************** */}
          <div className={"col " + styles.logoSection}>
            <div className={styles.logoSection}>
              <Link to="/">          
                <img title="Home" src={logo} className={styles.logo} />          
              </Link>
            </div>
          </div>
          
          {/* Site title & update section */}
          {/* *************************** */}
          <div className={"col " + styles.titleSection}>
            <h1 className={styles.title}>Chris Waller Demo Site</h1>

            <div className={styles.updateTime}>
              <p className={this.props.updateError ? styles.oldData : styles.currentData}>
                Last Updated: {this.props.lastUpdateTime ? this.props.lastUpdateTime : "Error Updating"}
              </p>
             
              {/* render a custom tooltip to show how to add any tooltip to any element */ }
              <OverlayTrigger
                placement="right" 
                overlay={(
                  <Tooltip>
                    <div>
                      <p>
                        The main application file has a 1-second timer that makes an asyncronous request
                        to a local node.js server. This server returns the current date (currently in 
                        local only. TODO: Switch to UTC)<br /><br /> {/* TODO: remove lazy <br> tags */}
                      </p>
                      <p>
                        At the moment, I am inducing a 3-second 'server lag' every 10 seconds. This error
                        state is passed, along with the last known update time, to the main page components.
                      </p>
                    </div>                    
                  </Tooltip>
                )} 
                triggerType="hover"
              >
                <img src={popupIcon} className={styles.popupIcon} />
              </OverlayTrigger>
              
            </div>
          </div>
          
          {/* Hambuger Menu Section */ }
          {/* ********************** */ }
          <div className={"col " + styles.menuSection}>
            <HambugerMenu 
              slideDirection={this.state.menuSide}
              iconUrl={hamburgerIcon} 
            />
          </div>

        </div>
      </div>      
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


