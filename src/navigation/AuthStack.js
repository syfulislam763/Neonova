import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screen/auth_screens/WelcomeScreen";
import WelcomeScreenTwo from "../screen/auth_screens/WelcomeScreenTwo";
import WelcomeScreenFinal from "../screen/auth_screens/WelcomeScreenFinal";
import RoleSelectionScreen from "../screen/auth_screens/RoleSelectionScreen";
import LoginScreen from "../screen/auth_screens/LoginScreen";
import CreateAccountScreen from "../screen/auth_screens/CreateAccountScreen";
import ForgotPasswordScreen from "../screen/auth_screens/ForgetPasswordScreen";
import ProvideCodeScreen from "../screen/auth_screens/ProvideCodeScreen";

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

            <Stack.Screen 
                name="RoleSelectionScreen"
                component={RoleSelectionScreen}
            />
            <Stack.Screen 
                name="CreateAccountScreen"
                component={CreateAccountScreen}
            />
            <Stack.Screen 
                name="LoginScreen"
                component={LoginScreen}
            />


            <Stack.Screen 
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
            />

            <Stack.Screen 
                name="ProvideCodeScreen"
                component={ProvideCodeScreen}
            />

        </Stack.Navigator>
    )
}
