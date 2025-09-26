import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Heart } from 'lucide-react-native';

const SearchedProductsComponent = () => {
  const [favorites, setFavorites] = React.useState({});

  const handleProductPress = (productId) => {
    console.log(`Product ${productId} pressed`);
  };

  const handleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
    console.log(`Favorite toggled for product ${productId}`);
  };

  const productsData = [
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

  return (
    <View className="flex-1 ">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1 px-5 pt-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold mb-3">
            Searched Products
          </Text>
          <Text className="text-gray-400 text-base leading-6">
            There are many variations of passages of Lorem Ipsum{'\n'}
            but the majority have suffered available
          </Text>
        </View>

        {/* Products Grid */}
        <View className="flex-row flex-wrap justify-between">
          {productsData.map((product, index) => (
            <TouchableOpacity
              key={product.id}
              className="w-[48%] mb-4"
              onPress={() => handleProductPress(product.id)}
            >
              <BlurView
                className="rounded-2xl overflow-hidden"
                intensity={50}
                tint="dark"
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
                        size={20}
                        fill={favorites[product.id] ? "#ef4444" : "transparent"}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Product Image */}
                  <View className="items-center mb-4">
                    <Image
                      source={product.image}
                      className="w-20 h-20 rounded-xl"
                      resizeMode="cover"
                    />
                  </View>

                  {/* Product Title */}
                  <Text className="text-white text-base font-bold text-center mb-2">
                    {product.title}
                  </Text>

                  {/* Product Description */}
                  <Text className="text-gray-400 text-xs text-center mb-4 leading-4">
                    {product.description}
                  </Text>

                  {/* Product Price */}
                  <Text className="text-lime-500 text-lg font-bold text-center">
                    {product.price}
                  </Text>
                </View>
              </BlurView>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchedProductsComponent;