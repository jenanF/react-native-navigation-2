import React from 'react'
import { View, Text, Button, Image, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useUser } from '../UserContext'
import { useNavigation } from '@react-navigation/native'


const EditProfile = () => {

    const navigation = useNavigation();

    const { user } = useUser();
    const { setUser } = useUser();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleChangeName = () => {
        setUser({ name: name, email: user.email, image: user.image, userId: user.userId });
        navigation.goBack();

    }

    const handleChangeEmail = () => {
        setUser({ email: email, name: user.name, image: user.image, userId: user.userId });
        navigation.goBack()

    }


    if (!user) {
        return <Text>User not logged in</Text>;
    }

    return (
        <View>
            <Image></Image>
            <View style={styles.group}>

                <TextInput

                    placeholder={user.name}
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />

                <Button color='blue' title='Edit' onPress={handleChangeName} />

            </View>


            <View style={styles.group}>

                <TextInput
                    placeholder={user.email}
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />

                <Button color='blue' title='Edit' onPress={handleChangeEmail} />

            </View>

            <Button color='red' title='Cancel' onPress={() => navigation.goBack()} />
        </View>
    )
}


const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        alignItems: 'center',

        marginLeft: 20
    },

    input: {
        height: 40,
        width: 200,
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
})

export default EditProfile
