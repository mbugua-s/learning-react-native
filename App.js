import React from "react"
import {View, Image, Dimensions, Text, ImageBackground} from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImage from "./app/screens/ViewImage";

export default function App() {
    const { width, height } = Dimensions.get("window")
    // console.log(width)
  return (
      <ViewImage />
    //   <WelcomeScreen />
  )
}