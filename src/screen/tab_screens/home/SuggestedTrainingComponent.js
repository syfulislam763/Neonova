import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Dumbbell, Flame, Bookmark, Lock } from 'lucide-react-native';
const img = require("../../../../assets/img/gyn_image.png")

const SuggestedTrainingComponent = () => {
  const handleTrainingPress = (index) => {
    console.log(`Training ${index + 1} pressed`);
  };

  const handleBookmark = (index) => {
    console.log(`Bookmark ${index + 1} pressed`);
  };

  const trainingData = [
    {
      id: 1,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: img,
      exercises: "10 Exercise",
      calories: "160k Cal"
    },
    {
      id: 2,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: img,
      exercises: "10 Exercise",
      calories: "160k Cal"
    },
    {
      id: 3,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image:img,
      exercises: "10 Exercise",
      calories: "160k Cal"
    }
  ];

  return (
    <View className="flex-1 ">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1 pt-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold mb-3">
            Suggested Training
          </Text>
          <Text className="text-gray-400 text-base leading-6">
            There are many variations of passages of Lorem Ipsum{'\n'}
            but the majority have suffered available
          </Text>
        </View>

        {/* Training Cards */}
        {trainingData.map((training, index) => (
          <TouchableOpacity
            key={training.id}
            className="mb-4"
            onPress={() => handleTrainingPress(index)}
            activeOpacity={0.8}
          >
            <BlurView
              className="rounded-2xl overflow-hidden"
              intensity={50}
              tint="dark"
              style={{
                
              }}
            >
              <View className="flex-row p-4">
                {/* Training Image */}
                <View className="relative mr-4">
                  <Image
                    source={img}
                    className="w-24 h-28 rounded-xl"
                  />
                </View>

                {/* Content */}
                <View className="flex-1">
                  <View className="flex-row items-start justify-between mb-2">
                    <Text className="text-white text-lg font-bold flex-1">
                      {training.title}
                    </Text>
                    
                    {/* Bookmark Icon */}
                    <TouchableOpacity
                      onPress={() => handleBookmark(index)}
                      className="w-8 h-8 bg-gray-700 rounded-full items-center justify-center ml-2"
                      activeOpacity={0.7}
                    >
                      <Lock size={18}/>
                    </TouchableOpacity>
                  </View>

                  <Text className="text-gray-400 text-sm mb-3 leading-5">
                    {training.description}
                  </Text>

                  {/* Stats Row */}
                  <View className="flex-row items-center">
                    <View className="flex-row items-center mr-6">
                      <Dumbbell color="#84cc16" size={14} />
                      <Text className="text-white text-sm ml-2">
                        {training.exercises}
                      </Text>
                    </View>
                    
                    <View className="flex-row items-center">
                      <Flame color="#84cc16" size={14} />
                      <Text className="text-white text-sm ml-2">
                        {training.calories}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuggestedTrainingComponent;