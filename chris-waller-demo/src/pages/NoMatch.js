import React, {Component} from 'react';
import { Icon} from 'semantic-ui-react';

import Layout from '../components/Layout';

class NoMatch extends Component {
  render() {
    return (
      <Layout 
        lastUpdateTime={this.props.lastUpdateTime}
        updateError={this.props.updateError}
      >
      <p>PAGE NOT FOUND. YOU SHOULDN'T BE HERE.</p>    
    </Layout>
    );
  }
}

export default NoMatch;