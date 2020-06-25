import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 12; i++) {
    points.push({
      latitude: 27.0238 + i * 0.001,
      longitude: 74.2179 + i * 0.002,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 27.0238,
        longitude: 74.2179,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
