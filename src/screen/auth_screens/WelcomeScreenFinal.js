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

const { width, height } = Dimensions.get('window');

const bg3 = require("../../../assets/img/bg3.png");
const workout = require("../../../assets/img/workout.png")

const WelcomeScreenTwo = () => {


  const navigation = useNavigation()



  return (
    <View className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      <ImageBackground
        source={bg3}
        className="flex-1 justify-between"
        resizeMode="cover"
      >
  
        
          <SafeAreaView className="flex-1">
   
            <View className="flex-1 justify-end px-4 pb-7">
                <View className="flex-row mb-5 ">
                    <View className="w-3 h-3 bg-gray-500 rounded-full" />
                    <View className="w-3 h-3 bg-gray-500 rounded-full ml-2" />
                    <View className="w-8 h-3 bg-[#a3e636] rounded-full ml-2" />
                </View>
            {/* Main text */}
                <View className="mb-20 relative">
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                        Your Personal Trainer
                    </Text>
                    <Text className="text-white text-4xl font-bold leading-tight font-tektur-semibold">
                        Anytime, Anywhere
                    </Text>
                    

                    <Image
                        source={workout}
                        className="w-52 h-52 absolute top-3 left-5"
                        resizeMode='contain'
                    />
                    

                </View>

    
                <Text className="text-gray-400 text-base leading-relaxed mb-8 font-inter-medium">
                    There are many variations of passages of Lorem{'\n'}Ipsum available, but the majority...
                </Text>

                <TouchableOpacity
                    className="bg-[#a3e636] py-4 rounded-2xl mb-6"
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("RoleSelectionScreen")}
                >
                    <Text className="text-black text-lg font-semibold text-center font-tektur-semibold">
                        Launch
                    </Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreenTwo;