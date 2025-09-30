import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ChevronLeft, Image as ImageIcon } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const CreatePostScreen = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState(null);
  const navigation = useNavigation()

  const handleBack = () => {
    console.log('Back pressed');
  };

  const handleUploadImage = () => {
    console.log('Upload image pressed');
    // Add your image picker logic here
  };

  const handlePost = () => {
    console.log('Post pressed', { name, description, image });
    // Add your post submission logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
  
      {/* Header */}
      <View className="flex-row items-center px-5 ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mr-4"
          activeOpacity={0.7}
        >
          <ChevronLeft color="#ffffff" size={28} />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">
          Post
        </Text>
      </View>

      <ScrollView className="flex-1 px-5 mt-5">
        {/* Upload Image Section */}
        <View className="mb-1">
          <Text className="text-white text-base font-medium mb-3">
            Upload image
          </Text>
          
          <TouchableOpacity
            onPress={handleUploadImage}
            activeOpacity={0.8}
          >
            <BlurView
              className="rounded-2xl overflow-hidden h-48"
              intensity={10}
              tint="dark"
              style={{
                backgroundColor: 'rgba(55, 65, 81, 0.3)',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <View className="flex-1 items-center justify-center">
                <ImageIcon color="#9ca3af" size={32} />
                <Text className="text-gray-400 text-base mt-3">
                  Upload Image
                </Text>
              </View>
            </BlurView>
          </TouchableOpacity>
        </View>

        {/* Name Section */}
        <View className="mb-6">
          <Text className="text-white text-base font-medium mb-3">
            Name
          </Text>
          
          <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={10}
            tint="dark"
            style={{
              backgroundColor: 'rgba(55, 65, 81, 0.3)',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <TextInput
              className="text-white text-base px-4 py-4"
              placeholder="Announce Gym App"
              placeholderTextColor="#9ca3af"
              value={name}
              onChangeText={setName}
            />
          </BlurView>
        </View>

        {/* Description Section */}
        <View className="mb-8">
          <Text className="text-white text-base font-medium mb-3">
            Description
          </Text>
          
          <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={10}
            tint="dark"
            style={{
              backgroundColor: 'rgba(55, 65, 81, 0.3)',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <TextInput
              className="text-white text-base px-4 py-4"
              placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum."
              placeholderTextColor="#9ca3af"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={8}
              textAlignVertical="top"
              style={{ minHeight: 180 }}
            />
          </BlurView>
        </View>
      </ScrollView>

      {/* Post Button - Fixed at bottom */}
      <View className="px-5 ">
        <TouchableOpacity
          className="bg-lime-500 py-4 rounded-xl items-center"
          onPress={handlePost}
          activeOpacity={0.8}
        >
          <Text className="text-black text-lg font-bold">
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;