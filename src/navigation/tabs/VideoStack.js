import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VideoHomeScreen from "../../screen/tab_screens/video/VideoHomeScreen";

const Stack = createNativeStackNavigator();

export default function VideoStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:true
            }}
        >


            <Stack.Screen 
                name="VideoHomeScreen"
                component={VideoHomeScreen}
            />
            

        </Stack.Navigator>
    )
}
