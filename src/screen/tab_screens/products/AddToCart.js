import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Minus, Plus } from 'lucide-react-native';

const AddToCartButton = ({ onAddToCart, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = React.useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(quantity);
    } else {
      console.log(`Add to cart: ${quantity} items`);
    }
  };

  return (
    <View className="flex-row items-center gap-4">
      {/* Add To Cart Button */}
      <TouchableOpacity
        className="flex-1 bg-lime-500 py-4 rounded-full items-center"
        onPress={handleAddToCart}
        activeOpacity={0.8}
      >
        <Text className="text-black text-lg font-bold">
          Add To Cart
        </Text>
      </TouchableOpacity>

      {/* Quantity Controls */}
      <View className="flex-row items-center gap-4">
        {/* Minus Button */}
        <TouchableOpacity
          className="w-12 h-12 bg-gray-700 rounded-full items-center justify-center"
          onPress={handleDecrease}
          activeOpacity={0.7}
        >
          <Minus color="#ffffff" size={20} strokeWidth={3} />
        </TouchableOpacity>

        {/* Quantity Display */}
        <Text className="text-white text-2xl font-medium min-w-8 text-center">
          {quantity}
        </Text>

        {/* Plus Button */}
        <TouchableOpacity
          className="w-12 h-12 bg-gray-700 rounded-full items-center justify-center"
          onPress={handleIncrease}
          activeOpacity={0.7}
        >
          <Plus color="#ffffff" size={20} strokeWidth={3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Example Usage Component
const AddToCart = () => {
  const handleAddToCart = (quantity) => {
    console.log(`Adding ${quantity} items to cart`);
    // Add your cart logic here
  };

  return (
    <View className="flex-1 justify-center pb-16">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <AddToCartButton onAddToCart={handleAddToCart} initialQuantity={1} />
      
    </View>
  );
};

export default AddToCart;