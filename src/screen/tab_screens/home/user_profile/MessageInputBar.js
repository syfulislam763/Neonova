import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Plus, Smile, ClipboardList } from 'lucide-react-native';

export default function MessageInputBar() {
  const [message, setMessage] = useState('');

  return (
    <View className="px-5 pb-12 pt-3">
      <BlurView
        intensity={80}
        tint="dark"
        className="rounded-full overflow-hidden"
      >
        <View className="flex-row items-center bg-[#0A1929]/80 rounded-full px-2 py-2">
          {/* Plus Button */}
          <TouchableOpacity 
            className="w-14 h-14 rounded-full bg-[#1A2942] items-center justify-center mr-2"
            activeOpacity={0.7}
          >
            <Plus size={28} color="#8B9AAF" strokeWidth={2.5} />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message"
            placeholderTextColor="#4A5968"
            className="flex-1 text-[#8B9AAF] text-base px-4"
            style={{ fontSize: 17 }}
          />

          {/* Emoji Button */}
          <TouchableOpacity 
            className="w-12 h-12 items-center justify-center mr-1"
            activeOpacity={0.7}
          >
            <Smile size={26} color="#8B9AAF" strokeWidth={2} />
          </TouchableOpacity>

          {/* Clipboard Button */}
          <TouchableOpacity 
            className="w-14 h-14 rounded-full bg-[#1A2942] items-center justify-center"
            activeOpacity={0.7}
          >
            <ClipboardList size={26} color="#8B9AAF" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
}