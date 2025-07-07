import React from 'react';
import { ScrollView, Text, TextInput, View, Image, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const image={
    uri:'data:image/jpeg;base64,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'
}


const Dashboard = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <Text style={styles.greeting}>Good Morning, Alvine</Text>
                         <Text style={styles.name}>Alvine</Text>
                        <TextInput
                            placeholder="Search here..."
                            style={styles.searchBar}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.location}>
                    <view style={styles.container1}>
                     <view style={styles.container11}></view>
                     <ImageBackground source={image} resizeMode='cover' style={styles.imagepi} />
                    <Text style={styles.Title}>Advanced React Native</Text>
                    <Text style={styles.subTitle}>By mark Johnson</Text>
                     <view style={styles.container12}>

                     </view>
                    </view>
                   <view style={styles.container2}>
                     <view style={styles.container21}></view>
                    <Text style={styles.locationTitle}>Festival Dances of Japan</Text>
                    <Text>Tokyo</Text>
                    <Text>16km</Text>
                     <view style={styles.container22}>
                     <ImageBackground source={image} resizeMode='cover' style={styles.imagepi} />
                     <Text style={styles.steph}> Festival beginnings in Tokyo</Text>
                     </view>
                    </view>
                </TouchableOpacity>

                <View style={styles.experiences}>
                    <TouchableOpacity style={styles.experience}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=99264&format=png&color=000000' }} 
                            style={styles.icon} 
                        />
                        <Text>Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.experience}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=mw0nuWDpzoyZ&format=png&color=000000' }} 
                            style={styles.icon} 
                        />
                        <Text>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.experience}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=7787&format=png&color=000000' }} 
                            style={styles.icon} 
                        />
                        <Text>Medication</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.footerItem}>Home</Text>
                    <Text style={styles.footerItem}>Search</Text>
                    <View style={styles.container5}>
                    <Image source={{ uri:'https://img.icons8.com/?size=100&id=21097&format=png&color=000000'}} style={styles.button}></Image>
                    </View>
                    <Text style={styles.footerItem}>Book</Text>
                    <Text style={styles.footerItem}>Account</Text>
                </TouchableOpacity>
        
            </ScrollView>
        </View>
      
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f2f2f2',
        flexGrow: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#4a90e2',
        borderRadius: 10,
        marginBottom: 20,
    },
    userInfo: {
        alignItems: 'center',
    },
    greeting: {
        color: 'white',
        fontSize: 20,
    },
    name:{
color:'black',
fontSize: 20,
    },
    searchBar: {
        width: '90%',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#4a90e2',
        color: 'white',
    },
    location: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    container1:{
flex:1,
 backgroundColor: "black",
  flexDirection: "row",
    gap:10,
    borderRadius:10
    },
    container11:{
flex:1,
 flexDirection: "row",
    gap:10,
    borderRadius:10

    },
    container12:{
flex:1,
justifyContent:"center"
    },
    imagepi:{
flex:1,
justifyContent:"center"
    },
   
    container2:{
flex:1,
 backgroundColor: "black",
  flexDirection: "row",
    gap:10,
    borderRadius:10
    },
container21:{
flex:1,
 flexDirection: "row",
    gap:10,
    borderRadius:10
},
container22:{
flex:1,
justifyContent:"center"
},
steph:{
color:"black",
},
    locationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    Title:{
color:"Black",
fontSize:25,

    },
    subTitle:{

    },
    experiences: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
    experience: {
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
    },
    footerItem: {
        fontWeight: 'bold',
        color: '#4a90e2',
    },
    container5:{
flex: 1,

    },
    button:{

    },
});

export default Dashboard;