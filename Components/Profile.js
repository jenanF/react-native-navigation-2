import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useUser } from '../UserContext'
import { useNavigation } from '@react-navigation/native'
import * as imagePicker from 'expo-image-picker'
import icon from '../assets/icon.png'

const Profile = () => {

    const navigation = useNavigation();


    const { user } = useUser();
    const { setUser } = useUser();
    const [image, setImage] = useState(null);

    const uploadImage = async () => {
        await imagePicker.requestMediaLibraryPermissionsAsync();

        const result = await imagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });

        setImage(result.uri);
        console.log(result.uri);
        console.log(result.assets);

        // if (!result.canceled) {
        //     setImage(result.uri);  // Set the URI of the selected image
        // }
    }

    const handleLogout = () => {

        setUser(null);

        navigation.navigate('Register');

    }

    const goToEditProfile = () => {
        navigation.navigate('Edit');
    }



    if (!user) {
        return <Text>User not logged in</Text>;
    }

    return (
        <View>
            <Image source={image ? { uri: image } : icon} style={styles.image}></Image>
            <Button color='blue' title='Upload Image' onPress={uploadImage} />
            <Text>Name: {user.name}</Text>
            <Text>Email: {user.email}</Text>

            <Button color='grey' title='Edit Profile' onPress={goToEditProfile} />

            <Button color='red' title='Logout' onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        borderRadius: 75,
    }
})

export default Profile
