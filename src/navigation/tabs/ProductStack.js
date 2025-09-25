import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductHomeScreen from "../../screen/tab_screens/products/ProductHomeScreen";

const Stack = createNativeStackNavigator();

export default function ProductStack () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:true
            }}
        >

            <Stack.Screen 
                name="ProductHomeScreen"
                component={ProductHomeScreen}
            />
            

        </Stack.Navigator>
    )
}
