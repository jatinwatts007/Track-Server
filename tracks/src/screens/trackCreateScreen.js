import '../_mockLocation';
import { Context as locationContext } from '../context/locationContext';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import useLocation from '../hooks/useLocation';
import Map from '../components/map';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(locationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  size: {
    fontSize: 25,
  },
});

export default withNavigationFocus(TrackCreateScreen);
