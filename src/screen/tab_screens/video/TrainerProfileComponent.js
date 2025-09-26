import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { Star, Shield, Users, BookOpen } from 'lucide-react-native';

const TrainerProfileComponent = () => {
  return (
    <View className="flex-1 bg-[#0f1c25] mt-9 rounded-2xl p-3">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <View className="px-5">
        {/* Header Row */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Text className="text-white text-2xl font-bold mr-4">
              Trainer
            </Text>
            
          </View>
          
          <Text className="text-lime-500 text-lg font-semibold">
            Ibrahim Afridi
          </Text>
        </View>

        {/* Stats Grid */}
        <View>



            <View className="flex-row justify-between">

                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                    }}
                    className="w-12 h-12 rounded-full"
                />

                <View className="w-5/6">
                    {/* Row 1 */}
                    <View className="flex-row items-center justify-between mb-4">
                        {/* Overall Rating */}
                        <View className="flex-row items-center flex-1">
                        <Star color="#84cc16" size={16} fill="#84cc16" />
                        <Text className="text-gray-400 text-base ml-2">
                            Overall Rating
                        </Text>
                        </View>
                        <Text className="text-white text-base font-medium">
                        4.7
                        </Text>
                    </View>

                    {/* Row 2 */}
                    <View className="flex-row items-center justify-between mb-4">
                        {/* Total Reviews */}
                        <View className="flex-row items-center flex-1">
                        <Shield color="#84cc16" size={16} />
                        <Text className="text-gray-400 text-base ml-2">
                            Total Reviews
                        </Text>
                        </View>
                        <Text className="text-white text-base font-medium">
                        23K+ Review
                        </Text>
                    </View>

                    {/* Row 3 */}
                    <View className="flex-row items-center justify-between mb-4">
                        {/* Fitness Learner */}
                        <View className="flex-row items-center flex-1">
                        <Users color="#84cc16" size={16} />
                        <Text className="text-gray-400 text-base ml-2">
                            Fitness Learner
                        </Text>
                        </View>
                        <Text className="text-white text-base font-medium">
                        13k
                        </Text>
                    </View>

                    {/* Row 4 */}
                    <View className="flex-row items-center justify-between">
                        {/* Total Courses */}
                        <View className="flex-row items-center flex-1">
                        <BookOpen color="#84cc16" size={16} />
                        <Text className="text-gray-400 text-base ml-2">
                            Total Courses
                        </Text>
                        </View>
                        <Text className="text-white text-base font-medium">
                        67 Available
                        </Text>
                    </View>
                </View>
            </View>


        </View>
      </View>
    </View>
  );
};

export default TrainerProfileComponent;