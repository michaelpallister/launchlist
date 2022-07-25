import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global';

const Home: FC<PropsWithChildren> = ({ children }) => {
  return <View style={globalStyles.container}>{children}</View>;
};

export default Home;
