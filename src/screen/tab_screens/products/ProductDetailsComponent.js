import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const ProductDetailsComponent = () => {
  const [selectedWeight, setSelectedWeight] = React.useState(null);
  const [selectedColor, setSelectedColor] = React.useState(null);

  const weights = ['50 ML', '100 ML', '250 ML', '500 ML', '1000 ML'];

  const colors = [
    { name: 'Blue', code: '#7B93C7' },
    { name: 'Purple', code: '#9B7FB5' },
    { name: 'Orange', code: '#D89B6A' },
    { name: 'Green', code: '#8FB58A' },
    { name: 'Yellow', code: '#D4D47A' },
    { name: 'Black', code: '#5A5A5A' },
    { name: 'Pink', code: '#C89FAA' },
    { name: 'Red', code: '#C87B7B' },
    { name: 'Gray', code: '#8B8B8B' },
    { name: 'Blue', code: '#5BA3D4' },
    { name: 'White', code: '#E5E5E5' }
  ];

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1 ">
        {/* Product Details Title */}
        <Text className="text-white text-2xl font-bold mb-6">
          Product details
        </Text>

        {/* Weight Section */}
        <View className="mb-6">
          <Text className="text-white text-lg font-medium mb-4">
            Weight
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {weights.map((weight, index) => (
              <TouchableOpacity
                key={index}
                className={`px-6 py-3 rounded-xl ${
                  selectedWeight === weight
                    ? 'bg-gray-600'
                    : 'bg-gray-700/40'
                }`}
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
                onPress={() => setSelectedWeight(weight)}
                activeOpacity={0.8}
              >
                <Text className="text-gray-300 text-base">
                  {weight}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Divider */}
        <View 
          className="h-px mb-6"
          style={{ backgroundColor: 'rgba(75, 85, 99, 0.3)' }}
        />

        {/* Category Section */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-white text-lg font-medium">
            Category
          </Text>
          <Text className="text-gray-400 text-base">
            Supplement
          </Text>
        </View>

        {/* Divider */}
        <View 
          className="h-px mb-6"
          style={{ backgroundColor: 'rgba(75, 85, 99, 0.3)' }}
        />

        {/* Brand Section */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-white text-lg font-medium">
            Brand
          </Text>
          <Text className="text-gray-400 text-base">
            Best Body
          </Text>
        </View>

        {/* Divider */}
        <View 
          className="h-px mb-6"
          style={{ backgroundColor: 'rgba(75, 85, 99, 0.3)' }}
        />

        {/* Color Section */}
        <View className="mb-8">
          <Text className="text-white text-lg font-medium mb-4">
            Color
          </Text>
          
          {/* First Row of Colors */}
          <View className="flex-row justify-between mb-6">
            {colors.slice(0, 5).map((color, index) => (
              <TouchableOpacity
                key={index}
                className="items-center"
                onPress={() => setSelectedColor(color.name + index)}
                activeOpacity={0.7}
              >
                <View
                  className={`w-12 h-12 rounded-full mb-2 ${
                    selectedColor === color.name + index
                      ? 'border-2 border-white'
                      : ''
                  }`}
                  style={{ backgroundColor: color.code }}
                />
                <Text className="text-gray-400 text-sm">
                  {color.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Second Row of Colors */}
          <View className="flex-row justify-between">
            {colors.slice(5, 11).map((color, index) => (
              <TouchableOpacity
                key={index + 5}
                className="items-center"
                onPress={() => setSelectedColor(color.name + (index + 5))}
                activeOpacity={0.7}
              >
                <View
                  className={`w-12 h-12 rounded-full mb-2 ${
                    selectedColor === color.name + (index + 5)
                      ? 'border-2 border-white'
                      : ''
                  }`}
                  style={{ backgroundColor: color.code }}
                />
                <Text className="text-gray-400 text-sm">
                  {color.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsComponent;