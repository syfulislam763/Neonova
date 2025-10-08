import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabbedProductsTraining from './TabbedProductsTraining';

const UserProfileScreen = () => {
  const handleBack = () => {
    console.log('Back pressed');
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#060f15]">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Header Section */}
        <View className="px-5 pt-12 pb-6">
          <View className="flex-row items-center mb-6">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-12 h-12 bg-gray-700/50 rounded-full items-center justify-center mr-4"
              activeOpacity={0.7}
            >
              <ChevronLeft color="#ffffff" size={24} />
            </TouchableOpacity>

            {/* Profile Image with Border */}
            <View 
              className="w-20 h-20 rounded-full items-center justify-center mr-4"
              style={{
                borderWidth: 3,
                borderColor: '#84cc16',
              }}
            >
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                }}
                className="w-full h-full rounded-full"
              />
            </View>

            {/* User Info */}
            <View className="flex-1">
              <Text className="text-white text-2xl font-tektur-semibold">
                Artus Schulz
              </Text>
              <Text className="text-gray-400 text-base font-tektur-semibold">
                October 25, 2019
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View className="px-5 mb-6">
          <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={30}
            tint="light"
            style={{}}
          >
            <View className="flex-row p-5">
              {/* Age */}
              <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2 font-tektur-semibold">
                  Age
                </Text>
                <View className="flex-row items-baseline">
                  <Text className="text-white text-3xl font-tektur-semibold">
                    28
                  </Text>
                  <Text className="text-gray-400 text-base ml-1 font-tektur-semibold">
                    yo
                  </Text>
                </View>
              </View>

              {/* Divider */}
              <View 
                className="w-px mx-4"
                style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
              />

              {/* Height */}
              <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2 font-tektur-semibold">
                  Height
                </Text>
                <View className="flex-row items-baseline">
                  <Text className="text-white text-3xl font-tektur-semibold">
                    5.97
                  </Text>
                  <Text className="text-gray-400 text-base ml-1 font-tektur-semibold">
                    ft
                  </Text>
                </View>
              </View>

              {/* Divider */}
              <View 
                className="w-px mx-4"
                style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
              />

              {/* Weight */}
              <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2 font-tektur-semibold">
                  Weight
                </Text>
                <View className="flex-row items-baseline">
                  <Text className="text-white text-3xl font-tektur-semibold">
                    75
                  </Text>
                  <Text className="text-gray-400 text-base ml-1 font-tektur-semibold">
                    kilo
                  </Text>
                </View>
              </View>
            </View>
          </BlurView>
        </View>

        {/* About Section */}
        <View className="px-5 mb-6">
          <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={30}
            tint="light"
            style={{
              
            }}
          >
            <View className="p-5">
              <Text className="text-white text-xl font-bold mb-4 font-tektur-semibold">
                About
              </Text>
              <Text className="text-gray-400 text-base font-inter-semibold leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry standard dummy text ever since when an unknown printer took in the galley.
              </Text>
            </View>
          </BlurView>
        </View>


        <TabbedProductsTraining/>



      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;