import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ChevronLeft, Search, ShoppingCart, Bell } from 'lucide-react-native';

const ProductsHeaderScreen = () => {
  const [searchText, setSearchText] = React.useState('');

  const handleBack = () => {
    console.log('Back pressed');
  };

  const handleCart = () => {
    console.log('Cart pressed');
  };

  const handleNotification = () => {
    console.log('Notification pressed');
  };

  const handleProfile = () => {
    console.log('Profile pressed');
  };

  const handleSearch = () => {
    console.log('Search:', searchText);
  };

  return (
    <View className="flex-1">
     
      {/* Header */}
      <View className="">
        <View className="flex-row items-center justify-between mb-6">
          {/* Left Side - Back Button and Title */}
          <View className="flex-row items-center flex-1">
            
            <Text className="text-white text-3xl font-bold">
              Products
            </Text>
          </View>

          {/* Right Side - Cart, Notification, Profile */}
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={handleCart}
              className="w-12 h-12 bg-gray-700/50 rounded-full items-center justify-center"
              activeOpacity={0.7}
            >
              <ShoppingCart color="#ffffff" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNotification}
              className="w-12 h-12 bg-gray-700/50 rounded-full items-center justify-center"
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
                  uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                }}
                className="w-12 h-12 rounded-full"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <BlurView
          className="rounded-2xl overflow-hidden"
          intensity={50}
          tint="light"
          style={{
            
          }}
        >
          <View className="flex-row items-center px-4 py-4">
            <Search color="#9ca3af" size={20} />
            <TextInput
              className="flex-1 text-white text-base ml-3"
              placeholder="Search..."
              placeholderTextColor="#9ca3af"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={handleSearch}
            />
          </View>
        </BlurView>
      </View>

      {/* Content Section */}
      <ScrollView className="flex-1 py-5">
        {/* Searched Products Header */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold mb-3">
            Searched Products
          </Text>
          <Text className="text-gray-400 text-base leading-6">
            There are many variations of passages of Lorem Ipsum{'\n'}
            but the majority have suffered available
          </Text>
        </View>

        {/* Add your product list here */}
      </ScrollView>
    </View>
  );
};

export default ProductsHeaderScreen;