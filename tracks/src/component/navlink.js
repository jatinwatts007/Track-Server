import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <>
      <TouchableOpacity on onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    margin: 10,
  },
});

export default withNavigation(NavLink);
