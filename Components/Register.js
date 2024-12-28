import React from 'react'
import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useState } from "react";
import { users } from '../data';
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';
import { useUser } from '../UserContext';

const Register = () => {

    const navigation = useNavigation();
    const { setUser } = useUser();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (name, password) => {

        const user = users.find((user) => { return user.name === name })
        // const id = user.userId;

        if (!user) {
            console.log('User not found');
            return;
        }


        if (password === user.password) {

            setUser(user);

            navigation.navigate("TabNav", {
                id: user.userId,
                name: user.name,
                email: user.email,
                image: user.image,
            });

        } else {

            console.log('Wrong password');
        }

        // if (password === user.password) {
        //     navigation.navigate("TabNav", { id })
        //     return <Profile name={user.name} email={user.email} image={user.image} id={user.userId}/>

        // }

        // else if (user === null || user === undefined) {
        //     console.log('ERROR ME', user)

        // } else if (password !== user.password) {
        //     console.log('wrong password')

        // } else {
        //     return;
        // }


    }

    return (
        <View>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter password"

            />

            <Button title="Login" style={styles.submit} onPress={() => handleLogin(name, password)}>Login</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 380,
        textAlign: 'left',
        alignSelf: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',

        marginLeft: 20
    },
    optionText: {
        fontSize: 16,
    },

    selectedValue: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',

    },

    radiobuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 50,
        alignSelf: 'center'

    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 0
    },
    submit: {
        backgroundColor: 'grey',
        color: 'white'
    }
});

export default Register
