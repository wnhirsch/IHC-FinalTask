import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { signUp, login } from '../store/auth/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Login(props) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const { /* signUp, */ signIn } = props;

  signIn('teste@teste.com', '123456');
  return (
    <View style={styles.container} />
  );
}

const mapStateToProps = (state) => {
  const { loading, error } = state.auth;
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (username, password) => dispatch(signUp(username, password)),
  signIn: (username, password) => dispatch(login(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
};
