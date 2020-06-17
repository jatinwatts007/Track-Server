import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';

const AuthForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{props.headerName}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button
          title={props.buttonlabel}
          onPress={() => {
            props.onSubmit({ email, password });
          }}
        />
      </Spacer>
      {props.errorMessage ? (
        <Text style={styles.error}>{props.errorMessage}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    margin: 10,
  },
  error: {
    margin: 10,
  },
});

export default AuthForm;
