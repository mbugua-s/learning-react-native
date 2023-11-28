import { View, Image, Dimensions, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {

    const { width, height } = Dimensions.get("window")

  return (
    <View style={{
        flex: 1,
        flexDirection: "column",
    }}>
      <View style={{
          flex: 10
      }}>
          
        <ImageBackground 
            style={{
                width: width,
                height: height
            }}
            source={require('../assets/background.jpg')}>
            
            <Text style={{
            //   position: "absolute",
              fontSize: 15,
              top: 150,
              alignSelf: "center"
          }}>Sell What You Don't Need</Text>  
        </ImageBackground>
        <Image 
            style={{
                alignSelf: "center",
                position: "absolute",
                top: 60,
                width: 80,
                height: 80
          }}
              source={require('../assets/logo-red.png')} />
          
      </View>
      
      <View
          style={{
              backgroundColor: "#fc5c65",
              flex: 1
          }}>
      </View>
      <View
          style={{
              backgroundColor: "#4ecdc4",
              flex: 1,
          }}>
      </View>
  </View>
  )
}