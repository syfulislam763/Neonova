import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const bg1 = require("../../../assets/img/bg1.jpg")

const WelcomeScreen = () => {
  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={bg1}
        className="flex-1 justify-between"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black/60" />
        
        <SafeAreaView className="flex-1">
   
            <View className="flex-1 justify-end px-4 pb-12">
                <View className="flex-row mb-10 ">
                    <View className="w-8 h-3 bg-[#a3e636] rounded-full" />
                    <View className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
                    <View className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
                </View>
            {/* Main text */}
                <View className="mb-6">
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                    No Excuses yourself
                    </Text>
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                    Just Do your best
                    </Text>
                    <Text className="text-[#a3e636] text-4xl font-bold leading-tight font-tektur-semibold">
                    Workout
                    </Text>
                </View>

    
                <Text className="text-gray-400 text-base leading-relaxed mb-8">
                    There are many variations of passages of Lorem{'\n'}Ipsum available, but the majority...
                </Text>

                <TouchableOpacity
                    className="bg-[#a3e636] py-4 rounded-2xl mb-6"
                    activeOpacity={0.8}
                >
                    <Text className="text-black text-lg font-semibold text-center">
                    Get Started
                    </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center items-center">
                    <Text className="text-white text-base">
                    Do you have an account?{' '}
                    </Text>
                    <TouchableOpacity activeOpacity={0.7}>
                    <Text className="text-green-400 text-base font-semibold">
                        Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
      </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;