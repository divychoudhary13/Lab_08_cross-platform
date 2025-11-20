// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

// Wrapper component for Home tab
const HomeStackWrapper = (props) => {
  return <StackNavigator {...props} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // StackNavigator handles its own headers
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = 'home-outline';
          else if (route.name === 'SearchTab') iconName = 'search-outline';
          else if (route.name === 'SettingsTab') iconName = 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackWrapper} // pass wrapper, not inline function
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;