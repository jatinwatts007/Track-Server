import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as trackContext } from '../context/trackContext';
import { ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../navigationRef';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(trackContext);
  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.text}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
TrackListScreen.navigationOptions = {
  title: 'Tracks',
};
export default TrackListScreen;
