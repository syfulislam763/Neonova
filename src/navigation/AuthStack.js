import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screen/auth_screens/WelcomeScreen";
import WelcomeScreenTwo from "../screen/auth_screens/WelcomeScreenTwo";
import WelcomeScreenFinal from "../screen/auth_screens/WelcomeScreenFinal";

const Stack = createNativeStackNavigator();

export default function AuthStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
            />

            <Stack.Screen
                name="WelcomeScreenTwo"
                component={WelcomeScreenTwo}
            />

            <Stack.Screen
                name="WelcomeScreenFinal"
                component={WelcomeScreenFinal}
            />
            

        </Stack.Navigator>
    )
}
