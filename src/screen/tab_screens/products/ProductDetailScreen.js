import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft, Heart } from 'lucide-react-native';
import ProductReviewComponent from '../video/ProductReviewComponent';
import ProfileCard from './ProfileCard';
import ProductDetailsComponent from './ProductDetailsComponent';
import AddToCart from './AddToCart';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const navigation = useNavigation()

  const productImages = [
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
  ];

  const handleBack = () => {
    console.log('Back pressed');
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log('Favorite toggled');
  };



  return (
    <View className="flex-1 bg-[#060f15]">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1">
        {/* Image Section with Navigation */}
        <View className="relative h-96 bg-gray-300">
          {/* Main Product Image */}
          <Image
            source={{ uri: productImages[selectedImage] }}
            className="w-full h-full"
            resizeMode="cover"
          />

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-20 left-5 w-10 h-10 bg-white/30 rounded-full items-center justify-center"
            activeOpacity={0.7}
          >
            <ChevronLeft color="#ffffff" size={24} />
          </TouchableOpacity>

          {/* Favorite Button */}
          <TouchableOpacity
            onPress={handleFavorite}
            className="absolute top-20 right-5"
            activeOpacity={0.7}
          >
            <Heart 
              color="#ffffff" 
              size={28}
              fill={isFavorite ? "#ffffff" : "transparent"}
            />
          </TouchableOpacity>

          {/* Thumbnail Images */}
          <View className="absolute bottom-0 left-0 right-0">
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              className="px-5 pb-5"
              contentContainerStyle={{ gap: 12 }}
            >
              {productImages.map((image, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedImage(index)}
                  activeOpacity={0.8}
                >
                  <View 
                    className={`rounded-2xl overflow-hidden ${
                      selectedImage === index ? 'border-2 border-white' : ''
                    }`}
                  >
                    <Image
                      source={{ uri: image }}
                      className="w-20 h-20"
                      resizeMode="cover"
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Product Info Section */}
        <View className=" px-5 pt-6 pb-8">
          {/* Price */}
          <Text className="text-lime-500 text-4xl font-tektur-semibold mb-4">
            $10.99
          </Text>

          {/* Title */}
          <Text className="text-white text-2xl font-tektur-semibold mb-4 leading-8">
            Gucci hole of white single collar{'\n'}t-shirt exchange
          </Text>

          {/* Description */}
          <Text className="text-gray-400 text-base font-inter-medium leading-6">
            Lorem ipsum dolor sit amet, consectetur our adipiscing{'\n'}
            elit. Maecenas henderit luctus libero accused vulputate...
          </Text>
        </View>
        <View className="px-5">
            <ProfileCard/>
            <ProductDetailsComponent/>
            <ProductReviewComponent/>
            <AddToCart/>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailScreen;