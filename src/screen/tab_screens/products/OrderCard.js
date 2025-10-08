import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft,Bell } from 'lucide-react-native';

const OrderCard = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Arm Exercise',
      description: 'There are many variations offer passages.',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    },
    {
      id: 2,
      title: 'Arm Exercise',
      description: 'There are many variations offer passages.',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    },
    {
      id: 3,
      title: 'Arm Exercise',
      description: 'There are many variations offer passages.',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    },
    {
      id: 4,
      title: 'Arm Exercise',
      description: 'There are many variations offer passages.',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    },
    {
      id: 5,
      title: 'Arm Exercise',
      description: 'There are many variations offer passages.',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
    },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 56.00;
  const discount = 56.00;
  const total = subtotal + deliveryFee - discount;

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#0a0e1a]">
      <StatusBar barStyle="light-content" backgroundColor="#0a0e1a" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pb-1">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3" onPress={() => navigation.goBack()}>
            <ChevronLeft color="#ffffff" size={24} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-tektur-semibold">
            My Cart
          </Text>
        </View>
        <TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
            <Bell color="#ffffff" size={24} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Cart Items */}
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}
      >
        {cartItems.map((item) => (
          <View
            key={item.id}
            className="bg-[#1a202c]/80 rounded-2xl p-3 mb-3 flex-row"
          >
            {/* Image */}
            <Image
              source={{ uri: item.image }}
              className="w-[70px] h-[70px] rounded-xl mr-3"
              resizeMode="cover"
            />

            {/* Content */}
            <View className="flex-1 justify-between">
              <View>
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="text-white text-base font-tektur-semibold flex-1">
                    {item.title}
                  </Text>
                  <TouchableOpacity onPress={() => removeItem(item.id)}>
                    <Text className="text-red-500 text-lg ml-2">×</Text>
                  </TouchableOpacity>
                </View>
                <Text className="text-white/50 text-xs font-tektur-semibold mb-2">
                  {item.description}
                </Text>
              </View>

              {/* Price and Quantity */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[#a3e635] text-base font-tektur-semibold">
                  ${item.price.toFixed(2)}
                </Text>

                {/* Quantity Controls */}
                <View className="flex-row items-center bg-black/30 rounded-lg px-2 py-1">
                  <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                    <Text className="text-white text-lg px-2 font-tektur-semibold">+</Text>
                  </TouchableOpacity>
                  <Text className="text-white text-sm px-3 font-tektur-semibold">
                    {item.quantity}
                  </Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                    <Text className="text-white text-lg px-2 font-tektur-semibold">−</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Summary Section */}
        <View className="mt-5 mb-5">
          <View className="flex-row justify-between mb-3">
            <Text className="text-white/60 text-sm font-tektur-semibold">Subtotal</Text>
            <Text className="text-white text-sm font-tektur-semibold">
              ${subtotal.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-white/60 text-sm font-tektur-semibold">Delivery Fee</Text>
            <Text className="text-white text-sm font-semibold">
              ${deliveryFee.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-white/60 text-sm font-tektur-semibold">Discount</Text>
            <Text className="text-white text-sm font-tektur-semibold">
              ${discount.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Checkout Section */}
      <View className="bg-[#0a0e1a] px-4 pt-4  border-t border-white/10">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="bg-[#a3e635] py-4 px-10 rounded-xl flex-1 mr-3"
            activeOpacity={0.8}
          >
            <Text className="text-black text-base font-tektur-semibold text-center">
              Checkout
            </Text>
          </TouchableOpacity>
          <View className="py-4 px-5">
            <Text className="text-white text-xl font-tektur-semibold">
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderCard;