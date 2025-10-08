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
import { Clock, Unlock } from 'lucide-react-native';

const TrainingEpisodeComponent = () => {
  const handleEpisodePress = (episodeIndex) => {
    console.log(`Episode ${episodeIndex + 1} pressed`);
  };

  const handleUnlockPress = (episodeIndex) => {
    console.log(`Unlock pressed for episode ${episodeIndex + 1}`);
  };

  const episodes = [
    {
      id: 1,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      unlockText: "Unlock Course"
    },
    {
      id: 2,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      unlockText: "Unlock Course"
    },
    {
      id: 3,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      unlockText: "Unlock Course"
    },
    {
      id: 4,
      title: "Arm Exercise",
      description: "There are many variations offer passages of Lorem Ipsum...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      unlockText: "Unlock Course"
    }
  ];

  const pdfItem = {
    title: "Food Habit PDF",
    description: "There are many variations offer passages of Lorem Ipsum...",
    unlockText: "Unlock Course"
  };

  return (
    <View className="flex-1  mt-9 rounded-2xl">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <View className="flex-1 pt-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-white text-2xl font-tektur-semibold">
            Training Episode
          </Text>
          <Text className="text-gray-400 text-base font-tektur-semibold">
            1/5
          </Text>
        </View>

        {/* Duration */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Clock color="#9ca3af" size={16} />
            <Text className="text-gray-400 font-tektur-semibold text-base ml-2">
              Training Duration
            </Text>
          </View>
          <Text className="text-lime-500 text-base font-tektur-semibold">
            1 hrs 30 min
          </Text>
        </View>

        {/* Episodes List */}
        {episodes.map((episode, index) => (
          <TouchableOpacity
            key={episode.id}
            className="mb-4"
            onPress={() => handleEpisodePress(index)}
            activeOpacity={0.8}
          >
            <BlurView
              className="rounded-2xl overflow-hidden"
              intensity={30}
              tint="light"
              style={{
                
              }}
            >
              <View className="flex-row p-4">
                {/* Episode Image */}
                <View className="mr-4">
                  <Image
                    source={{ uri: episode.image }}
                    className="w-20 h-20 rounded-xl"
                  />
                </View>

                {/* Content */}
                <View className="flex-1">
                  <Text className="text-white text-lg font-tektur-semibold mb-2">
                    {episode.title}
                  </Text>

                  <Text className="text-gray-400 text-sm mb-3 leading-5 font-tektur-semibold">
                    {episode.description}
                  </Text>

                  {/* Unlock Button */}
                  <TouchableOpacity
                    onPress={() => handleUnlockPress(index)}
                    className="flex-row items-center"
                    activeOpacity={0.7}
                  >
                    <Unlock color="#84cc16" size={14} />
                    <Text className="text-lime-500 text-sm ml-2 font-tektur-semibold">
                      {episode.unlockText}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}

        {/* PDF Item */}
        <TouchableOpacity
          className="mb-6"
          onPress={() => console.log('PDF pressed')}
          activeOpacity={0.8}
        >
          <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={30}
            tint="light"
            style={{
             
            }}
          >
            <View className="flex-row p-4">
              {/* PDF Icon */}
              <View className="mr-4">
                <View className="w-20 h-20 bg-red-600 rounded-xl items-center justify-center">
                  <View className="bg-white rounded px-2 py-1">
                    <Text className="text-red-600 text-xs font-bold font-tektur-semibold">
                      PDF
                    </Text>
                  </View>
                </View>
              </View>

              {/* Content */}
              <View className="flex-1">
                <Text className="text-white text-lg font-bold mb-2 font-tektur-semibold">
                  {pdfItem.title}
                </Text>

                <Text className="text-gray-400 text-sm mb-3 leading-5 font-inter-medium">
                  {pdfItem.description}
                </Text>

                {/* Unlock Button */}
                <TouchableOpacity
                  onPress={() => console.log('PDF unlock pressed')}
                  className="flex-row items-center"
                  activeOpacity={0.7}
                >
                  <Unlock color="#84cc16" size={14} />
                  <Text className="text-lime-500 text-sm ml-2 font-tektur-semibold">
                    {pdfItem.unlockText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainingEpisodeComponent;