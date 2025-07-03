import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    TouchableWithoutFeedback, 
    View, 
    Image 
} from 'react-native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        console.log(password);
    }, [email, password]);

    const handleLogin = () => {
        if (password === "") {
            router.push("/dashboard");
        } else {
            setError("Hey, we are sorry");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' }} // Truncated for brevity
                    style={styles.headerImage}
                    alt="logo"
                />
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue with this app</Text>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login</Text>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <TextInput
                                placeholder='Email'
                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                            />
                            <TextInput
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                                style={styles.input}
                                secureTextEntry
                            />
                            <Text style={styles.errorText}>{error}</Text>
                            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <Text style={styles.subtitle}>or continue with</Text>
                            <View style={styles.socialIcons}>
                                <Image source={{ uri: 'https://img.icons8.com/?size=100&id=17949&format=png&color=000000' }} style={styles.socialIcon} />
                                <Image source={{ uri: 'https://img.icons8.com/?size=100&id=z657ovoGgS2o&format=png&color=000000' }} style={styles.socialIcon} />
                                <Image source={{ uri: 'https://img.icons8.com/?size=100&id=30840&format=png&color=000000' }} style={styles.socialIcon} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </View>
            <Text style={styles.footerText}>
                Already have an account? <Text style={styles.link}>Sign In</Text>
            </Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 20,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 45,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        marginVertical: 10,
    },
    errorText: {
        color: "red",
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "green",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 20,
    },
    link: {
        color: 'blue',
    },
});