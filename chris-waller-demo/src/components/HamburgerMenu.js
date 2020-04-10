// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'react-router-dom';


// css imports
import styles from './css/hamburger-menu.css';

// image imports
import cancelIcon from '../images/cancel-icon.png';

// helper enum -- TODO: move this to a utility file
const slideDirection = {
  LEFT: "left",
  RIGHT: "right",
}

const menuItems = [
  {url: "/", text: "Home"},
  {url: "/dynamic", text: "About this site"},
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
      resetMenu: false,
      slideDirection: "",
    }
  }

  /**
   * getDerivedStateFromProps.
   */
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.slideDirection !== prevState.slideDirection){
      return { 
        resetMenu: true,
        slideDirection: nextProps.slideDirection,
      };
   }
   else return { resetMenu: false};
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
    // figure out which classes to add to the 
    let menuClasses = styles.menu;
    menuClasses += this.state.resetMenu ? ` ${styles.reset}   ` : "";
    menuClasses = this.state.menuOpen ? 
      // menu open
      menuClasses :
      // menu closed 
      menuClasses+= this.props.slideDirection === slideDirection.LEFT ?
        ` ${styles.hideRight}` : 
        ` ${styles.hideLeft}`;

    return (
      <div 
        className={menuClasses}
        style={{
          // could have done the same thing as I did with the class selection above but wanted
          // to demo the concept of inline styling with javascript logic
          right: this.props.slideDirection === slideDirection.LEFT ? "0px" : "",
          left: this.props.slideDirection === slideDirection.RIGHT ? "0px" : "",
          borderLeftWidth: this.props.slideDirection === slideDirection.RIGHT ? "0px" : "1px",
          borderRightWidth: this.props.slideDirection === slideDirection.RIGHT ? "1px" : "0px",
        }}
      >
        {/* cancel icon */}
        <div>
          <img 
            src={cancelIcon}
            style={{
              float: this.props.slideDirection,
            }} 
            className={styles.cancelIcon}
            title="Close Menu"
            onClick={() => this.toggleMenu(false)}
          />
        </div>
        
        {/* Render the menu items here */}
        {/* ************************** */}
        <div className={styles.menuItems}>
          {menuItems.map(item => {
            return (
              <Link to={item.url} className={styles.menuItem} key={item.url} >
                <h5
                  style={{
                    textAlign: this.props.slideDirection === slideDirection.LEFT ? "right" : "left",
                  }}
                  title={item.text} 
                > 
                  {item.text} 
              </h5>
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
          title="Open Menu"
          onClick={() => this.toggleMenu(!this.state.menuOpen)}
        />        
        {this.renderMenu()}
      </div>
    );
  }

}

export default enhanceWithClickOutside(HamburgerMenu);

// declare all prop types
HamburgerMenu.propTypes = {  
  slideDirection: PropTypes.oneOf([slideDirection.LEFT, slideDirection.RIGHT]).isRequired,
  iconUrl: PropTypes.string.isRequired,
};

// not using default properties -- including this just as a demo to show I'm aware of how a
// component would set some defaults
HamburgerMenu.defaultProps = {
  someValue: null,
};