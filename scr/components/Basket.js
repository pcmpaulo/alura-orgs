import React from "react";
import {Image, StyleSheet, Dimensions, Text} from "react-native";

// Import images
import topo from '../../assets/topo.png';

// Get screen dimensions
const screen = Dimensions.get('screen')
const width = screen.width;
const height = screen.height;

export default function Basket() {
    return <>
        <Image source={topo} style={styles.backgroundImage}/>
        <Text style={styles.title}>Basket details</Text>
    </>
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 578 / 768 * width
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 36,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        paddingTop: 18
    }
});
