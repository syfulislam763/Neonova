import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Lock, Dumbbell, PlayCircle, Flame, Clock, Star, ShoppingCart } from 'lucide-react-native';



const bg_image = require("../../../../assets/img/premium_image.jpg")


const WorkoutDetailScreen = ({modalVisible, setModalVisible}) => {
  const handleBuyPress = () => {
    setModalVisible(true)
  };

  const handleLockPress = () => {
    console.log('Lock icon pressed');
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      
      {/* Background Image with Overlay */}
      <ImageBackground
        source={bg_image}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Dark Overlay */}
        <View 
          className="flex-1"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        >
          {/* Lock Icon */}
          <View className="items-center mt-32 mb-10">
            <TouchableOpacity
              onPress={handleLockPress}
              className="w-16 h-16 bg-white rounded-full items-center justify-center"
              activeOpacity={0.8}
            >
              <Lock color="#000000" size={24} />
            </TouchableOpacity>
          </View>

          {/* Content Container */}
          <View className="flex-1 justify-end">
            {/* Title */}
            <Text className="text-white text-3xl px-7 font-bold mb-4 leading-10">
              Forearm and abdominal{'\n'}strengthening
            </Text>

            {/* Description */}
            <BlurView intensity={10} tint='dark' className="px-7">
                <Text className="text-gray-300 text-base mb-6 leading-6">
                    There are many variations of passages of Lorem Ipsum{'\n'}
                    but the majority have suffered available
                </Text>

                {/* Stats Row 1 */}
                <View className="flex-row items-center mb-4">
                <View className="flex-row items-center mr-8">
                    <Dumbbell color="#84cc16" size={18} />
                    <Text className="text-white text-base ml-2 font-medium">
                    10 Exercise
                    </Text>
                </View>
                
                <View className="flex-row items-center mr-8">
                    <PlayCircle color="#84cc16" size={18} />
                    <Text className="text-white text-base ml-2 font-medium">
                    5 Lesson
                    </Text>
                </View>
                
                <View className="flex-row items-center">
                    <Flame color="#84cc16" size={18} />
                    <Text className="text-white text-base ml-2 font-medium">
                    160k cal
                    </Text>
                </View>
                </View>

                {/* Stats Row 2 */}
                <View className="flex-row items-center justify-between mb-8">
                <View className="flex-row items-center">
                    <Clock color="#84cc16" size={18} />
                    <Text className="text-white text-base ml-2 font-medium">
                    1 hrs 30 min
                    </Text>
                </View>
                
                <View className="flex-row items-center">
                    <Star color="#fbbf24" size={18} fill="#fbbf24" />
                    <Text className="text-white text-base ml-2 font-medium">
                    4.7 (12)
                    </Text>
                </View>
                </View>

                {/* Buy Button */}
                <TouchableOpacity 
                className="bg-lime-500 py-4 rounded-2xl flex-row items-center justify-center"
                onPress={handleBuyPress}
                activeOpacity={0.8}
                >
                <ShoppingCart color="#000000" size={20} />
                <Text className="text-black text-lg font-bold ml-2">
                    Buy $89
                </Text>
                </TouchableOpacity>
            </BlurView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WorkoutDetailScreen;