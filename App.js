import React from "react";
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import Basket from "./scr/components/Basket";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat";


// SafeAreaView: Prevent to write on status bar for IOS
// StatusBar: Create a padding preventing the application to render on status bar for Android (create above the components)


export default function App() {
    //Use external font
    const [externalFont] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    })
    if (!externalFont) { // Return empty view if font is not loaded
        return <View></View>
    }
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
