import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import CurvedBorder from './CurvedBorder';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const [isAgreed, setIsAgreed] = useState(false);
    const navigation = useNavigation()
  return (
    <View className="flex-1 bg-[#0a1219]">
      <StatusBar barStyle="light-content" backgroundColor="#0a1219" />
      
      {/* Header */}
      <SafeAreaView edges={['top']}>
        <View className="flex-row items-center justify-between px-4 pt-4 pb-6">
          <TouchableOpacity 
            className="w-10 h-10 rounded-full bg-[#1a2833] items-center justify-center"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color="#fff" strokeWidth={2.5} />
          </TouchableOpacity>
          
          <Text className="text-white text-xl font-bold">
            Privacy Policy
          </Text>
          
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
            className="w-10 h-10 rounded-full"
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>

      {/* Green top border accent */}
      <CurvedBorder/>

      {/* Content */}
      <ScrollView 
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
      >
        {/* First Section */}
        <View className="mb-8">
          <Text className="text-white text-xl font-tektur-semibold mb-4">
            Training Session
          </Text>
          <Text className="text-gray-400 text-sm leading-6 mb-4 font-inter-medium">
            It is a long established fact that a reader will distracted by the readable content of page when looking its layout. The point of using Lorem Ipsum is that it has normal distribution of letters as opposed to using Content here content here making it look like readable English.
          </Text>
          <Text className="text-gray-400 text-sm leading-6 font-inter-medium">
            It is a long established fact that a reader will by readable content of page when looking its layout. The point of using Lorem Ipsum is that has normal distribution letters as opposed to using Content here content here making it look like readable English.
          </Text>
        </View>

        {/* Second Section */}
        <View className="mb-8">
          <Text className="text-white text-xl font-tektur-semibold mb-4">
            Training Session
          </Text>
          <Text className="text-gray-400 text-sm leading-6 mb-4 font-inter-medium">
            It is a long established fact that a reader will distracted by the readable content of page when looking its layout. The point of using Lorem Ipsum is that it has normal distribution of letters as opposed to using Content here content here making it look like readable English.
          </Text>
          <Text className="text-gray-400 text-sm font-inter-medium leading-6 mb-8">
            It is a long established fact that a reader will by readable content of page when looking its layout. The point of using Lorem Ipsum is that has normal distribution letters as opposed to using Content here content here making it look like readable English.
          </Text>
        </View>

        {/* Agreement Checkbox */}
        <TouchableOpacity 
          className="flex-row items-center mb-6"
          onPress={() => setIsAgreed(!isAgreed)}
          activeOpacity={0.7}
        >
          <View className={`w-5 h-5 rounded mr-3 border-2 items-center justify-center ${
            isAgreed ? 'bg-white border-white' : 'bg-transparent border-gray-500'
          }`}>
            {isAgreed && (
              <Text className="text-black text-xs font-bold">✓</Text>
            )}
          </View>
          <Text className="text-gray-300 text-sm flex-1 font-tektur-semibold">
            By agreeing to the <Text className="text-[#a3e635] font-tektur-semibold">Terms & Condition</Text>
          </Text>
        </TouchableOpacity>

        {/* Accept Button */}
        <TouchableOpacity
          className={`py-4 rounded-2xl mb-8 ${
            isAgreed ? 'bg-[#a3e635]' : 'bg-gray-700'
          }`}
          activeOpacity={0.8}
          disabled={!isAgreed}
        >
          <Text className={`text-center text-base font-tektur-semibold ${
            isAgreed ? 'text-black' : 'text-gray-400'
          }`}>
            Accept Agreement
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;