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
import { ChevronLeft, Bell, Dumbbell, PlayCircle, Star, ArrowRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TrainingCard = ({ training, onContinue }) => {
  return (
    <BlurView
      className="rounded-2xl overflow-hidden mb-4"
      intensity={10}
      tint="dark"
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.6)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <View>
        {/* Training Image */}
        <Image
          source={{ uri: training.image }}
          className="w-full h-56"
          resizeMode="cover"
        />

        <View className="p-5">
          {/* Title */}
          <Text className="text-white text-xl font-bold mb-3">
            {training.title}
          </Text>

          {/* Description */}
          <Text className="text-gray-400 text-base mb-4 leading-6">
            {training.description}
          </Text>

          {/* Stats Row */}
          <View className="flex-row items-center mb-5">
            <View className="flex-row items-center mr-8">
              <Dumbbell color="#84cc16" size={16} />
              <Text className="text-white text-sm ml-2 font-medium">
                {training.exercises} Expercise
              </Text>
            </View>
            
            <View className="flex-row items-center">
              <PlayCircle color="#84cc16" size={16} />
              <Text className="text-white text-sm ml-2 font-medium">
                {training.lessons} Lesson
              </Text>
            </View>
          </View>

          {/* Trainer Info */}
          <View className="flex-row items-center justify-between mb-5">
            <View className="flex-row items-center">
              <Image
                source={{ uri: training.trainerAvatar }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <Text className="text-white text-base">
                {training.trainerName}
              </Text>
            </View>
            
            <View className="flex-row items-center">
              <Star color="#fbbf24" size={18} fill="#fbbf24" />
              <Text className="text-white text-base ml-1 font-medium">
                {training.rating} ({training.reviews})
              </Text>
            </View>
          </View>

          {/* Continue Courses Button */}
          <TouchableOpacity
            className="bg-lime-500 py-4 rounded-xl flex-row items-center justify-center"
            onPress={() => onContinue(training.id)}
            activeOpacity={0.8}
          >
            <Text className="text-black text-base font-bold mr-2">
              Continue Courses
            </Text>
            <ArrowRight color="#000000" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
};

const MyTrainingSessionScreen = () => {
  const navigation = useNavigation();

  const trainingSessions = [
    {
      id: 1,
      title: "Full Body & Arm Exercise",
      description: "There are many variations of passages of Lorem Ipsum but the majority have suffered available",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      exercises: 10,
      lessons: 8,
      trainerName: "Ibrahim Afridi",
      trainerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      rating: 4.7,
      reviews: 12
    },
    {
      id: 2,
      title: "Cardio & Leg Workout",
      description: "There are many variations of passages of Lorem Ipsum but the majority have suffered available",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop",
      exercises: 12,
      lessons: 10,
      trainerName: "Sarah Johnson",
      trainerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      rating: 4.9,
      reviews: 25
    },
    {
      id: 3,
      title: "Core Strengthening",
      description: "There are many variations of passages of Lorem Ipsum but the majority have suffered available",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",
      exercises: 8,
      lessons: 6,
      trainerName: "Mike Ross",
      trainerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      rating: 4.5,
      reviews: 18
    }
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNotification = () => {
    console.log('Notification pressed');
  };

  const handleProfile = () => {
    console.log('Profile pressed');
  };

  const handleContinue = (trainingId) => {
    console.log('Continue Course for training:', trainingId);
    // Navigate to training detail or player screen
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-5 pb-6">
          <View className="flex-row items-center justify-between">
            {/* Left Side - Back Button and Title */}
            <View className="flex-row items-center flex-1">
              <TouchableOpacity
                onPress={handleBack}
                className="mr-4"
                activeOpacity={0.7}
              >
                <ChevronLeft color="#ffffff" size={24} />
              </TouchableOpacity>
              
              <Text className="text-white text-2xl font-tektur-semibold">
                My Training
              </Text>
            </View>

            {/* Right Side - Notification and Profile */}
            <View className="flex-row items-center gap-3">
              <TouchableOpacity
                onPress={handleNotification}
                className="w-11 h-11 bg-gray-700/50 rounded-full items-center justify-center"
                activeOpacity={0.7}
              >
                <Bell color="#ffffff" size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleProfile}
                activeOpacity={0.7}
              >
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
                  }}
                  className="w-11 h-11 rounded-full"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View className="px-5">
          {/* Training Session Header */}
          <Text className="text-white text-2xl font-tektur-semibold mb-3">
            Training Session
          </Text>
          <Text className="text-gray-400 text-base mb-6 font-inter-medium leading-6">
            There are many variations of passages of Lorem Ipsum{'\n'}
            but the majority have suffered available
          </Text>

          {/* Training Cards List */}
          {trainingSessions.map((training) => (
            <TrainingCard
              key={training.id}
              training={training}
              onContinue={handleContinue}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyTrainingSessionScreen;