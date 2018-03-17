import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  twoButtons: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'blue',
    borderColor: 'blue',
    width: '49%',
    height: 20,
    flexDirection: 'column',
  },
  textLogOut: {
    textAlign: 'center',
    color: 'white',
  },
  label: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'stretch',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  input: {
    flexDirection: 'row',
    borderRadius: 5,
    height: 65,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  heightInput: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
  },
  img: {
    width: 50,
    height: 50,
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      url: '',
    };
  }

  componentWillMount() {
    const { userInfo } = this.props.loginReducer;
    const { name, email, picture } = userInfo;
    const { data } = picture;
    const { url } = data;
    this.setState({
      name,
      email,
      url,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home page</Text>
        <Image 
          source={{uri: this.state.url}}
          style={styles.img}
        />
        <Text style={styles.label}>Ime i prezime:</Text>
        <View style={styles.input}>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.heightInput}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            disableFullscreenUI
          />
        </View>
        <Text style={styles.label}>E-mail:</Text>
        <View style={styles.input}>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.heightInput}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            disableFullscreenUI
          />
        </View>
        <View style={styles.twoButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.saveChanges(this.state.name, this.state.email);
            }}
          >
            <Text style={styles.textLogOut}>Save changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.logOutAction();
            }}
          >
            <Text style={styles.textLogOut}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View>
          {
            this.props.localStorage.saved ?
              <Text>Snimljeno</Text>
            :
            null
          }
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(({ loginReducer, localStorage }) => ({
  loginReducer,
  localStorage,
}), mapDispatchToProps)(Home);