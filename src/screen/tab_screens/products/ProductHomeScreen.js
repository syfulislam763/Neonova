import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductsHeaderScreen from './ProductsHeaderScreen';
import ProductCardGrid from './ProductCardGrid';
const ProductHomeScreen = () => {
    return (
       <SafeAreaView className="flex-1 px-5 bg-[#060f15]">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
                <ProductsHeaderScreen/>
                <ProductCardGrid/>
            </ScrollView>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({})

export default ProductHomeScreen;
