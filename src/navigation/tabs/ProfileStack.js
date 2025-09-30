import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "../../screen/tab_screens/profile/ProfileHomeScreen";
import CreatePostScreen from "../../screen/tab_screens/profile/CreatePostScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >


            <Stack.Screen 
                name="ProfileHomeScreen"
                component={ProfileHomeScreen}
            />
            <Stack.Screen 
                name="CreatePostScreen"
                component={CreatePostScreen}
            />

        </Stack.Navigator>
    )
}
