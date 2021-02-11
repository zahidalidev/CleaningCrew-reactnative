import React from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';

import Signin from "./App/screens/Signin"
import Signup from './App/screens/Signup';

export default function App() {
  return (
    <>
      {/* <Signin /> */}
      <Signup />
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