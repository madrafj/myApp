import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './tabs/login';
import Register from './tabs/register';
import { Home, Kontak } from './tabs/dummyView'
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{tabBarActiveTintColor: '#9d0'}}
      >
        <Tab.Screen
          name="Home" component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} /> 
            )
          }} />
        <Tab.Screen
          name="Login" component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} /> 
            )
          }} />
        <Tab.Screen
          name="Register" component={Register}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} /> 
            )
          }} />
        <Tab.Screen
          name="Kontak" component={Kontak}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="contacts" color={color} size={size} /> 
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

