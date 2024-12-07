import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorSelectionScreen from './screens/ColorSelectionScreen';
import ObjectSelectionScreen from './screens/ObjectSelectionScreen';
import PlayerListScreen from './screens/PlayerListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ColorSelection">
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} />
        <Stack.Screen name="ObjectSelection" component={ObjectSelectionScreen} />
        <Stack.Screen name="PlayerSelection" component={PlayerListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
