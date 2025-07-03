import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { router } from 'expo-router';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const handleChange = (name: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (formData.terms) {
            // Handle form submission
            console.log(formData);
            router.push('/dashboard'); // Navigate to the dashboard after successful registration
        } else {
            alert('You must agree to the terms and conditions.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' }} // Truncated for brevity
                    style={styles.headerImage}
                    alt="logo"
                />
                <Text style={styles.title}>Sign in to Service HITM</Text>
                <Text style={styles.subtitle}>Please Create Your Account</Text>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.logo}>Logo</Text>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Please create your account</Text>

                <Text style={styles.label}>Enter Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={formData.name}
                    onChangeText={(text) => handleChange('name', text)}
                />

                <Text style={styles.label}>Enter Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                />

                <Text style={styles.label}>Enter Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                />

                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={formData.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity onPress={() => setFormData({ ...formData, terms: !formData.terms })}>
                        <Text style={formData.terms ? styles.checkedCheckbox : styles.checkbox}>☐</Text>
                    </TouchableOpacity>
                    <Text>I agree to the terms & conditions</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already have an account? <Text style={styles.link}>Sign In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    formContainer: {
        padding: 24,
        flexGrow: 1,
    },
    logo: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        fontSize: 20,
        marginRight: 10,
    },
    checkedCheckbox: {
        fontSize: 20,
        marginRight: 10,
        color: 'blue',
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
    },
    link: {
        color: 'blue',
    },
});

export default RegistrationForm;