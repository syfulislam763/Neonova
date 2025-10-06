import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  User, 
  MessageCircle, 
  Dumbbell, 
  CreditCard, 
  Lock, 
  Download,
  LogOut,
  ChevronRight,
  Phone,
  ChevronLeft
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const menuItems = [
    {
      id: 1,
      icon: User,
      title: 'View Profile',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "FullProfileScreen"
    },
    {
      id: 2,
      icon: MessageCircle,
      title: 'Message',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "MessagingScreen"
    },
    {
      id: 3,
      icon: Dumbbell,
      title: 'My Training',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "MyTrainingSessionScreen"
    },
    {
      id: 4,
      icon: CreditCard,
      title: 'Subscription',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "SubscriptionScreen"
    },
    {
      id: 5,
      icon: Lock,
      title: 'Privacy Policy',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "PrivacyPolicyScreen"
    },
    {
      id: 6,
      icon: Download,
      title: 'Save Files',
      description: 'Lorem Ipsum is text of the printing.',
      color: '#a3e635',
      route: "FullProfileScreen"
    },
  ];
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#0a1219]">
      <StatusBar barStyle="light-content" backgroundColor="#0a1219" />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <TouchableOpacity onPress={() => navigation.goBack()} className="px-3">
            <ChevronLeft size={24} color={"#fff"}/>
        </TouchableOpacity>
        <View className="items-center pt-8 pb-6">
          {/* Profile Image with green border and phone icon */}
          <View className="relative mb-4">
            <View className="w-32 h-32 rounded-full border-4 border-[#a3e635] p-1">
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
                className="w-full h-full rounded-full"
                resizeMode="cover"
              />
            </View>
            {/* Phone icon bottom right */}
            <TouchableOpacity 
              className="absolute bottom-0 right-0 w-10 h-10 bg-[#a3e635] rounded-full items-center justify-center"
              activeOpacity={0.8}
            >
              <Phone size={20} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Name and Email */}
          <Text className="text-white text-2xl font-bold mb-1">
            Artus Schulz
          </Text>
          <Text className="text-gray-400 text-sm">
            ibrahimafrid1947@gmail.com
          </Text>
        </View>

        {/* Menu Items */}
        <View className="px-4 pb-6">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              className="bg-[#141f29] rounded-2xl p-4 mb-3 flex-row items-center"
              activeOpacity={0.7}
              onPress={() => navigation.navigate(item.route)}
            >
              {/* Icon */}
              <View className="w-10 h-10 rounded-xl bg-[#1a2833] items-center justify-center mr-4">
                <item.icon size={22} color={item.color} strokeWidth={2.5} />
              </View>

              {/* Text Content */}
              <View className="flex-1">
                <Text className="text-white text-base font-semibold mb-1">
                  {item.title}
                </Text>
                <Text className="text-gray-500 text-xs">
                  {item.description}
                </Text>
              </View>

              {/* Arrow */}
              <ChevronRight size={20} color="#6b7280" strokeWidth={2} />
            </TouchableOpacity>
          ))}

          {/* Logout Button */}
          <TouchableOpacity
            className="bg-[#141f29] rounded-2xl p-4 mt-4 flex-row items-center"
            activeOpacity={0.7}
          >
            {/* Icon */}
            <View className="w-10 h-10 rounded-xl bg-[#1a2833] items-center justify-center mr-4">
              <LogOut size={22} color="#ef4444" strokeWidth={2.5} />
            </View>

            {/* Text Content */}
            <View className="flex-1">
              <Text className="text-white text-base font-semibold mb-1">
                Logout
              </Text>
              <Text className="text-gray-500 text-xs">
                Lorem Ipsum is simply text of the printing.
              </Text>
            </View>

            {/* Arrow */}
            <ChevronRight size={20} color="#6b7280" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;