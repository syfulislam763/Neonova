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


const bg = require("../../../assets/img/bg4.png")

const CreateAccountScreen = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [agreeTerms, setAgreeTerms] = React.useState(false);



  const navigation = useNavigation()

  const handleGetStarted = () => {
    console.log('Get Started pressed', { 
      firstName, 
      lastName, 
      email, 
      password, 
      confirmPassword, 
      agreeTerms 
    });
  };

  const handleLogin = () => {
    console.log('Login pressed');
  };

  const handleTerms = () => {
    console.log('Terms & Condition pressed');
  };

  return (

    <View className="flex-1 ">
 
        <ImageBackground
            source={bg}
            className="flex-1 justify-between"
            resizeMode="cover"
        >
    
        
            <SafeAreaView className="flex-1">
               
                <View className="flex-1 px-5">
                
                {/* Header */}
                <View className="mb-8">
                    <Text className="text-3xl font-tektur-semibold text-white mb-3">
                    Create Account
                    </Text>
                    <Text className="text-base text-gray-400 leading-6 font-inter-medium">
                    There are many variations of passages of Lorem{'\n'}
                    ipsum available, but the majority...
                    </Text>
                </View>

                {/* First Name & Last Name Row */}
                <View className="flex-row gap-3 mb-5">
                    {/* First Name */}
                    <View className="flex-1">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                        First Name
                    </Text>
                    <BlurView
                        className="rounded-xl overflow-hidden"
                        intensity={30}
                        tint="dark"
                        style={{
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <View className="flex-row items-center px-4 py-4">
                        <Text className="text-gray-400 text-base mr-3">👤</Text>
                        <TextInput
                            className="flex-1 text-white text-base"
                            placeholder="Ibrahim Afridi"
                            placeholderTextColor="#9ca3af"
                            value={firstName}
                            onChangeText={setFirstName}
                            autoCapitalize="words"
                        />
                        </View>
                    </BlurView>
                    </View>

                    {/* Last Name */}
                    <View className="flex-1">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                        Last Name
                    </Text>
                    <BlurView
                        className="rounded-xl overflow-hidden"
                        intensity={30}
                        tint="dark"
                        style={{
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <View className="flex-row items-center px-4 py-4">
                        <Text className="text-gray-400 text-base mr-3">👤</Text>
                        <TextInput
                            className="flex-1 text-white text-base"
                            placeholder="Ibrahim Afridi"
                            placeholderTextColor="#9ca3af"
                            value={lastName}
                            onChangeText={setLastName}
                            autoCapitalize="words"
                        />
                        </View>
                    </BlurView>
                    </View>
                </View>

                {/* Email Field */}
                <View className="mb-5">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                    Email
                    </Text>
                    <BlurView
                    className="rounded-xl overflow-hidden"
                    intensity={30}
                    tint="dark"
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
                        placeholder="Ibrahim Afridi"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        />
                    </View>
                    </BlurView>
                </View>

                {/* Password Field */}
                <View className="mb-5">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                    Password
                    </Text>
                    <BlurView
                    className="rounded-xl overflow-hidden"
                    intensity={30}
                    tint="dark"
                    style={{
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    >
                    <View className="flex-row items-center px-4 py-4">
                        <TextInput
                        className="flex-1 text-white text-base"
                        placeholder="••••••••"
                        placeholderTextColor="#9ca3af"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        />
                        <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="ml-3"
                        >
                        <Text className="text-gray-400 text-lg">
                            👁️
                        </Text>
                        </TouchableOpacity>
                    </View>
                    </BlurView>
                </View>

                {/* Confirm Password Field */}
                <View className="mb-6">
                    <Text className="text-white text-base font-tektur-semibold mb-3">
                    Confirm Password
                    </Text>
                    <BlurView
                    className="rounded-xl overflow-hidden"
                    intensity={30}
                    tint="dark"
                    style={{
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                    >
                    <View className="flex-row items-center px-4 py-4">
                        <TextInput
                        className="flex-1 text-white text-base"
                        placeholder="••••••••"
                        placeholderTextColor="#9ca3af"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
                        />
                        <TouchableOpacity
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="ml-3"
                        >
                        <Text className="text-gray-400 text-lg">
                            👁️
                        </Text>
                        </TouchableOpacity>
                    </View>
                    </BlurView>
                </View>

                {/* Terms & Conditions */}
                <View className="flex-row items-start mb-8">
                    <TouchableOpacity
                    className="mr-3 mt-1"
                    onPress={() => setAgreeTerms(!agreeTerms)}
                    >
                    <View 
                        className={`w-5 h-5 rounded border-2 items-center justify-center ${
                        agreeTerms ? 'bg-lime-500 border-lime-500' : 'border-gray-400'
                        }`}
                    >
                        {agreeTerms && (
                        <Text className="text-white text-xs font-bold">✓</Text>
                        )}
                    </View>
                    </TouchableOpacity>
                    
                    <View className="flex-1 flex-row flex-wrap">
                    <Text className="text-white text-base font-tektur-medium">
                        By agreeing to the{' '}
                    </Text>
                    <TouchableOpacity onPress={handleTerms}>
                        <Text className="text-lime-500 text-base font-inter-medium">
                        Terms & Condition
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>

                {/* Get Started Button */}
                <TouchableOpacity 
                    className={`py-4 rounded-xl items-center mb-6 ${"bg-[#a3e636]"}`}
                    onPress={() => {}}
                >
                    <Text className="text-base font-semibold text-black font-tektur-semibold">
                    Get Started
                    </Text>
                </TouchableOpacity>

                {/* Login Link */}
                <View className="flex-row justify-center items-center">
                    <Text className="text-white text-base font-tektur-semibold">
                    Do you have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <Text className="text-lime-500 text-base font-tektur-semibold">
                        Login
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    </View>

  );
};

export default CreateAccountScreen;