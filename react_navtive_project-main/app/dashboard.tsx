import React from 'react';
import { ScrollView, Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const Dashboard = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userInfo}>
                        <Text style={styles.greeting}>Good Morning, Alvine</Text>
                        <TextInput
                            placeholder="Search here..."
                            style={styles.searchBar}
                        />
                        <Text style={styles.name}>Alvine</Text>
                    </View>
                </View>

                <View style={styles.location}>
                    <Text style={styles.locationTitle}>Festival Dances of Japan</Text>
                    <Text>Toyko</Text>
                    <Text>16km</Text>
                </View>

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
    locationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
});

export default Dashboard;