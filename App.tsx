import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Home from './screens/Home';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data, error } = useFetch('https://api.spacexdata.com/v3/launches');

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
      <Home />
    </SafeAreaView>
  );
};

export default App;
