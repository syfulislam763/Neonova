import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Send } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import MessageInputBar from './MessageInputBar';

const ChatConversationScreen = () => {
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: 1,
      text: "Listen, can you meet me at Twin Pines Mall tonight at 1:15? I've made a major breakthrough... I'll need your assistance.",
      time: '08:21',
      isSent: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      id: 2,
      text: "Listen, can you meet me at Twin Pines Mall tonight at 1:15? I've made a major titles break through... I'll need your assistance.",
      time: '08:21',
      isSent: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      id: 3,
      text: "Listen, can you meet me at Twin Pines Mall tonight at 1:15? I've made a major breakthrough... I'll need your assistance.",
      time: '08:21',
      isSent: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      id: 4,
      text: "Listen, can you meet me at Twin Pines Mall tonight at 1:15? I've made a major titles break through... I'll need your assistance.",
      time: '08:21',
      isSent: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
  ];
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-[#0a1219]" edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#0a1219" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-[#1a2833]">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity 
            className="mr-4"
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeft size={24} color="#fff" strokeWidth={2.5} />
          </TouchableOpacity>
          
          <View className="flex-1">
            <Text className="text-white text-lg font-tektur-semibold">
              Leslie Alexander
            </Text>
            <Text className="text-gray-400 text-xs font-tektur-semibold">
              Typing...
            </Text>
          </View>
          
        </View>
        
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }}
          className="w-12 h-12 rounded-full"
          resizeMode="cover"
        />
      </View>

      {/* Messages */}
      <ScrollView 
        className="flex-1 px-4 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            className={`flex-row mb-4 ${msg.isSent ? 'justify-end' : 'justify-start'}`}
          >
            {/* Received message - avatar on left */}
            {!msg.isSent && (
              <Image
                source={{ uri: msg.avatar }}
                className="w-5 h-5 rounded-full mr-3 self-end"
                resizeMode="cover"
              />
            )}

            {/* Message bubble */}
            <View
              className={`max-w-[90%] px-5 py-3 ${
                msg.isSent
                  ? 'bg-[#a3e635] rounded-bl-3xl rounded-tr-3xl rounded-tl-3xl'
                  : 'bg-[#2a3441] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl'
              }`}
            >
              <Text className={`text-base leading-6 font-tektur-semibold ${
                msg.isSent ? 'text-black' : 'text-white'
              }`}>
                {msg.text}
              </Text>
              <Text className={`text-xs mt-2 text-right font-tektur-semibold ${
                msg.isSent ? 'text-black/70' : 'text-gray-400'
              }`}>
                {msg.time}
              </Text>
            </View>

            {/* Sent message - avatar on right */}
            {msg.isSent && (
              <Image
                source={{ uri: msg.avatar }}
                className="w-5 h-5 rounded-full ml-3 self-end"
                resizeMode="cover"
              />
            )}
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <MessageInputBar/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatConversationScreen;