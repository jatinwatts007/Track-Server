import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';
import { Context } from '../context/authContext';

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerName="Sign In To Your Account"
        buttonlabel="Sign in"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        text="Donot have an account? click to go on Sign up"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
