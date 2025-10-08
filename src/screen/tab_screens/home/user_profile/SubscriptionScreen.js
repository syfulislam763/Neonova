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
import { ChevronLeft, Crown, ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const features = [
    "You're responsible for safeguarding.",
    "there isn't anything embarrassing hidden.",
    "The standard chuck in offer Lord Ipsum.",
    "Get AI access that meal tracking.",
    "You're responsible for safeguarding.",
  ];
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-[#0a1219]">
      <StatusBar barStyle="light-content" backgroundColor="#0a1219" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pt-4 pb-6">
          <TouchableOpacity 
            className="w-10 h-10 rounded-full bg-[#1a2833] items-center justify-center"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color="#fff" strokeWidth={2.5} />
          </TouchableOpacity>
          
          <Text className="text-white text-xl font-tektur-semibold">
            Subscription
          </Text>
          
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
            className="w-10 h-10 rounded-full"
            resizeMode="cover"
          />
        </View>

        {/* Crown Icon */}
        <View className="items-center pt-6 pb-8">
          <View className="w-28 h-28 rounded-full bg-[#1a2833] items-center justify-center">
            <Crown size={56} color="#a3e635" fill="#a3e635" strokeWidth={2} />
          </View>
        </View>

        {/* Title and Description */}
        <View className="px-6 pb-8">
          <Text className="text-white text-2xl font-tektur-semibold text-center mb-3">
            Get Pro Subscription
          </Text>
          <Text className="text-gray-400 text-sm text-center font-inter-medium leading-5">
            There are many variations of passages of Lorem Ipsum but the majority have suffered available
          </Text>
        </View>

        {/* Plan Toggle */}
        <View className="mx-6 mb-8 bg-[#141f29] rounded-2xl p-1 flex-row">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-xl ${
              selectedPlan === 'monthly' ? 'bg-[#1a2833]' : 'bg-transparent'
            }`}
            onPress={() => setSelectedPlan('monthly')}
            activeOpacity={0.7}
          >
            <Text className={`text-center font-tektur-semibold ${
              selectedPlan === 'monthly' ? 'text-white' : 'text-gray-500'
            }`}>
              Monthly
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            className={`flex-1 py-3 rounded-xl ${
              selectedPlan === 'yearly' ? 'bg-[#1a2833]' : 'bg-transparent'
            }`}
            onPress={() => setSelectedPlan('yearly')}
            activeOpacity={0.7}
          >
            <Text className={`text-center font-tektur-semibold ${
              selectedPlan === 'yearly' ? 'text-white' : 'text-gray-500'
            }`}>
              yearly
            </Text>
          </TouchableOpacity>
        </View>

        {/* Subscription Card */}
        <View className="mx-6 mb-8 bg-[#141f29] rounded-3xl p-6">
          {/* Card Header */}
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-gray-400 text-lg font-tektur-semibold">
              Starter Plan
            </Text>
            <View className="bg-[#a3e635] px-4 py-1.5 rounded-lg flex-row items-center">
              <Crown size={16} color="#000" fill="#000" strokeWidth={2.5} />
              <Text className="text-black font-bold ml-1 font-tektur-semibold">Get Pro</Text>
            </View>
          </View>

          {/* Price */}
          <View className="flex-row items-end mb-6">
            <Text className="text-white text-4xl font-tektur-semibold">$200</Text>
            <Text className="text-gray-400 text-base mb-1 ml-2 font-tektur-semibold">/ Monthly</Text>
          </View>

          {/* Features List */}
          <View className="mb-6">
            {features.map((feature, index) => (
              <View key={index} className="flex-row items-start mb-3">
                <View className="w-5 h-5 rounded-full bg-[#a3e635] items-center justify-center mr-3 mt-0.5">
                  <Text className="text-black text-xs font-bold">✓</Text>
                </View>
                <Text className="text-gray-300 text-sm flex-1 font-tektur-semibold leading-5">
                  {feature}
                </Text>
              </View>
            ))}
          </View>

          {/* Upgrade Button */}
          <TouchableOpacity
            className="bg-[#a3e635] py-4 rounded-2xl flex-row items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-black text-base font-tektur-semibold mr-2">
              Upgrade Plan
            </Text>
            <ArrowRight size={20} color="#000" strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;