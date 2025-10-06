import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Search, Sparkles } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const MessagingScreen = () => {
  const conversations = [
    {
      id: 1,
      name: 'Leslie Alexander',
      message: "Hi, It's match day tonight...",
      time: '20 min',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      unread: true,
    },
    {
      id: 2,
      name: 'Darrell Steward',
      message: "Hi, it's match day tonight...",
      time: '20 min',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      unread: true,
    },
    {
      id: 3,
      name: 'Robert Fox',
      message: "Hi, It's match day tonight...",
      time: '20 min',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      unread: true,
    },
    {
      id: 4,
      name: 'Wade Warren',
      message: "Hi, It's match day tonight...",
      time: '20 min',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      unread: true,
    },
    {
      id: 5,
      name: 'Eleanor Pena',
      message: "Hi, It's match day tonight...",
      time: '20 min',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      unread: true,
    },
  ];
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-[#0a1219]">
      <StatusBar barStyle="light-content" backgroundColor="#0a1219" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-4 pb-6">
        <TouchableOpacity 
          className="w-10 h-10 rounded-full bg-[#1a2833] items-center justify-center"
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color="#fff" strokeWidth={2.5} />
        </TouchableOpacity>
        
        <Text className="text-white text-xl font-bold">
          Messaging
        </Text>
        
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
          className="w-10 h-10 rounded-full"
          resizeMode="cover"
        />
      </View>

      {/* Search Bar */}
      <View className="px-4 mb-6">
        <View className="bg-[#141f29] rounded-2xl flex-row items-center px-4 py-3">
          <Search size={20} color="#6b7280" strokeWidth={2} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#6b7280"
            className="flex-1 ml-3 text-white text-base"
          />
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* AI Challenge Card */}
        {/* <View className="mx-4 mb-6 bg-gradient-to-br from-[#1a2533] to-[#0f1621] rounded-3xl p-5 flex-row items-center">

          <View className="mr-4">
            <View className="relative">
              <View className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] items-center justify-center opacity-90">
                <Text className="text-white text-4xl font-black transform rotate-12">
                  AI
                </Text>
              </View>
       
              <View className="absolute inset-0 w-24 h-24 rounded-2xl bg-[#6366f1] opacity-30 blur-xl" />
            </View>
          </View>


          <View className="flex-1">
            <Text className="text-gray-400 text-xs mb-1">
              Ready for new challenge?
            </Text>
            <Text className="text-white text-3xl font-bold mb-3">
              200 <Text className="text-lg font-normal">step</Text>
            </Text>
            <TouchableOpacity 
              className="bg-[#6366f1] px-4 py-2 rounded-xl flex-row items-center self-start"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold mr-2">AI Coaching</Text>
              <Sparkles size={16} color="#fff" fill="#fff" />
            </TouchableOpacity>
          </View>
        </View> */}

        {/* Conversations List */}
        <View className="px-4">
          {conversations.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              className="flex-row items-center py-4 border-b border-[#1a2833]"
              activeOpacity={0.7}
              onPress={() => navigation.navigate("ChatConversationScreen")}
            >
              {/* Avatar */}
              <Image
                source={{ uri: chat.avatar }}
                className="w-12 h-12 rounded-full mr-4"
                resizeMode="cover"
              />

              {/* Message Content */}
              <View className="flex-1">
                <Text className="text-white text-base font-semibold mb-1">
                  {chat.name}
                </Text>
                <Text className="text-gray-400 text-sm">
                  {chat.message}
                </Text>
              </View>

              {/* Time and Unread Badge */}
              <View className="items-end">
                <Text className="text-gray-500 text-xs mb-2">
                  {chat.time}
                </Text>
                {chat.unread && (
                  <View className="w-2 h-2 rounded-full bg-[#a3e635]" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagingScreen;