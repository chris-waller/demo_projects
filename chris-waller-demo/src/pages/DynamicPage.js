import React, {Component} from 'react';
import { Header } from 'semantic-ui-react';

import Layout from '../components/Layout';

class DynamicPage extends Component {
  render() {
    return (
      <Layout 
        lastUpdateTime={this.props.lastUpdateTime}
        updateError={this.props.updateError}
      >
        <Header as="h2">Dynamic Page</Header>
        <p>This page was loaded asynchronously!!!</p>
      </Layout>    
    );
  }
}

export default DynamicPage;