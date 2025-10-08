import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Check } from 'lucide-react-native';

const WhatYoullLearnComponent = () => {
  const learningPoints = [
    "There are many variations offer passages of Lorem Ipsum.",
    "It uses a dictionary of over 200 Latin words, combined with a handful of model.",
    "Sections 1.10.32 and 1.10.33 from \"de Minibus Bono rum et McAllorum.",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure."
  ];

  return (
    <View className="flex-1 bg-[#0f1c25] mt-9 rounded-2xl">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1 px-5 pt-6">
        {/* Header */}
        <Text className="text-white text-2xl font-tektur-semibold mb-6">
          What you'll learn
        </Text>

        {/* Learning Points List */}
        <View>
          {learningPoints.map((point, index) => (
            <View key={index} className="flex-row mb-6">
              {/* Check Icon */}
              <View className="mr-4 mt-1">
                <Check color="#84cc16" size={20} strokeWidth={3} />
              </View>
              
              {/* Text Content */}
              <View className="flex-1">
                <Text className="text-gray-300 font-tektur-semibold text-base leading-6">
                  {point}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default WhatYoullLearnComponent;