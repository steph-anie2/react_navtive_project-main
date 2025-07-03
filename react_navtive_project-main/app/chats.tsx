import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

const chats = () => {
    const {name, profileImage, message,time} = useLocalSearchParams();
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* 
      1. make this screen like whatsapp messaging with top bar middle and buttom container
      2. dont modify the image link use it like that 
      3. dont use inline styling; all styles should be in the style object 
       */}
      
      <Image source={{uri: Array.isArray(profileImage) ? profileImage[0] : profileImage}} style={{width:100, height:100, borderRadius:50}}/>
      
    </View>
  )
}

export default chats

const styles = StyleSheet.create({})