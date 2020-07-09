import '../_mockLocation';
import { Context as locationContext } from '../context/locationContext';
import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import useLocation from '../hooks/useLocation';
import Map from '../components/map';
import TrackForm from '../components/trackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(locationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording],
  );
  const [err] = useLocation(isFocused, callback);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  size: {
    fontSize: 25,
  },
});

export default withNavigationFocus(TrackCreateScreen);
