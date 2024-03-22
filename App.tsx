import React from 'react';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId: '447170978537-dihv7qp4vg5npscro4vj7pif7g5t3bj8.apps.googleusercontent.com',
});

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
