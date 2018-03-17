import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager
} = FBSDK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Login extends React.Component {
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.props.loginAction(result, true)
    }
  }

  render() {
    return(
    <View style={styles.container}>
      <Text>Test Stefan Bakmaz</Text>
      <LoginButton
        readPermissions={["email", "user_friends", "public_profile"]} 
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  const infoRequest = new GraphRequest(
                    '/me?fields=name,email,picture',
                    null,
                    this._responseInfoCallback
                  );
                  // Start the graph request.
                  new GraphRequestManager().addRequest(infoRequest).start();
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
    </View>
    )
  }  

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(({ loginReducer }) => ({
  loginReducer,
}), mapDispatchToProps)(Login);