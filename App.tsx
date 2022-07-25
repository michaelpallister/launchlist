import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: '#fff' }}>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
