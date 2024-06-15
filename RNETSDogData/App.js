import 'react-native-gesture-handler';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import queryClient from './src/queryClient';
import BreedsScreen from './src/screens/BreedsScreen';
import FactsScreen from './src/screens/FactsScreen';
import GroupsScreen from './src/screens/GroupsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Breeds" component={BreedsScreen} />
          <Tab.Screen name="Facts" component={FactsScreen} />
          <Tab.Screen name="Groups" component={GroupsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
