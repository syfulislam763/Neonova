import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Bell, Search } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {
  const [searchText, setSearchText] = React.useState('');
  const navigation = useNavigation()

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleSearch = () => {
    console.log('Search:', searchText);
  };

  return (
    <View className="">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      {/* Top Row - Name, Date, Notification, Profile */}
      <View className="flex-row items-center justify-between mb-6">
        {/* Left Side - Name and Date */}
        <View>
          <Text className="text-white text-2xl font-bold">
            Artus Schulz
          </Text>
          <Text className="text-gray-400 text-base mt-1">
            October 25, 2019
          </Text>
        </View>

        {/* Right Side - Notification and Profile */}
        <View className="flex-row items-center gap-4">
          {/* Notification Bell */}
          <TouchableOpacity
            onPress={handleNotificationPress}
            className="w-12 h-12 bg-gray-700/50 rounded-full items-center justify-center"
            activeOpacity={0.7}
          >
            <Bell color="#9ca3af" size={20} />
          </TouchableOpacity>

          {/* Profile Image */}
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} activeOpacity={0.7}>
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
        intensity={10}
        tint="dark"
        style={{
          backgroundColor: 'rgba(55, 65, 81, 0.3)',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.1)',
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
  );
};

export default HeaderComponent;