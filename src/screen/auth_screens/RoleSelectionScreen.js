import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const bg = require("../../../assets/img/bg8.png")

const RoleSelectionScreen = () => {

    const navigation = useNavigation()
  const [selectedRole, setSelectedRole] = React.useState(null);

  const handleTrainerPress = () => {
    setSelectedRole('trainer');
    console.log('Trainer selected');
  };

  const handleLearnerPress = () => {
    setSelectedRole('learner');
    console.log('Learner selected');
  };

  const handleJoinNow = () => {
    if (selectedRole) {
      console.log(`Joining as ${selectedRole}`);
    } else {
      console.log('Please select a role first');
    }
  };

  return (


    <View className="flex-1 bg-black">
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        <ImageBackground
        source={bg}
        className="flex-1 justify-between"
        resizeMode="cover"
        >
    
        
            <SafeAreaView className="flex-1">
                
                <View className="px-5 pt-16">

                    {/* Header */}
                    <View className="mb-10">
                        <Text className="text-3xl font-tektur-semibold text-white mb-4 leading-9">
                        Choose your role to{'\n'}get started
                        </Text>
                        <Text className="text-base text-gray-400 font-tektur-semibold leading-6">
                        There are many variations of passages of lorem{'\n'}
                        available, but the majority...
                        </Text>
                    </View>

                    {/* Role Cards */}
                    <View className="flex-row justify-between mb-10 gap-4">
                        {/* Trainer Card */}
                        <TouchableOpacity 
                        className="flex-1 h-48"
                        onPress={handleTrainerPress}
                        activeOpacity={0.8}
                        >
                        <BlurView
                            className={`flex-1 rounded-2xl overflow-hidden ${selectedRole=="trainer"?"border border-gray-500":""}`}
                            intensity={50}
                            tint="light"
                        >
                            <View className="flex-1 p-5 items-start justify-center">
                            {/* Trainer Icon */}
                            <View className="w-14 h-14 rounded-full bg-white/10 items-center justify-center mb-4">
                                <Text className="text-3xl">🏋️</Text>
                            </View>
                            <Text className="text-xl font-tektur-semibold text-white mb-2">
                                Trainer
                            </Text>
                            <Text className="text-sm text-gray-400 text-left font-tektur-medium leading-5">
                                Join as a trainer and{'\n'}make difference.
                            </Text>
                            </View>
                        </BlurView>
                        </TouchableOpacity>

                        {/* Learner Card */}
                        <TouchableOpacity 
                        className="flex-1 h-48"
                        onPress={handleLearnerPress}
                        >
                        <BlurView
                            className={`flex-1 rounded-2xl overflow-hidden ${selectedRole=="learner"?"border border-gray-500":""}`}
                            intensity={50}
                            tint="light"
                        >
                            <View className="flex-1 p-5 items-start justify-center">
                            {/* Learner Icon */}
                            <View className="w-14 h-14 rounded-full bg-white/10 items-center justify-center mb-4">
                                <Text className="text-3xl">💪</Text>
                            </View>
                            <Text className="text-xl font-tektur-semibold text-white mb-2">
                                Learner
                            </Text>
                            <Text className="text-sm text-gray-400 text-left font-inter-medium leading-5">
                                Join as a learner and{'\n'}make difference.
                            </Text>
                            </View>
                        </BlurView>
                        </TouchableOpacity>
                    </View>

                    {/* Join Now Button */}
                    <TouchableOpacity 
                        className={`py-4 rounded-xl items-center mt-auto mb-10 ${
                        'bg-[#a3e636]'
                        }`}
                        onPress={() => navigation.navigate("CreateAccountScreen")}
                    >
                        <Text className="text-base font-semibold font-tektur-semibold text-white">
                        Join Now
                        </Text>
                    </TouchableOpacity>
                    </View>
            
            </SafeAreaView>
        </ImageBackground>
    </View>

    
  );
};

export default RoleSelectionScreen;