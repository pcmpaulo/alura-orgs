import React from "react";
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Basket from "./scr/components/Basket";

// SafeAreaView: Prevent to write on status bar for IOS
// StatusBar: Create a padding preventing the application to render on status bar for Android (create above the components)

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Basket></Basket>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      width: '100%'
  },
});
