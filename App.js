import React from "react";
import {StatusBar, StyleSheet, SafeAreaView, View, Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import Basket from "./scr/pages/Basket";

import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";

import basket from './scr/mocks/basket'

// SafeAreaView: Prevent to write on status bar for IOS
// StatusBar: Create a padding preventing the application to render on status bar for Android (create above the components)

SplashScreen.preventAutoHideAsync();

export default function App() {
    //Use external font
    const [externalFont] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    })
    if (!externalFont) {
        // Return a loading screen while font is not loaded
        // return <AppLoading/> (DEPRECATED)
        return null;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Basket {...basket}></Basket>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      width: '100%'
  },
});
