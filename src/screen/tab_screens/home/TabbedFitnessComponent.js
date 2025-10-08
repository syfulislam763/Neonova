import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ArrowRight, Dumbbell, PlayCircle, Flame, Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react-native';

const TabbedFitnessComponent = () => {
  const [activeTab, setActiveTab] = React.useState('Statistics');

  const tabs = ['Statistics', 'Training', 'Community'];

  const handleViewFullStats = () => {
    console.log('View Full Statistics pressed');
  };

  const handleContinueCourses = () => {
    console.log('Continue Courses pressed');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Statistics':
        return (
          <View className="px-5 pb-6">
            {/* Circular Progress Chart */}
            <View className="flex-row items-center justify-between mb-8">
              {/* Left - Circular Chart */}
              <View className="relative w-40 h-40 items-center justify-center">
                {/* Background Circle */}
                <View className="absolute w-40 h-40 rounded-full border-8 border-gray-700" />
                
                {/* Progress Circles - Blue (top right) */}
                <View 
                  className="absolute w-40 h-40 rounded-full border-8 border-transparent"
                  style={{
                    borderTopColor: '#6366f1',
                    borderRightColor: '#6366f1',
                    transform: [{ rotate: '45deg' }]
                  }}
                />
                
                {/* Progress Circles - Green (bottom) */}
                <View 
                  className="absolute w-40 h-40 rounded-full border-8 border-transparent"
                  style={{
                    borderBottomColor: '#84cc16',
                    borderLeftColor: '#84cc16',
                    transform: [{ rotate: '225deg' }]
                  }}
                />

                {/* Center Content */}
                <View className="items-center">
                  <View className="flex-row items-center mb-1">
                    <Text className="text-red-500 text-lg mr-1">🔥</Text>
                  </View>
                  <Text className="text-white text-2xl font-tektur-semibold">1500 Cal</Text>
                  <Text className="text-gray-400 text-base font-tektur-semibold">Yesterday</Text>
                </View>
              </View>

              {/* Right - Legend */}
              <View className="flex-1 ml-8">
                <View className="mb-4">
                  <View className="flex-row items-center mb-2">
                    <View className="w-4 h-4 rounded-full bg-blue-500 mr-3" />
                    <Text className="text-gray-400 text-base flex-1 font-tektur-semibold">Doing Nothing</Text>
                  </View>
                  <Text className="text-blue-500 text-xl font-tektur-semibold ml-7">33%</Text>
                </View>

                <View className="mb-4">
                  <View className="flex-row items-center mb-2">
                    <View className="w-4 h-4 rounded-full bg-lime-500 mr-3" />
                    <Text className="text-gray-400 font-tektur-semibold text-base flex-1">Training Task</Text>
                  </View>
                  <Text className="text-lime-500 text-xl font-bold ml-7 font-tektur-semibold">33%</Text>
                </View>

                <View>
                  <View className="flex-row items-center mb-2">
                    <View className="w-4 h-4 rounded-full bg-gray-500 mr-3" />
                    <Text className="text-gray-400 text-base flex-1 font-tektur-semibold">Meal Ratio</Text>
                  </View>
                  <Text className="text-gray-500 text-xl font-bold ml-7 font-tektur-semibold">33%</Text>
                </View>
              </View>
            </View>

            {/* View Full Statistics Button */}
            <TouchableOpacity 
              className="bg-lime-500 py-4 rounded-xl flex-row items-center justify-center"
              onPress={handleViewFullStats}
              activeOpacity={0.8}
            >
              <Text className="text-black text-base font-tektur-semibold mr-2">
                View Full Statistics
              </Text>
              <ArrowRight color="#000000" size={20} />
            </TouchableOpacity>
          </View>
        );

      case 'Training':
        return (
          <ScrollView className="px-5 pb-6">
            {/* Header */}
            <View className="mb-6">
              <Text className="text-white text-2xl font-tektur-semibold mb-3">
                Training Session
              </Text>
              <Text className="text-gray-400 font-inter-medium text-base leading-6">
                There are many variations of passages of Lorem Ipsum{'\n'}
                but the majority have suffered available
              </Text>
            </View>

            {/* Training Card */}
            <View className="mb-6">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
                }}
                className="w-full h-48 rounded-2xl mb-4"
              />
              
              <Text className="text-white text-xl font-tektur-semibold mb-2 ">
                Full Body & Arm Excercise
              </Text>
              <Text className="text-gray-400 text-base mb-4 leading-6 font-inter-medium">
                There are many variations of passages of Lorem{'\n'}
                Ipsum but the majority have suffered available
              </Text>

              {/* Stats Row */}
              <View className="flex-row items-center justify-between mb-6">
                <View className="flex-row items-center">
                  <Dumbbell color="#84cc16" size={16} />
                  <Text className="text-white text-sm ml-2 font-tektur-semibold">10 Exercise</Text>
                </View>
                
                <View className="flex-row items-center">
                  <PlayCircle color="#84cc16" size={16} />
                  <Text className="text-white text-sm ml-2 font-tektur-semibold">8 Lesson</Text>
                </View>
                
                <View className="flex-row items-center">
                  <Flame color="#84cc16" size={16} />
                  <Text className="text-white text-sm ml-2 font-tektur-semibold">160k Cal</Text>
                </View>
              </View>

              {/* Trainer Info */}
              <View className="flex-row items-center justify-between mb-6">
                <View className="flex-row items-center">
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
                    }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <Text className="text-white text-base font-tektur-semibold">Ibrahim Afridi</Text>
                </View>
                
                <View className="flex-row items-center">
                  <Text className="text-yellow-500 text-lg mr-1 font-tektur-semibold">★</Text>
                  <Text className="text-white text-base font-tektur-semibold">4.7 (12)</Text>
                </View>
              </View>
            </View>

            {/* Continue Courses Button */}
            <TouchableOpacity 
              className="bg-lime-500 py-4 rounded-xl flex-row items-center justify-center"
              onPress={handleContinueCourses}
              activeOpacity={0.8}
            >
              <Text className="text-black text-base font-semibold mr-2 font-tektur-semibold">
                Continue Courses
              </Text>
              <ArrowRight color="#000000" size={20} />
            </TouchableOpacity>
          </ScrollView>
        );

      case 'Community':
        return (
          <ScrollView className="px-5 pb-6">
            {/* Header */}
            <View className="mb-6">
              <Text className="text-white text-2xl font-bold mb-3 font-tektur-semibold">
                Community Fitness
              </Text>
              <Text className="text-gray-400 text-base leading-6 font-inter-medium">
                There are many variations of passages of Lorem Ipsum{'\n'}
                but the majority have suffered available
              </Text>
            </View>

            {/* Post */}
            <View className="mb-6">
              {/* User Info */}
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
                    }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="text-white text-base font-tektur-semibold">Ibrahim Afridi</Text>
                    <Text className="text-gray-400 text-sm font-tektur-semibold">14 minutes ago</Text>
                  </View>
                </View>
                
                <TouchableOpacity>
                  <MoreHorizontal color="#84cc16" size={20} />
                </TouchableOpacity>
              </View>

              {/* Post Text */}
              <Text className="text-white text-base mb-4 leading-6 font-inter-medium">
                Exercising clears my mind, boosts my energy level{'\n'}
                and feels absolutely amazing!
              </Text>

              {/* Post Image */}
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
                }}
                className="w-full h-64 rounded-2xl mb-4"
              />

              {/* Liked by Info */}
              <Text className="text-gray-400 text-sm mb-4 font-tektur-semibold">
                Liked by Ronnie Coleman and 1.2k people
              </Text>

              {/* Action Buttons */}
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Heart color="#ef4444" size={20} fill="#ef4444" />
                  <Text className="text-white text-base ml-2 mr-6 font-tektur-semibold">1.2k</Text>
                </View>
                
                <View className="flex-row items-center">
                  <MessageCircle color="#9ca3af" size={20} />
                  <Text className="text-gray-400 text-base ml-2 mr-6 font-tektur-semibold">469</Text>
                </View>
                
                <View className="flex-row items-center">
                  <Share color="#9ca3af" size={20} />
                  <Text className="text-gray-400 text-base ml-2 font-tektur-semibold">345</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        );

      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-[#0f1c25] rounded-2xl">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      {/* Tab Navigation */}
      <View className="px-5 pt-6 pb-4">
        <View className="flex-row">
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={tab}
              className={`px-6 py-3 rounded-xl mr-3 ${
                activeTab === tab ? 'bg-gray-900' : 'bg-transparent'
              }`}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                className={`text-base  font-tektur-semibold ${
                  activeTab === tab ? 'text-white' : 'text-gray-400'
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
};

export default TabbedFitnessComponent;