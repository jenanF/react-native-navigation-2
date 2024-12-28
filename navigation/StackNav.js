import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home';
import EditProfile from '../Components/EditProfile';
import Register from '../Components/Register';
import MainNavigation from './MainNavigation';
import Profile from '../Components/Profile';

const Stack = createStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen name="Register" component={Register}
                options={({ navigation }) => ({
                    headerLeft: () => null,
                    gestureEnabled: false
                })} />

            <Stack.Screen options={{ headerShown: false }} name="TabNav" component={MainNavigation} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Edit" component={EditProfile} />
        </Stack.Navigator>
    )
}

export default StackNav