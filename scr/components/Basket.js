import React from "react";
import {Image, StyleSheet, Dimensions, Text, View} from "react-native";

// Import images
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

// Get screen dimensions
const screen = Dimensions.get('screen')
const width = screen.width;
const height = screen.height;

export default function Basket() {
    return <>
        <Image source={topo} style={styles.backgroundImage}/>
        <Text style={styles.title}>Basket details</Text>
        <View style={styles.detailCard}>
            <Text style={styles.detailCardTitle}>Vegetables basket</Text>
            <View style={styles.farmResume}>
                <Image source={logo} style={styles.detailCardImage}/>
                <Text style={styles.detailCardFarmName}>Jack and Daniels Farm</Text>
            </View>
            <Text style={styles.detailCardDescription}>A basket with selected vegetables from a family farm on your region</Text>
            <Text style={styles.detailCardPrice}>$ 40.00</Text>
        </View>
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
        lineHeight: 36,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        paddingTop: 18,
        fontFamily: 'MontserratBold'
    },
    detailCard: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    detailCardTitle: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farmResume: {
        flexDirection: "row",
        paddingVertical: 12
    },
    detailCardImage: {
        width:32,
        height: 32
    },
    detailCardFarmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    detailCardDescription: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    detailCardPrice: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 42,
        marginTop: 8
    }
});
