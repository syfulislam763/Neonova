import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {Home, KeyboardMusic, SquarePlay, Users} from 'lucide-react-native'
import HomeStack from "./tabs/HomeStack";
import ProductStack from "./tabs/ProductStack";
import ProfileStack from "./tabs/ProfileStack";
import VideoStack from "./tabs/VideoStack";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
   return (
    <Tab.Navigator
        screenOptions={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            const hiddenRoutes = ["ProductDetailScreen", "ProfileScreen", "FullProfileScreen", "EditProfileScreen", "MyTrainingSessionScreen", "SubscriptionScreen", "PrivacyPolicyScreen", "MessagingScreen", "ChatConversationScreen", "CreatePostScreen", "UserProfileScreen", "OrderCard"];
            const shouldHideTabBar = hiddenRoutes.includes(routeName);

            return {
                headerShown: false,
                tabBarShowLabel: false,
                
                tabBarStyle: shouldHideTabBar?{display:'none'}:{
                    paddingTop: 20,
                    height: 100,
                    backgroundColor: '#0f1c25',
                    borderTopEndRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopColor:'#000'
                },
                tabBarIcon: ({ color, size, focused }) => {
                
                    const backgroundStyle = {
                        padding: 12,
                        borderRadius: 50,
                        backgroundColor: focused ? "#a3e636" : "#060f15"
                    };
                    
                    const iconColor = focused ? "#000000" : "#9ca3af";
                    
                    let IconComponent;
                    
                    switch (route.name) {
                        case "HomeStack":
                            IconComponent = Home;
                            break;
                        case "ProductStack":
                            IconComponent = KeyboardMusic;
                            break;
                        case "VideoStack":
                            IconComponent = SquarePlay;
                            break;
                        case "ProfileStack":
                            IconComponent = Users;
                            break;
                        default:
                            IconComponent = Home;
                    }

                    return (
                        <View style={backgroundStyle}>
                            <IconComponent color={iconColor} size={24} />
                        </View>
                    );
                }
            }
            
        }}
    >
        <Tab.Screen 
            name="HomeStack"
            component={HomeStack}
        />
        <Tab.Screen 
            name="ProductStack"
            component={ProductStack}
        />
        <Tab.Screen 
            name="VideoStack"
            component={VideoStack}
        />
        <Tab.Screen 
            name="ProfileStack"
            component={ProfileStack}
        />
        
    </Tab.Navigator>
  );
}