import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screen/tab_screens/home/HomeScreen";

import ProfileScreen from "../../screen/tab_screens/home/user_profile/ProfileScreen";
import FullProfileScreen from "../../screen/tab_screens/home/user_profile/FullProfileScreen";
import EditProfileScreen from "../../screen/tab_screens/home/user_profile/EditProfileScreen";
import MyTrainingSessionScreen from "../../screen/tab_screens/home/user_profile/MyTrainingSessionScreen";
import SubscriptionScreen from "../../screen/tab_screens/home/user_profile/SubscriptionScreen";
import PrivacyPolicyScreen from "../../screen/tab_screens/home/user_profile/PrivacyPolicyScreen";
import MessagingScreen from "../../screen/tab_screens/home/user_profile/MessagingScreen";
import ChatConversationScreen from "../../screen/tab_screens/home/user_profile/ChatConversationScreen";

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
            <Stack.Screen 
                name="ProfileScreen"
                component={ProfileScreen}
            />
            <Stack.Screen 
                name="FullProfileScreen"
                component={FullProfileScreen}
            />
            <Stack.Screen 
                name="EditProfileScreen"
                component={EditProfileScreen}
            />

            <Stack.Screen 
                name="MyTrainingSessionScreen"
                component={MyTrainingSessionScreen}
            />

            <Stack.Screen 
                name="SubscriptionScreen"
                component={SubscriptionScreen}
            />

            <Stack.Screen 
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
            />
            <Stack.Screen 
                name="MessagingScreen"
                component={MessagingScreen}
            />
            <Stack.Screen 
                name="ChatConversationScreen"
                component={ChatConversationScreen}
            />

        </Stack.Navigator>
    )
}
