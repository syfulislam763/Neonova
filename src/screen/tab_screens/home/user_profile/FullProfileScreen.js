import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { ChevronLeft, Bell, Flame, Edit, Dumbbell, PlayCircle, Star } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SearchedProductsComponent from '../SearchedProductsComponent';
import MyTrainingSessionScreen from './MyTrainingSessionScreen';


const FullProfileScreen = () => {
  const [activeTab, setActiveTab] = React.useState('Products');

  const handleBack = () => {
    console.log('Back pressed');
  };

  const handleNotification = () => {
    console.log('Notification pressed');
  };

  const handleUploadProducts = () => {
    console.log('Upload Products pressed');
  };

  const activityData = [
    { day: 'S', value: 30, height: 40 },
    { day: 'M', value: 60, height: 80 },
    { day: 'T', value: 40, height: 50 },
    { day: 'W', value: 70, height: 90 },
    { day: 'T', value: 50, height: 70 },
    { day: 'F', value: 80, height: 100 },
    { day: 'S', value: 45, height: 60 },
  ];

  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-slate-800">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-5 pb-6">
          <View className="flex-row items-center justify-between mb-6">
            {/* Left - Back and Profile */}
            <View className="flex-row items-center flex-1">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="w-10 h-10 bg-gray-700/50 rounded-full items-center justify-center mr-3"
                activeOpacity={0.7}
              >
                <ChevronLeft color="#ffffff" size={20} />
              </TouchableOpacity>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
                }}
                className="w-12 h-12 rounded-full mr-3"
              />

              <View>
                <Text className="text-white text-lg font-bold">
                  Artus Schulz
                </Text>
                <Text className="text-gray-400 text-sm">
                  October 25, 2019
                </Text>
              </View>
            </View>

            {/* Right - Notification */}
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfileScreen")}
              className="w-10 h-10 bg-gray-700/50 rounded-full items-center justify-center"
              activeOpacity={0.7}
            >
              <Edit color="#84cc16" size={18} />
            </TouchableOpacity>
          </View>

        {/* Stats Section */}
        <View className="mb-6">
            <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={30}
            tint="light"
            style={{}}
            >
            <View className="flex-row p-5">
                {/* Age */}
                <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2">
                    Age
                </Text>
                <View className="flex-row items-baseline">
                    <Text className="text-white text-3xl font-bold">
                    28
                    </Text>
                    <Text className="text-gray-400 text-base ml-1">
                    yo
                    </Text>
                </View>
                </View>

                {/* Divider */}
                <View 
                className="w-px mx-4"
                style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
                />

                {/* Height */}
                <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2">
                    Height
                </Text>
                <View className="flex-row items-baseline">
                    <Text className="text-white text-3xl font-bold">
                    5.97
                    </Text>
                    <Text className="text-gray-400 text-base ml-1">
                    ft
                    </Text>
                </View>
                </View>

                {/* Divider */}
                <View 
                className="w-px mx-4"
                style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
                />

                {/* Weight */}
                <View className="flex-1">
                <Text className="text-gray-400 text-base mb-2">
                    Weight
                </Text>
                <View className="flex-row items-baseline">
                    <Text className="text-white text-3xl font-bold">
                    75
                    </Text>
                    <Text className="text-gray-400 text-base ml-1">
                    kilo
                    </Text>
                </View>
                </View>
            </View>
            </BlurView>
        </View>

        {/* About Section */}
        <View className="mb-6">
            <BlurView
            className="rounded-2xl overflow-hidden"
            intensity={30}
            tint="light"
            style={{
                
            }}
            >
            <View className="p-5">
                <Text className="text-white text-xl font-bold mb-4">
                About
                </Text>
                <Text className="text-gray-400 text-base leading-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry standard dummy text ever since when an unknown printer took in the galley.
                </Text>
            </View>
            </BlurView>
        </View>
        

          {/* Tabs */}
          <View className="flex-row gap-3 mb-6">
            <TouchableOpacity
              className={`flex-1 py-3 rounded-xl items-center ${
                activeTab === 'Products' ? 'bg-gray-700' : 'bg-gray-800/50'
              }`}
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onPress={() => setActiveTab('Products')}
              activeOpacity={0.8}
            >
              <Text className={`text-base font-semibold ${
                activeTab === 'Products' ? 'text-white' : 'text-gray-400'
              }`}>
                Products
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 py-3 rounded-xl items-center ${
                activeTab === 'Training' ? 'bg-gray-700' : 'bg-gray-800/50'
              }`}
              style={{
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onPress={() => setActiveTab('Training')}
              activeOpacity={0.8}
            >
              <Text className={`text-base font-semibold ${
                activeTab === 'Training' ? 'text-white' : 'text-gray-400'
              }`}>
                Training
              </Text>
            </TouchableOpacity>
          </View>

          {/* Upload Products Button */}
          <TouchableOpacity
            className="bg-lime-500 py-4 rounded-xl items-center mb-6"
            onPress={() => {
              if(activeTab=="Products"){
                navigation.navigate("AddProductScreen")
              }else{
                navigation.navigate("UploadTrainingScreen")
              }
            }}
            activeOpacity={0.8}
          >
            <Text className="text-black text-base font-bold">
              {activeTab=="Products"?"Upload Products":"Upload Training"}
            </Text>
          </TouchableOpacity>

          {/* Calories Chart */}
          <View className="flex-row items-center justify-between mb-6">
            <View className=" relative w-32 h-32 items-center justify-center mr-6">
              {/* Background Circle */}
              <View className="absolute w-32 h-32 rounded-full border-8 border-gray-700" />
              
              {/* Blue Progress */}
              <View 
                className="absolute w-32 h-32 rounded-full border-8 border-transparent"
                style={{
                  borderTopColor: '#6366f1',
                  borderRightColor: '#6366f1',
                  transform: [{ rotate: '45deg' }]
                }}
              />
              
              {/* Green Progress */}
              <View 
                className="absolute w-32 h-32 rounded-full border-8 border-transparent"
                style={{
                  borderBottomColor: '#84cc16',
                  borderLeftColor: '#84cc16',
                  transform: [{ rotate: '225deg' }]
                }}
              />

              <View className="items-center">
                <View className="mb-1">
                  <Flame color="#ef4444" size={20} />
                </View>
                <Text className="text-white text-xl font-bold">1500 Cal</Text>
                <Text className="text-gray-400 text-xs">Yesterday</Text>
              </View>
            </View>

            {/* Legend */}
            <View className="w-1/2">
              <View className="mb-3">
                <View className="flex-row items-center mb-1">
                  <View className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                  <Text className="text-gray-400 text-xs">Doing Nothing</Text>
                </View>
                <Text className="text-blue-500 text-base font-bold ml-5">33%</Text>
              </View>

              <View className="mb-3">
                <View className="flex-row items-center mb-1">
                  <View className="w-3 h-3 rounded-full bg-lime-500 mr-2" />
                  <Text className="text-gray-400 text-xs">Training Task</Text>
                </View>
                <Text className="text-lime-500 text-base font-bold ml-5">33%</Text>
              </View>

              <View>
                <View className="flex-row items-center mb-1">
                  <View className="w-3 h-3 rounded-full bg-gray-500 mr-2" />
                  <Text className="text-gray-400 text-xs">Meal Ratio</Text>
                </View>
                <Text className="text-gray-500 text-base font-bold ml-5">33%</Text>
              </View>
            </View>
          </View>

          {/* Activity Section */}
          <View>
            <View className="flex-row items-center mb-4">
              <Flame color="#ef4444" size={20} fill="#ef4444" />
              <Text className="text-white text-lg font-bold ml-2">Activity</Text>
            </View>

            {/* Activity Stats */}
            <View className="flex-row justify-between mb-4">
              <View>
                <Text className="text-white text-3xl font-bold">260</Text>
                <Text className="text-gray-400 text-sm">Daily</Text>
              </View>
              <View className="items-end">
                <Text className="text-white text-3xl font-bold">1731</Text>
                <Text className="text-gray-400 text-sm">This Week</Text>
              </View>
            </View>

            {/* Bar Chart */}
            <View className="flex-row items-end justify-between h-32">
              {activityData.map((item, index) => (
                <View key={index} className="items-center flex-1">
                  <View 
                    className="bg-blue-500 rounded-t-lg mb-2"
                    style={{ 
                      width: 20,
                      height: item.height 
                    }}
                  />
                  <Text className="text-gray-400 text-xs">{item.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View>
          {activeTab == "Products"?
            <SearchedProductsComponent/>
            :<MyTrainingSessionScreen/>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FullProfileScreen;