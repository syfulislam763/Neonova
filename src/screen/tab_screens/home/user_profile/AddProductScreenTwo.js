import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ChevronLeft, ChevronDown } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function AddProductScreenTwo() {
  const [title, setTitle] = useState('Announce Gym App');
  const [description, setDescription] = useState('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum.');
  const [weight, setWeight] = useState('500 ML');
  const [category, setCategory] = useState('Weight Lifting');
  const [brand, setBrand] = useState('Best Body');
  const [color, setColor] = useState('#Black');

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
          <Text className="text-white text-xl font-tektur-semibold ml-2">
            Add Product
          </Text>
        </View>

        {/* Form Fields */}
        <View className="px-5">
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
            <Text className="text-white text-sm font-inter-medium mb-2">
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

          {/* Weight */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Weight
            </Text>
            <TextInput
              value={weight}
              onChangeText={setWeight}
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Category */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Category
            </Text>
            <TouchableOpacity
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 flex-row items-center justify-between"
              activeOpacity={0.7}
            >
              <Text className="text-[#8B9AAF] text-sm font-tektur-semibold">
                {category}
              </Text>
              <ChevronDown size={20} color="#8B9AAF" strokeWidth={2} />
            </TouchableOpacity>
          </View>

          {/* Brand */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Brand
            </Text>
            <TextInput
              value={brand}
              onChangeText={setBrand}
              className="bg-[#0F1C2E] rounded-xl px-4 py-3.5 text-[#8B9AAF] text-sm"
              placeholderTextColor="#4A5D7A"
            />
          </View>

          {/* Color */}
          <View className="mb-5">
            <Text className="text-white text-sm font-tektur-semibold mb-2">
              Color
            </Text>
            <TextInput
              value={color}
              onChangeText={setColor}
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
          <Text className="text-[#0B1421] text-base font-tektur-semibold">
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}