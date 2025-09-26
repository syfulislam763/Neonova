import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Star } from 'lucide-react-native';

const ProductReviewComponent = () => {
  const reviews = [
    {
      id: 1,
      name: "Ibrahim Afridi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      timeAgo: "2 days ago",
      rating: 5,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      name: "Ibrahim Afridi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      timeAgo: "2 days ago",
      rating: 5,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: 3,
      name: "Ibrahim Afridi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      timeAgo: "2 days ago",
      rating: 5,
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  const renderStars = (rating) => {
    return (
      <View className="flex-row">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            color="#fbbf24"
            fill="#fbbf24"
          />
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      
      <ScrollView className="flex-1 mt-9">
        {/* Header */}
        <Text className="text-white text-2xl font-bold mb-6">
          Product review
        </Text>

        {/* Reviews List */}
        {reviews.map((review, index) => (
          <View key={review.id}>
            <View className="mb-6">
              {/* User Info Row */}
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center">
                  <Image
                    source={{ uri: review.avatar }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <Text className="text-white text-base font-semibold">
                    {review.name}
                  </Text>
                </View>
                <Text className="text-gray-400 text-sm">
                  {review.timeAgo}
                </Text>
              </View>

              {/* Star Rating */}
              <View className="mb-4">
                {renderStars(review.rating)}
              </View>

              {/* Review Text */}
              <Text className="text-gray-300 text-base leading-6 mb-6">
                {review.review}
              </Text>
            </View>

            {/* Divider Line - except for last item */}
            {index < reviews.length - 1 && (
              <View 
                className="h-px bg-gray-700 mb-6"
                style={{ backgroundColor: 'rgba(75, 85, 99, 0.5)' }}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductReviewComponent;