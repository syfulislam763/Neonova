import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { ChevronLeft, Image as ImageIcon } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
export default function AddProductScreen() {
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([null, null, null, null]);

  const handleImageUpload = (index) => {
    // Handle image upload logic here
    console.log('Upload image', index);
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#0B1421]">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-4 pt-4 pb-6">
          <TouchableOpacity 
            className="w-10 h-10 rounded-full bg-[#1A2332] items-center justify-center"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color="#FFFFFF" strokeWidth={2.5} />
          </TouchableOpacity>
          <Text className="text-white text-xl font-tektur-semibold ml-3">
            Add Product
          </Text>
        </View>

        {/* Upload Image Section */}
        <View className="px-4">
          <Text className="text-white text-base font-tektur-semibold mb-3">
            Upload image
          </Text>
          <TouchableOpacity
            onPress={() => handleImageUpload(null)}
            className="bg-[#0F1C2E] rounded-2xl h-44 items-center justify-center mb-6"
            activeOpacity={0.7}
          >
            <ImageIcon size={48} color="#4A5D7A" strokeWidth={1.5} />
            <Text className="text-[#6B7D96] text-sm mt-3 font-tektur-semibold">
              Upload Image
            </Text>
          </TouchableOpacity>

          {/* Upload More Image Section */}
          <Text className="text-white text-base font-tektur-semibold mb-3">
            Upload More image
          </Text>
          <View className="flex-row flex-wrap justify-between mb-6">
            {additionalImages.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImageUpload(index)}
                className="bg-[#0F1C2E] rounded-2xl items-center justify-center mb-4"
                style={{ width: '48%', height: 150 }}
                activeOpacity={0.7}
              >
                <ImageIcon size={40} color="#4A5D7A" strokeWidth={1.5} />
                <Text className="text-[#6B7D96] text-sm mt-2 font-tektur-semibold">
                  Upload Image
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity
          className="bg-[#C1F24E] rounded-2xl h-14 items-center justify-center"
          activeOpacity={0.8}
          onPress={()=> navigation.navigate("AddProductScreenTwo")}
        >
          <Text className="text-[#0B1421] text-base font-tektur-semibold">
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}