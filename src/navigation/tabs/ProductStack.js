import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductHomeScreen from "../../screen/tab_screens/products/ProductHomeScreen";
import ProductDetailScreen from "../../screen/tab_screens/products/ProductDetailScreen";
import UserProfileScreen from "../../screen/tab_screens/products/UserProfileScreen";
import OrderCard from "../../screen/tab_screens/products/OrderCard";

const Stack = createNativeStackNavigator();

export default function ProductStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >

            <Stack.Screen 
                name="ProductHomeScreen"
                component={ProductHomeScreen}
            />

            <Stack.Screen  
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
            <Stack.Screen  
                name="UserProfileScreen"
                component={UserProfileScreen}
            />

            <Stack.Screen  
                name="OrderCard"
                component={OrderCard}
            />
            

        </Stack.Navigator>
    )
}
