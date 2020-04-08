// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'react-router-dom';


// css imports
import styles from './css/hamburger-menu.css';

// image imports
import cancelIcon from '../images/cancel-icon.png';

const slideDirection = {
  LEFT: "left",
  RIGHT: "right",
}

const menuItems = [
  {url: "/", text: "Home"},
  {url: "/dynamic", text: "Dynamic"},
  {url: "/foobar", text: "Page not Found"},
];

/**
 * This component creates a sliding menu with an icon to initiate
 * 
 * Props:
 *  slideDirection - "left" or "right". Indicates the direction the menu should slide
 *  iconUrl - the URL of the icon to display, relative to app root
 *  
 *  
 *  
 */
class HamburgerMenu extends Component {

  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    }
  }

  /**
   * This is a required function for when the user clicks off of the component.
   * It will be used to close the menu.
   */
  handleClickOutside() {
    this.toggleMenu(false);
  }

  /**
   * User is opening/closing the menu.
   * @param openMenu if true, opening the menu
   */
  toggleMenu(openMenu) {
    this.setState({
      menuOpen: openMenu
    });
  }

  /**
   * Renders the menu.
   */
  renderMenu() {    
    return (
      <div 
        className={styles.menu}
        style={{
          right: this.props.slideDirection === slideDirection.LEFT ? "0px" : "",
          left: this.props.slideDirection === slideDirection.RIGHT ? "0px" : "",
        }}
      >
        <img 
          src={cancelIcon}
          style={{
            float: this.props.slideDirection,
          }} 
          className={styles.cancelIcon}
          onClick={() => this.toggleMenu(false)}
        />
        
        {/* Render the menu items here */}
        {/* ************************** */}
        <div className={styles.menuItems}>
          {menuItems.map(item => {
            return (
              <Link to={item.url} className={styles.menuItem} key={item.url} >
                <h4
                  style={{
                    textAlign: this.props.slideDirection === slideDirection.LEFT ? "right" : "left",
                  }} 
                > {item.text} </h4>
              </Link>
            );
          })}       
        </div>
        
      </div>
    );
  }

  /**
   * Render.
   */
  render() {
    return(
      <div>
        <img 
          src={this.props.iconUrl} 
          className={styles.icon}
          onClick={() => this.toggleMenu(!this.state.menuOpen)}
        />

        {/* display menu if appropriate */}
        {this.state.menuOpen ? this.renderMenu() : null}

      </div>
    );
  }

}

export default enhanceWithClickOutside(HamburgerMenu);

// must declare all prop types and indicate they're required -- I'm doing this to avoid lazy programming
HamburgerMenu.propTypes = {  
  slideDirection: PropTypes.oneOf([slideDirection.LEFT, slideDirection.RIGHT]).isRequired,
  iconUrl:PropTypes.string.isRequired
};

// not using default properties -- including this just as a demo to show I'm aware of how a
// component would set some defaults
HamburgerMenu.defaultProps = {
  someValue: null,
};