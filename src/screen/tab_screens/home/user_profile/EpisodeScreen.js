import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ChevronLeft, Video, FileText, Upload } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EpisodeScreen() {
  const [title, setTitle] = useState('Forearm and abdominal strengthening');
  const [episodeLesson, setEpisodeLesson] = useState('5');
  const [calorieBurned, setCalorieBurned] = useState('1600');

  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-[#0B1421]">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center px-5 pt-4 pb-6">
          <TouchableOpacity 
            className="w-9 h-9 items-center justify-center"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color="#FFFFFF" strokeWidth={2} />
          </TouchableOpacity>
          <Text className="text-white text-xl font-semibold ml-2">
            Episode 1
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="px-5 mb-5">
          {/* Add Video Button */}
          <TouchableOpacity
            className="bg-white rounded-xl py-4 flex-row items-center justify-center mb-3"
            activeOpacity={0.8}
          >
            <Video size={20} color="#0B1421" strokeWidth={2} fill="#0B1421" />
            <Text className="text-[#0B1421] text-base font-semibold ml-2">
              Add Video
            </Text>
          </TouchableOpacity>

          {/* Add Document Button */}
          <TouchableOpacity
            className="bg-[#2A3947] rounded-xl py-4 flex-row items-center justify-center"
            activeOpacity={0.8}
          >
            <FileText size={20} color="#FFFFFF" strokeWidth={2} />
            <Text className="text-white text-base font-semibold ml-2">
              Add Document
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="px-5">
          {/* Upload Episode */}
          <View className="mb-5">
            <Text className="text-white text-sm font-medium mb-2">
              Upload Episode
            </Text>
            <TouchableOpacity
              className="bg-[#0F1C2E] rounded-xl items-center justify-center"
              style={{ height: 150 }}
              activeOpacity={0.7}
            >
              <View className="w-11 h-11 rounded-lg border border-[#4A5D7A] items-center justify-center mb-2">
                <Upload size={22} color="#6B7D96" strokeWidth={2} />
              </View>
              <Text className="text-[#6B7D96] text-sm">
                Upload Video
              </Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View className="mb-5">
            <Text className="text-white text-sm font-medium mb-2">
              Title
            </Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Episode Lesson */}
          <View className="mb-5">
            <Text className="text-white text-sm font-medium mb-2">
              Episode Lesson
            </Text>
            <TextInput
              value={episodeLesson}
              onChangeText={setEpisodeLesson}
              keyboardType="numeric"
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Calorie Burned */}
          <View className="mb-5">
            <Text className="text-white text-sm font-medium mb-2">
              Calorie Burned
            </Text>
            <TextInput
              value={calorieBurned}
              onChangeText={setCalorieBurned}
              keyboardType="numeric"
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>
        </View>
      </ScrollView>

      {/* Upload Button */}
      <View className="px-5 pb-6 pt-2">
        <TouchableOpacity
          className="bg-[#C1F24E] rounded-2xl h-14 items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-[#0B1421] text-base font-bold">
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}