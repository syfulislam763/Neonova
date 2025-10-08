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
import { Heart, Dumbbell, PlayCircle, Star, ArrowRight } from 'lucide-react-native';

const TabbedProductsTraining = () => {
  const [activeTab, setActiveTab] = React.useState('Products');
  const [favorites, setFavorites] = React.useState({});

  const products = [
    
    {
      id: 1,
      title: "Boxing Gloves",
      description: "There are many variations of passages Lorem Ipsum...",
      image: require("../../../../assets/img/product2.png"),
      price: "$10.99"
    },
    {
      id: 2,
      title: "Boxing Gloves",
      description: "There are many variations of passages Lorem Ipsum...",
      image: require("../../../../assets/img/product1.png"),
      price: "$10.99"
    },
    {
      id: 3,
      title: "Boxing Gloves",
      description: "There are many variations of passages Lorem Ipsum...",
      image:require("../../../../assets/img/product1.png"),
      price: "$10.99"
    },
    {
      id: 4,
      title: "Boxing Gloves",
      description: "There are many variations of passages Lorem Ipsum...",
      image: require("../../../../assets/img/product2.png"),
      price: "$10.99"
    }
  ];

  const handleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleAddToCart = () => {
    console.log('Add to cart pressed');
  };

  return (
    <View className="flex-1 ">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Tab Navigation */}
        <View className="px-5 pt-8 pb-6">
          <View className="flex-row gap-4">
            <TouchableOpacity
              className={`flex-1 py-4 rounded-2xl items-center ${
                activeTab === 'Products' ? 'bg-gray-700' : 'bg-gray-800/50'
              }`}
              style={{
                
              }}
              onPress={() => setActiveTab('Products')}
              activeOpacity={0.8}
            >
              <Text
                className={`text-lg font-tektur-semibold ${
                  activeTab === 'Products' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Products
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 py-4 rounded-2xl items-center ${
                activeTab === 'Training' ? 'bg-gray-700' : 'bg-gray-800/50'
              }`}
              style={{
               
              }}
              onPress={() => setActiveTab('Training')}
              activeOpacity={0.8}
            >
              <Text
                className={`text-lg font-tektur-semibold ${
                  activeTab === 'Training' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Training
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Content */}
        <View className="px-5">
          {activeTab === 'Products' ? (
            // Products Tab Content
            <View>
              <Text className="text-white text-3xl font-tektur-semibold mb-4">
                Trainer Products
              </Text>
              <Text className="text-gray-400 text-base mb-6 font-inter-medium leading-6">
                There are many variations of passages of Lorem Ipsum{'\n'}
                but the majority have suffered available
              </Text>

              {/* Product Grid */}
              <View className="flex-row flex-wrap justify-between">
                {products.map((product) => (
                  <TouchableOpacity
                    key={product.id}
                    className="w-[48%] mb-4"
                    activeOpacity={0.8}
                  >
                    <BlurView
                      className="rounded-2xl overflow-hidden"
                      intensity={30}
                      tint="light"
                      style={{
                   
                      }}
                    >
                      <View className="p-4">
                        {/* Heart Icon */}
                        <View className="absolute top-4 right-4 z-10">
                          <TouchableOpacity
                            onPress={() => handleFavorite(product.id)}
                            activeOpacity={0.7}
                          >
                            <Heart 
                              color={favorites[product.id] ? "#ef4444" : "#9ca3af"} 
                              size={22}
                              fill={favorites[product.id] ? "#ef4444" : "transparent"}
                            />
                          </TouchableOpacity>
                        </View>

                        {/* Product Image */}
                        <View className="items-center mb-4 mt-2">
                          <Image
                            source={product.image}
                            className="w-28 h-28"
                            resizeMode="contain"
                          />
                        </View>

                        {/* Product Title */}
                        <Text className="text-white text-base font-tektur-semibold text-center mb-2">
                          {product.title}
                        </Text>

                        {/* Product Description */}
                        <Text className="text-gray-400 font-tektur-semibold text-xs text-center mb-4 leading-4">
                          {product.description}
                        </Text>

                        {/* Product Price */}
                        <Text className="text-lime-500 text-xl font-tektur-semibold text-center">
                          ${product.price}
                        </Text>
                      </View>
                    </BlurView>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            // Training Tab Content
            <View>
              <Text className="text-white text-3xl font-tektur-semibold mb-4">
                Training Session
              </Text>
              <Text className="text-gray-400 font-inter-medium text-base mb-6 leading-6">
                There are many variations of passages of Lorem Ipsum{'\n'}
                but the majority have suffered available
              </Text>

              {/* Training Card */}
              <BlurView
                className="rounded-2xl overflow-hidden mb-6"
                intensity={10}
                tint="dark"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <View className="overflow-hidden">
                  {/* Training Image */}
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
                    }}
                    className="w-full h-48 rounded-t-2xl"
                    resizeMode="cover"
                  />

                  <View className="p-5">
                    {/* Title */}
                    <Text className="text-white text-xl font-tektur-semibold mb-3">
                      Full Body & Arm Exercise
                    </Text>

                    {/* Description */}
                    <Text className="text-gray-400 font-inter-medium text-base mb-4 leading-6">
                      There are many variations of passages of Lorem Ipsum  but the majority have suffered available
                    </Text>

                    {/* Stats Row */}
                    <View className="flex-row items-center mb-5">
                      <View className="flex-row items-center mr-6">
                        <Dumbbell color="#84cc16" size={16} />
                        <Text className="text-white font-tektur-semibold text-sm ml-2">
                          10 Expercise
                        </Text>
                      </View>
                      
                      <View className="flex-row items-center">
                        <PlayCircle color="#84cc16" size={16} />
                        <Text className="text-white font-tektur-semibold text-sm ml-2">
                          8 Lesson
                        </Text>
                      </View>
                    </View>

                    {/* Trainer Info */}
                    <View className="flex-row items-center justify-between mb-5">
                      <View className="flex-row items-center">
                        <Image
                          source={{
                            uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
                          }}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <Text className="text-white font-tektur-semibold text-base">
                          Ibrahim Afridi
                        </Text>
                      </View>
                      
                      <View className="flex-row items-center">
                        <Star color="#fbbf24" size={16} fill="#fbbf24" />
                        <Text className="text-white font-tektur-semibold text-base ml-1">
                          4.7 (12)
                        </Text>
                      </View>
                    </View>

                    {/* Add to Cart Button */}
                    <TouchableOpacity
                      className="bg-lime-500 py-4 rounded-xl flex-row items-center justify-center"
                      onPress={handleAddToCart}
                      activeOpacity={0.8}
                    >
                      <Text className="text-black text-base font-tektur-semibold mr-2">
                        Add To Cart
                      </Text>
                      <ArrowRight color="#000000" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </BlurView>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabbedProductsTraining;