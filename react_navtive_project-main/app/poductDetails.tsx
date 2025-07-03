import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const poductDetails = () => {
    const {image} = useLocalSearchParams()   
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>


      {/*
      .. add other fields here and modify 
         the code based on your expertise in styling
      .. remove the comment after
      */}




      
      <Image source={{uri: Array.isArray(image) ? image[0] : image}} style={{width:100, height:100, borderRadius:50}}/>
    </View>
  )
}

export default poductDetails

const styles = StyleSheet.create({})