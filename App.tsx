import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Home from './screens/Home';
import useFetch from './hooks/useFetch';
import EventCard from './components/cards/EventCard';
import { IItem } from './@types/item';

const App = () => {
  const { data, error } = useFetch('https://api.spacexdata.com/v3/launches');

  const renderItem: ListRenderItem<IItem> = ({ item }) => (
    <EventCard {...item} />
  );

  if (error) {
    // TODO: error screen
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  if (!data) {
    // TODO: loading screen
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <StatusBar barStyle={'dark-content'} />
      <Home>
        <FlatList data={data} renderItem={renderItem} />
      </Home>
    </SafeAreaView>
  );
};

export default App;
