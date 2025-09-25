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
import { useAuth } from '../../context/AuthProvider';


const bg = require("../../../assets/img/bg5.png")
const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const {setIsAuthenticated} = useAuth()

  const handleLogin = () => {
    console.log('Login pressed', { email, password, rememberMe });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };


  const navingation = useNavigation()

  return (


    <View className="flex-1 bg-black">
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            
            <ImageBackground
            source={bg}
            className="flex-1 justify-between"
            resizeMode="cover"
            >
        
            
                <SafeAreaView className="flex-1">
                    <View className="flex-1 px-5 pt-16">
                    <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
                    
                    {/* Header */}
                    <View className="mb-8">
                        <Text className="text-3xl font-tektur-semibold text-white mb-3">
                        Welcome back!
                        </Text>
                        <Text className="text-base font-inter-medium text-gray-400 leading-6">
                        There are many variations of passages of Lorem{'\n'}
                        ipsum available, but the majority...
                        </Text>
                    </View>

                    {/* Email Field */}
                    <View className="mb-6">
                        <Text className="text-white text-base font-tektur-semibold mb-3">
                        Email
                        </Text>
                        <BlurView
                        className="rounded-xl overflow-hidden"
                        intensity={50}
                        tint="light"
                        style={{
                            
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

                    {/* Password Field */}
                    <View className="mb-6">
                        <Text className="text-white text-base font-tektur-semibold mb-3">
                        Password
                        </Text>
                        <BlurView
                        className="rounded-xl overflow-hidden"
                        intensity={50}
                        tint="light"
                        style={{
                            
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
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </Text>
                            </TouchableOpacity>
                        </View>
                        </BlurView>
                    </View>

                    {/* Remember Me & Forgot Password */}
                    <View className="flex-row items-center justify-between mb-8">
                        <TouchableOpacity
                        className="flex-row items-center"
                        onPress={() => setRememberMe(!rememberMe)}
                        >
                        <View 
                            className={`w-5 h-5 rounded border-2 mr-3 items-center justify-center ${
                            rememberMe ? 'bg-lime-500 border-lime-500' : 'border-gray-400'
                            }`}
                        >
                            {rememberMe && (
                            <Text className="text-white text-xs font-bold">✓</Text>
                            )}
                        </View>
                        <Text className="text-white text-base">
                            Remember me
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navingation.navigate("ForgotPasswordScreen")}>
                        <Text className="text-lime-500 text-base font-medium">
                            Forgot password?
                        </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity 
                        className="bg-lime-500 py-4 rounded-xl items-center mb-6"
                        onPress={() => setIsAuthenticated(true)}
                        activeOpacity={0.8}
                    >
                        <Text className="text-base font-semibold text-white">
                        Login
                        </Text>
                    </TouchableOpacity>
                    </View>
                
                </SafeAreaView>
            </ImageBackground>
        </View>
    
  );
};

export default LoginScreen;