import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ChevronLeft, Camera, Calendar, Edit3 } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const EditProfileScreen = () => {
  const [name, setName] = React.useState('Ibrahim Afridi');
  const [age, setAge] = React.useState('31 Mach 1998');
  const [height, setHeight] = React.useState('5.97');
  const [weight, setWeight] = React.useState('75');
  const [about, setAbout] = React.useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry standard dummy text ever since when an unknown printer took in the galley.');
  const [heightUnit, setHeightUnit] = React.useState('Feet');
  const [weightUnit, setWeightUnit] = React.useState('Kilo');
  const navigation = useNavigation()

  const handleBack = () => {
    console.log('Back pressed');
  };

  const handleChangePhoto = () => {
    console.log('Change photo pressed');
  };

  const handleDatePicker = () => {
    console.log('Date picker pressed');
  };

  const handleSaveChanges = () => {
    console.log('Save changes:', { name, age, height, weight, about });
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-5 pb-6">
          <View className="flex-row items-center mb-8">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="mr-4"
              activeOpacity={0.7}
            >
              <ChevronLeft color="#ffffff" size={24} />
            </TouchableOpacity>
            <Text className="text-white text-2xl font-bold">
              Edit Profile
            </Text>
          </View>

          {/* Profile Image */}
          <View className="items-center mb-6">
            <View className="relative">
              <View 
                className="w-32 h-32 rounded-full items-center justify-center"
                style={{
                  borderWidth: 3,
                  borderColor: '#84cc16',
                }}
              >
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
                  }}
                  className="w-full h-full rounded-full"
                />
              </View>
              
              {/* Camera Button */}
              <TouchableOpacity
                onPress={handleChangePhoto}
                className="absolute bottom-0 right-0 w-10 h-10 bg-lime-500 rounded-full items-center justify-center"
                style={{
                  borderWidth: 3,
                  borderColor: '#1e293b',
                }}
                activeOpacity={0.8}
              >
                <Camera color="#000000" size={18} />
              </TouchableOpacity>
            </View>

            <Text className="text-white text-xl font-bold mt-4">
              Artus Schulz
            </Text>
            <Text className="text-gray-400 text-sm">
              ibrahimafridi947@gmail.com
            </Text>
          </View>

          {/* Your Name Field */}
          <View className="mb-5">
            <Text className="text-white text-base font-medium mb-3">
              Your Name
            </Text>
            <BlurView
              className="rounded-xl overflow-hidden"
              intensity={10}
              tint="dark"
              style={{
                backgroundColor: 'rgba(55, 65, 81, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <TextInput
                className="text-gray-300 text-base px-4 py-4"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#9ca3af"
              />
            </BlurView>
          </View>

          {/* Age Field */}
          <View className="mb-5">
            <Text className="text-white text-base font-medium mb-3">
              Age
            </Text>
            <BlurView
              className="rounded-xl overflow-hidden"
              intensity={10}
              tint="dark"
              style={{
                backgroundColor: 'rgba(55, 65, 81, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <View className="flex-row items-center px-4 py-4">
                <TextInput
                  className="text-gray-300 text-base flex-1"
                  value={age}
                  onChangeText={setAge}
                  placeholderTextColor="#9ca3af"
                />
                <TouchableOpacity onPress={handleDatePicker}>
                  <Calendar color="#9ca3af" size={20} />
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>

          {/* Height and Weight Row */}
          <View className="flex-row gap-4 mb-5">
            {/* Height */}
            <View className="flex-1">
              <Text className="text-white text-base font-medium mb-3">
                Height
              </Text>
              <BlurView
                className="rounded-xl overflow-hidden"
                intensity={10}
                tint="dark"
                style={{
                  backgroundColor: 'rgba(55, 65, 81, 0.4)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <View className="flex-row items-center px-4 py-4">
                  <TextInput
                    className="text-gray-300 text-base flex-1"
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    placeholderTextColor="#9ca3af"
                  />
                  <Text className="text-lime-500 text-sm font-semibold">
                    {heightUnit}
                  </Text>
                </View>
              </BlurView>
            </View>

            {/* Weight */}
            <View className="flex-1">
              <Text className="text-white text-base font-medium mb-3">
                Weight
              </Text>
              <BlurView
                className="rounded-xl overflow-hidden"
                intensity={10}
                tint="dark"
                style={{
                  backgroundColor: 'rgba(55, 65, 81, 0.4)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <View className="flex-row items-center px-4 py-4">
                  <TextInput
                    className="text-gray-300 text-base flex-1"
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    placeholderTextColor="#9ca3af"
                  />
                  <Text className="text-lime-500 text-sm font-semibold">
                    {weightUnit}
                  </Text>
                </View>
              </BlurView>
            </View>
          </View>

          {/* About Field */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-white text-base font-medium">
                About
              </Text>
              <Edit3 color="#84cc16" size={16} />
            </View>
            <BlurView
              className="rounded-xl overflow-hidden"
              intensity={10}
              tint="dark"
              style={{
                backgroundColor: 'rgba(55, 65, 81, 0.4)',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <TextInput
                className="text-gray-300 text-base px-4 py-4"
                value={about}
                onChangeText={setAbout}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                style={{ minHeight: 120 }}
                placeholderTextColor="#9ca3af"
              />
            </BlurView>
            <Text className="text-gray-400 text-xs text-right mt-2">
              {about.length}/200
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Save Changes Button */}
      <View className="px-5 pb-8">
        <TouchableOpacity
          className="bg-lime-500 py-4 rounded-xl items-center"
          onPress={handleSaveChanges}
          activeOpacity={0.8}
        >
          <Text className="text-black text-lg font-bold">
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;