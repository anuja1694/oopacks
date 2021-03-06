import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Alert, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import axios from "axios";


// pending=> border color focused
const baseUrl = "https://reqres.in";

export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };

    const onChangeNameHandler = (name) => {
        setName(name);
    };

    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };


    const onSubmitFormHandler = async (event) => {
        if (!email.trim() || !password.trim()) {
          alert("Password or Email is invalid");
          return;
        }
        setIsLoading(true);
        try {
          const response = await axios.post(`${baseUrl}/api/user`, {
            email,
            password,
          });
          if (response.status === 201) {
            alert(` You have created: ${JSON.stringify(response.data)}`);
            setIsLoading(false);
            setPassword('');
            setEmail('');
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
          alert("An error has occurred");
          setIsLoading(false);
        }
      };


    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 60 }}>
                <Icon name="md-arrow-back-sharp"
                    onPress={() => navigation.navigate('Signin')}
                    size={25} color='white' style={{ marginLeft: 40, marginRight: 100 }} />
                <Text style={styles.text}>Signup</Text>
            </View>
            <View style={styles.subcontainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.text3}>Name</Text>
                    <TextInput style={styles.inputview}
                        placeholder='Name'
                        value={name}
                        autoCapitalize="none"
                        onChangeText={onChangeNameHandler}
                        placeholderTextColor='grey'
                        maxLength={15}></TextInput>
                </View>
                <View style={styles.itemContainer2}>
                    <Text style={styles.text3}>Email</Text>
                    <TextInput style={styles.inputview}
                        placeholder='Email'
                        value={email}
                        placeholderTextColor='grey'
                        keyboardType='email-address'
                        autoCapitalize="none"
                        onChangeText={onChangeEmailHandler}
                        maxLength={25}></TextInput>
                </View>
                <View style={styles.itemContainer3}>
                    <Text style={styles.text3}>Password</Text>
                    <TextInput style={styles.inputview}
                        placeholder='password'
                        placeholderTextColor='grey'
                        value={password}
                        onChangeText={onChangePasswordHandler}
                        maxLength={15} secureTextEntry={true}></TextInput>
                </View>
                <View style={styles.itemContainer4}>
                    <Text style={styles.text3}>Confirm Password</Text>
                    <TextInput style={styles.inputview}
                        placeholder='confirmpassword'
                        placeholderTextColor='grey'
                        value={password}
                        onChangeText={onChangePasswordHandler}
                        maxLength={15} secureTextEntry={true}></TextInput>
                </View>
                <TouchableHighlight
                    style={styles.buttonview}
                    underlayColor='transparent'
                    onPress={onSubmitFormHandler}>
                    <Text style={styles.buttontext}>Signup</Text></TouchableHighlight>
                <View style={{ flexDirection: 'row', marginTop: 80, marginLeft: 140 }}>
                    <Text>You have a account?</Text>
                    <Text style={{ fontWeight: 'bold', color: 'black' }} onPress={() => navigation.navigate('Signin')}>Signin</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 2
    },
    subcontainer: {
        backgroundColor: 'white',
        width: 600,
        height: 900,
        marginTop: 105,
        borderRadius: 100,

    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    itemContainer: {
        width: '60%',
        // padding: 40,
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 10,


    },
    subtext: {
        fontSize: 32,
        fontWeight: 'normal',
        color: 'black',
        marginTop: 30,
        marginRight: 180,
        fontFamily: 'Arial'
    },
    itemContainer2: {
        width: '60%',
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20

    },
    itemContainer3: {
        width: '60%',
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20

    },
    itemContainer4: {
        width: '60%',
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        marginBottom: 10,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20

    },
    text3: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
        fontFamily: 'Arial'
    },
    inputview: {
        marginLeft: 10,
        fontSize: 18,

    },
    buttonview: {
        width: '60%',
        height: 75,
        backgroundColor: 'black',
        marginTop: 30,
        marginLeft: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black'
    },
    buttontext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    data: {
        flexDirection: 'row',
        marginTop: 1,
    }

})