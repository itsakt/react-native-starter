import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './Screens/HomeScreen';
import { AboutScreen } from './Screens/AboutScreen';

import { RootStackParamList } from './App.Types.ts';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <RootStack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ text: 'Hello' }}
      />
    </RootStack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
