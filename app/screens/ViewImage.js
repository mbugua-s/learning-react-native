import { View, Text, Image, Dimensions, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

import colours from '../config/colours'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const { width } = Dimensions.get("window")

export default function ViewImage() {
    return (
        <View style={styles.background}>
            <View style={styles.closeButton}></View>
            <View style = {styles.deleteButton}></View>

            <Image
                source={require('../assets/chair.jpg')}
                resizeMode='contain'
                style={styles.itemImage}>
            </Image>            
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        top: 20,
        backgroundColor: colours.black
    },

    itemImage: {
        width: "100%",
        height: "100%"
    },

    closeButton: {
        width: 50,
        height: 50,
        backgroundColor: colours.primary,
        position: "absolute",
        left: 30
    },

    deleteButton: {
        width: 50,
        height: 50,
        backgroundColor: colours.secondary,
        position: "absolute",
        right: 30
    }
})