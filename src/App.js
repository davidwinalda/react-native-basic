import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash, GetStarted} from './pages';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
