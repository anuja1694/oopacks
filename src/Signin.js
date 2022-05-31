import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth'


// pending=> border color focused


export default function Signin({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signin = () => {
        auth().signInWithEmailAndPassword(email, password).then((res) => {
            console.log("response", res)
            navigation.navigate("Home")
        })
            .catch((error) => {
                console.log("error", error)
                Alert.alert(error.message)
            })

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>OOPACKS</Text>
            <View style={styles.subcontainer}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subtext}>Login</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text3}>Email</Text>
                    <TextInput style={styles.inputview}
                        placeholder='userid'
                        value={email}
                        placeholderTextColor='grey'
                        maxLength={25}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        keyboardType='email-address'
                    ></TextInput>

                </View>


                <View style={styles.itemContainer2}>
                    <Text style={styles.text3}>Password</Text>
                    <TextInput style={styles.inputview}
                        placeholder='Password'
                        value={password}
                        placeholderTextColor='grey'
                        autoCapitalize="none"
                        maxLength={15} secureTextEntry={true}
                        onChangeText={setPassword}
                    ></TextInput>

                </View>

                <TouchableHighlight
                    style={styles.buttonview}
                    underlayColor='transparent'
                    onPress={Signin}>
                    <Text style={styles.buttontext}>Login</Text></TouchableHighlight>
                <View style={{ flexDirection: 'row', marginTop: 160, marginLeft: 140 }}>
                    <Text>Don't have an account?</Text>
                    <Text style={{fontWeight:'bold', color:'black'}} onPress={() => navigation.navigate('Signup')}>Signup</Text>
                </View>
            </View>

        </View >
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
        marginLeft: 150,
        marginTop: 100
    },
    itemContainer: {
        width: '60%',
        // padding: 40,
        height: 70,
        backgroundColor: 'eeeeee',
        elevation: 2,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 20,
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
        marginTop: 20,
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
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10
    }

})