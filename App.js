import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Foundation } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from "./App/config/colors"
import Signin from "./App/screens/Signin"
import Signup from './App/screens/Signup';
import Home from './App/screens/Home';
import OrderDetail from './App/screens/OrderDetail';
import Cart from './App/screens/Cart';
import CheckOut from './App/screens/CheckOut';
import Profile from './App/screens/Profile';
import Settings from './App/screens/Settings';
import History from './App/screens/History';
import AppDrawer from './App/components/AppDrawer';

LogBox.ignoreAllLogs()

const Stack = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {

  // function HomeTabs() {
  //   return (
  //     <Tab.Navigator initialRouteName="Home" tabBarOptions={{
  //       style: { height: 70 },
  //       labelStyle: { fontSize: RFPercentage(1.8), fontWeight: '500', marginBottom: RFPercentage(1.5) },
  //       activeTintColor: '#acdee0', inactiveTintColor: '#C3C3C3', tabStyle: { backgroundColor: "black", fontSize: 40 }
  //     }} >
  //       <Tab.Screen
  //         name="Home"
  //         component={Home}
  //         options={{
  //           tabBarLabel: 'Home',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialCommunityIcons
  //               style={{ marginTop: 13 }}
  //               name="home"
  //               color={color}
  //               size={size + 2}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Orders"
  //         component={History}
  //         options={{
  //           tabBarLabel: 'Orders',
  //           tabBarIcon: ({ color, size }) => (
  //             <Foundation
  //               style={{ marginTop: 13 }}
  //               name="clipboard-notes"
  //               color={color}
  //               size={size + 2}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{
  //           tabBarLabel: 'Profile',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialIcons
  //               style={{ marginTop: 13 }}
  //               name="account-circle"
  //               color={color}
  //               size={size + 2}
  //             />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Settings"
  //         component={Settings}
  //         options={{
  //           tabBarLabel: 'Settings',
  //           tabBarIcon: ({ color, size }) => (
  //             <MaterialIcons
  //               style={{ marginTop: 13 }}
  //               name="settings"
  //               color={color}
  //               size={size + 2}
  //             />
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }

  return (
    <>
      <NavigationContainer >

        <Stack.Navigator initialRouteName="Home"
          drawerType={"front"}
          overlayColor="transparent"
          edgeWidth={100}
          drawerStyle={{
            backgroundColor: colors.white,
            width: "55%"
          }}
          drawerContent={(props) => <AppDrawer {...props} />}
        >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Orders" component={History} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Home} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="CheckOut" component={CheckOut} />
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
