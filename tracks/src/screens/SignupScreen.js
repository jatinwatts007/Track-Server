import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as authContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(authContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerName="Sign Up for Tracker"
        buttonlabel="Sign up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? click to go on Sign in Page"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
    marginTop: 100,
  },
});

export default SignupScreen;
