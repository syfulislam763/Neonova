import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ChevronLeft, Plus } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function UploadTrainingScreen() {
  const [title, setTitle] = useState('Forearm and abdominal strengthening');
  const [description, setDescription] = useState('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum.');
  const [exerciseCount, setExerciseCount] = useState('10');
  const [totalLesson, setTotalLesson] = useState('5');
  const [calorieBurned, setCalorieBurned] = useState('1800');
  const navigation = useNavigation();

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
          <Text className="text-white text-xl font-tektur-semibold ml-2">
            Upload Training
          </Text>
        </View>

        {/* Form Fields */}
        <View className="px-5">
          {/* Upload Thumbnail */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Upload Thumbnail
            </Text>
            <TouchableOpacity
              className="bg-[#0F1C2E] rounded-xl items-center justify-center"
              style={{ height: 140 }}
              activeOpacity={0.7}
            >
              <View className="w-10 h-10 rounded-lg border border-[#4A5D7A] items-center justify-center mb-2">
                <Plus size={24} color="#6B7D96" strokeWidth={2} />
              </View>
              <Text className="text-[#6B7D96] text-sm font-tektur-semibold">
                Upload Video
              </Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Title
            </Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Description */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Description
            </Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={8}
              textAlignVertical="top"
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              style={{ height: 140 }}
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Exercise Count */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Exercise Count
            </Text>
            <TextInput
              value={exerciseCount}
              onChangeText={setExerciseCount}
              keyboardType="numeric"
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Total Lesson */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Total Lesson
            </Text>
            <TextInput
              value={totalLesson}
              onChangeText={setTotalLesson}
              keyboardType="numeric"
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Calorie Burned */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
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

      {/* Next Button */}
      <View className="px-5 pb-6 pt-2">
        <TouchableOpacity
          className="bg-[#C1F24E] rounded-2xl h-14 items-center justify-center"
          activeOpacity={0.8}
          onPress={() => navigation.navigate("EpisodeScreen")}
        >
          <Text className="text-[#0B1421] text-base font-tektur-semibold">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}