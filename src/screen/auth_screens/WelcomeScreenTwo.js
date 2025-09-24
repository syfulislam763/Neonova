import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import FitnessCarousel from './FitnessCarousel';

const { width, height } = Dimensions.get('window');

const bg2 = require("../../../assets/img/bg2.png")
const img_carousel = require("../../../assets/img/img_carousel.png")

const WelcomeScreenTwo = () => {


  const navigation = useNavigation()



  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={bg2}
        className="flex-1 justify-between"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-white/5" />
        
          <SafeAreaView className="flex-1">

            <FitnessCarousel/>
   
            <View className="flex-1 justify-end px-4 pb-7">
                <View className="flex-row mb-5 ">
                    <View className="w-8 h-3 bg-[#a3e636] rounded-full" />
                    <View className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
                    <View className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
                </View>
            {/* Main text */}
                <View className="mb-6">
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                        Transform Your Body,
                    </Text>
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                        Elevate Your <Text className="text-[#a3e636] text-4xl font-bold leading-tight font-tektur-semibold">
                        Life
                    </Text>
                    </Text>
                    
                </View>

    
                <Text className="text-gray-400 text-base leading-relaxed mb-8 font-inter-medium">
                    There are many variations of passages of Lorem{'\n'}Ipsum available, but the majority...
                </Text>

                <TouchableOpacity
                    className="bg-[#a3e636] py-4 rounded-2xl mb-6"
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("WelcomeScreenFinal")}
                >
                    <Text className="text-black text-lg font-semibold text-center font-tektur-semibold">
                        Next
                    </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreenTwo;