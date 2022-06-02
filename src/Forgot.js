import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";


// pending=> border color focused
const baseUrl = "https://reqres.in";

export default function Forgot({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeEmailHandler = (email) => {
        setEmail(email);
    };

    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };

    const onSubmitFormHandler = (event) => {
        if (!email.trim() || !password.trim()) {
          alert("Name or Email is invalid");
          return;
        }
        setIsLoading(true);
    
        const configurationObject = {
          url: `${baseUrl}/api/users/4`,
          method: "PUT",
          data: { email, password },
        };
    
        axios(configurationObject)
          .then((response) => {
            if (response.status === 200) {
              alert(` You have updated: ${JSON.stringify(response.data)}`);
              setIsLoading(false);
              setFullName("");
              setEmail("");
            } else {
              throw new Error("An error has occurred");
            }
          })
          .catch((error) => {
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>OOPACKS</Text>
            <View style={styles.subcontainer}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.subtext}>Reset Password</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text3}>Email</Text>
                    <TextInput style={styles.inputview}
                        placeholder='userid'
                        value={email}
                        placeholderTextColor='grey'
                        maxLength={25}
                        autoCapitalize="none"
                        onChangeText={onChangeEmailHandler}
                        keyboardType='email-address'
                    ></TextInput>

                </View>
                <View style={styles.itemContainer2}>
                    <Text style={styles.text3}>Password</Text>
                    <TextInput style={styles.inputview}
                        placeholder='userid'
                        placeholderTextColor='grey'
                        value={password}
                        onChangeText={onChangePasswordHandler}
                        maxLength={15} secureTextEntry={true}></TextInput>
                </View>

                <TouchableHighlight
                    style={styles.buttonview}
                    underlayColor='transparent'
                    onPress={onSubmitFormHandler}>
                    <Text style={styles.buttontext}>Reset</Text></TouchableHighlight>
                <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 180 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }} onPress={() => navigation.navigate('Signin')}>Signin</Text>
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