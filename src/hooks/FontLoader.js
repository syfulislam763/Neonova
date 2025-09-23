import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import * as Font from 'expo-font';


const FontLoader = ({children}) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);


    useEffect(() => {

        (
            async function loadFonts () {
                await Font.loadAsync({
                    "Tektur-ExtraBold": require("../../assets/fonts/tektur/Tektur-ExtraBold.ttf"),
                    "Tektur-Medium":require("../../assets/fonts/tektur/Tektur-Medium.ttf"),
                    "Tektur-SemiBold": require("../../assets/fonts/tektur/Tektur-SemiBold.ttf"),
                    "Tektur-Regular": require("../../assets/fonts/tektur/Tektur-Regular.ttf"),

                    "Inter_18pt-Regular":require("../../assets/fonts/inter/Inter_18pt-Regular.ttf"),
                    "Inter_18pt-SemiBold":require("../../assets/fonts/inter/Inter_18pt-SemiBold.ttf"),
                    "Inter_18pt-Medium":require("../../assets/fonts/inter/Inter_18pt-Medium.ttf")

                })
                setFontsLoaded(true);
            }


        )()




    }, [])



    if (!fontsLoaded) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
        );
     }

    return children;


}


export default FontLoader;