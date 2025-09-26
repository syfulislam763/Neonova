import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderComponent from './HeaderComponent';
import TabbedFitnessComponent from './TabbedFitnessComponent';
import SuggestedTrainingComponent from './SuggestedTrainingComponent';
import SearchedProductsComponent from './SearchedProductsComponent';

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 px-5 bg-[#060f15]">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

            
                <HeaderComponent/>
                
                <View>
                    <Image
                        source={require("../../../../assets/img/banner.png")}
                        className="w-full h-52"
                        resizeMode='contain'
                    />
                </View>

                <TabbedFitnessComponent/>

                <SuggestedTrainingComponent/>

                <SearchedProductsComponent/>
            
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
