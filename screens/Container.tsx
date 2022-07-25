import React, { FC, PropsWithChildren } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { useAppContext } from '../context/AppContext';

const Container: FC<PropsWithChildren> = ({ children }) => {
  const { data, error } = useAppContext();
  if (error) {
    // TODO: error screen
    return (
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  if (!data) {
    // TODO: loading screen
    return (
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return <View style={globalStyles.container}>{children}</View>;
};

export default Container;
