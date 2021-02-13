import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

import colors from "./App/config/colors"
import Signin from "./App/screens/Signin"
import Signup from './App/screens/Signup';
import Home from './App/screens/Home';
import OrderDetail from './App/screens/OrderDetail';

LogBox.ignoreAllLogs()
const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function HomeTabs() {
    return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        style: { height: 75, fontSize: 40 },
        labelStyle: { fontSize: 14, fontWeight: '500', marginBottom: 14 },
        activeTintColor: colors.primary, inactiveTintColor: '#C3C3C3', tabStyle: { backgroundColor: "white", fontSize: 40 }
      }} >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 13 }}
                name="home"
                color={color}
                size={size + 10}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={Home}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: 13 }}
                name="history"
                color={color}
                size={size + 4}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                style={{ marginTop: 13 }}
                name="account-circle"
                color={color}
                size={size + 4}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator drawerStyle={{ width: "0%" }} initialRouteName="OrderDetail" >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});