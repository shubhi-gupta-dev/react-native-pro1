import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      <LoginScreen />
    </View>
  )
}


export default App;
