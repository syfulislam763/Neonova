import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const bg = require("../../../assets/img/bg6.png")

const ForgotPasswordScreen = () => {

    const navigation = useNavigation()

  const [email, setEmail] = React.useState('');

  const handleGetCode = () => {
    console.log('Get Code pressed', { email });
  };

  const handleSendCodeAgain = () => {
    console.log('Send code again pressed');
  };

  return (

    <View className="flex-1 ">
     
        <ImageBackground
            source={bg}
            className="flex-1 justify-between"
            resizeMode="cover"
        >
    
        
            <SafeAreaView className="flex-1">
                
                <View className="flex-1  px-5 pt-16">
        
                
                {/* Header */}
                <View className="mb-10">
                    <Text className="text-3xl font-tektur-semibold text-white mb-3">
                    Forgot Password?
                    </Text>
                    <Text className="text-base font-inter-medium text-gray-400 leading-6">
                    We will send OTP verification to you.
                    </Text>
                </View>

                {/* Email Field */}
                <View className="mb-6">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                    Email
                    </Text>
                    <BlurView
                    className="rounded-xl overflow-hidden"
                    intensity={20}
                    tint="light"
                    style={{
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    >
                    <View className="flex-row items-center px-4 py-4">
                        <Text className="text-gray-400 text-base mr-3">✉️</Text>
                        <TextInput
                        className="flex-1 text-white text-base"
                        placeholder="Enter your email"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        />
                    </View>
                    </BlurView>
                </View>

                {/* Send Code Again Link */}
                <View className="items-center mb-8">
                    <TouchableOpacity onPress={handleSendCodeAgain}>
                    <Text className="text-[#a3e636] font-tektur-semibold border-b border-b-lime-500 text-base">
                        Send code again?
                    </Text>
                    </TouchableOpacity>
                </View>

                {/* Get Code Button */}
                <TouchableOpacity 
                    className="bg-[#a3e636] py-4 rounded-xl items-center"
                    onPress={() => navigation.navigate("ProvideCodeScreen")}
                >
                    <Text className="text-base font-tektur-semibold text-black">
                        Get Code
                    </Text>
                </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </ImageBackground>
    </View>


  );
};

export default ForgotPasswordScreen;