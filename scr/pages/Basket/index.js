import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import HeaderComponent from "./components/Header";

import DetailsComponent from "./components/Details";
import ItemsComponent from "./components/items";

//index is the default object imported for the module Basket
export default function Index({header, details, items}) {
    return <ScrollView>
        <HeaderComponent {...header}/>
        <View style={styles.detailCard}>
            <DetailsComponent {...details}/>
            <ItemsComponent {...items}></ItemsComponent>
        </View>
    </ScrollView>
}
const styles = StyleSheet.create({
    detailCard: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});
