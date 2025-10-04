import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Star } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const UserProfileCard = ({ 
  userName, 
  userAvatar, 
  description, 
  rating, 
  totalReviews,
  onViewProfile,
  onMessage 
}) => {
  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile();
    } else {
      console.log('View Profile pressed');
    }
  };

  const handleMessage = () => {
    if (onMessage) {
      onMessage();
    } else {
      console.log('Message pressed');
    }
  };

  const navigation = useNavigation()


  const renderStars = () => {
    return (
      <View className="flex-row">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            color="#fbbf24"
            fill="#fbbf24"
          />
        ))}
      </View>
    );
  };

  return (
    <BlurView
      className="rounded-3xl overflow-hidden"
      intensity={20}
      tint="dark"
      style={{
      }}
    >
      <View className="py-6">
        {/* User Info Header */}
        <View className="flex-row items-center mb-4">
          <Image
            source={{ uri: userAvatar }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <Text className="text-white text-xl font-bold">
            {userName}
          </Text>
        </View>

        {/* Description */}
        <Text className="text-gray-400 text-base mb-4 leading-6">
          {description}
        </Text>

        {/* Rating Section */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row">
            {renderStars()}
          </View>
          <Text className="text-lime-500 text-base font-semibold">
            {rating} ({totalReviews} People)
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-4">
          <TouchableOpacity
            className="flex-1 bg-lime-500 py-4 rounded-xl items-center"
            onPress={() => navigation.navigate("UserProfileScreen")}
            activeOpacity={0.8}
          >
            <Text className="text-black text-base font-bold">
              View Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 py-4 rounded-xl items-center"
            style={{ backgroundColor: 'rgba(75, 85, 99, 0.6)' }}
            onPress={handleMessage}
            activeOpacity={0.8}
          >
            <Text className="text-white text-base font-bold">
              Message
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
};

// Example Usage Component
const ProfileCard = () => {
  const handleViewProfile = () => {
    console.log('Navigate to profile');
  };

  const handleMessage = () => {
    console.log('Open message screen');
  };

  return (
    <View className="flex-1 justify-center">

      
      <UserProfileCard
        userName="Ibrahim Afridi"
        userAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        description="Lorem ipsum dolor sit a met, connecter our freedom adipescent elite. Maecenas henderite locus libero accused valuate..."
        rating="5.00"
        totalReviews="90"
        onViewProfile={handleViewProfile}
        onMessage={handleMessage}
      />
    </View>
  );
};

export default ProfileCard;