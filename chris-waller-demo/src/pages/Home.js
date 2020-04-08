// npm imports
import React, { Component } from 'react';

// site layout component
import Layout from '../components/Layout';

/**
 * The web application Home page.
 */
class Home extends Component {

  /**
   * Render.
   */
  render() {    
    return (
      <Layout 
        lastUpdateTime={this.props.lastUpdateTime}
        updateError={this.props.updateError}
      >
        {/* Page content below here */}
        {/* *********************** */}
        <p>This is the HOME page</p>

      </Layout>
    );
  }

}

export default Home;