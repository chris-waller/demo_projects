// npm imports
import React, { Component } from 'react';

// the Header component
import Header from './Header';

// css imports
import styles from './css/layout.css';

/**
 * This component is responsible for the overall site layout and styling.
 */
class Layout extends Component {
  
  /**
   * Render.
   */
  render() {    
    return (
      <div className={styles.layout}>
          
          {/* the site header */}
          <Header
            lastUpdateTime={this.props.lastUpdateTime} 
            updateError={this.props.updateError}
          />
          
          {/* This needs to be here to render the individual page content */}
          {this.props.children}        

      </div>
    );  
  }

}

export default Layout;