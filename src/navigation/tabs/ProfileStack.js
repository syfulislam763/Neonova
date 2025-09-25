import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileHomeScreen from "../../screen/tab_screens/profile/ProfileHomeScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:true
            }}
        >


            <Stack.Screen 
                name="ProfileHomeScreen"
                component={ProfileHomeScreen}
            />
            

        </Stack.Navigator>
    )
}
