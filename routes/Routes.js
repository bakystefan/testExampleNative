import React from 'react';
import { View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import Master from '../components/Master';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Switch>
            <Route exact path="/" component={Master} />
          </Switch>
        </View>
      </ConnectedRouter>
    );
  }
}
