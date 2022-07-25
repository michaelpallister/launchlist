import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppProvider } from './context/AppContext';
import Container from './screens/Container';
import Header from './components/header/Header';
import Events from './components/events/Events';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={{ backgroundColor: '#fff' }}>
        <StatusBar barStyle={'dark-content'} />
        <Container>
          <Header />
          <Events />
        </Container>
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
