import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screen/tab_screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >

            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
            />
            

        </Stack.Navigator>
    )
}
