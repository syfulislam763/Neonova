import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Heart, MessageCircle, Share } from 'lucide-react-native';

const SocialPostCard = ({ 
  userName, 
  userAvatar, 
  timeAgo, 
  postText, 
  postImage = null, 
  likedBy = null, 
  likes, 
  comments, 
  shares 
}) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    console.log('Comment pressed');
  };

  const handleShare = () => {
    console.log('Share pressed');
  };

  return (
    <View className="mb-6 bg-[#0f1c25] p-5 rounded-2xl">
      {/* User Info Header */}
      <View className="flex-row items-center mb-4">
        <Image
          source={{ uri: userAvatar }}
          className="w-12 h-12 rounded-full mr-3"
        />
        <View className="flex-1">
          <Text className="text-white text-base font-tektur-semibold">
            {userName}
          </Text>
          <Text className="text-gray-400 font-tektur-semibold text-sm">
            {timeAgo}
          </Text>
        </View>
      </View>

      {/* Post Text */}
      <Text className="text-white text-base mb-4 font-tektur-semibold leading-6">
        {postText}
      </Text>

      {/* Post Image - Only render if image exists */}
      {postImage && (
        <Image
          source={{ uri: postImage }}
          className="w-full h-64 rounded-2xl mb-4"
          resizeMode="cover"
        />
      )}

      {/* Liked by Info - Only render if likedBy exists */}
      {likedBy && (
        <View className="flex-row items-center mb-4">
          {/* Profile avatars for liked by */}
          <View className="flex-row mr-3">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop' }}
              className="w-6 h-6 rounded-full border-2 border-slate-800"
            />
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop' }}
              className="w-6 h-6 rounded-full border-2 border-slate-800 -ml-2"
            />
          </View>
          <Text className="text-gray-400 text-sm font-tektur-semibold">
            {likedBy}
          </Text>
        </View>
      )}

      {/* Action Buttons */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleLike}
          activeOpacity={0.7}
        >
          <Heart 
            color={isLiked ? "#ef4444" : "#ef4444"} 
            size={22} 
            fill="#ef4444"
          />
          <Text className="text-white text-base ml-2 mr-8 font-tektur-semibold">
            {likes}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleComment}
          activeOpacity={0.7}
        >
          <MessageCircle color="#9ca3af" size={22} />
          <Text className="text-gray-400 text-base ml-2 mr-8 font-tektur-semibold">
            {comments}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleShare}
          activeOpacity={0.7}
        >
          <Share color="#9ca3af" size={22} />
          <Text className="text-gray-400 text-base ml-2 font-tektur-semibold">
            {shares}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Example Usage Component
const SocialFeed = () => {
  const posts = [
    {
      id: 1,
      userName: "Ibrahim Afridi",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      timeAgo: "14 minutes ago",
      postText: "Exercising clears my mind, boosts my energy level and feels absolutely amazing!",
      postImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      likedBy: "Liked by Ronnie Coleman and 1.2k people",
      likes: "1.2k",
      comments: "469",
      shares: "345"
    },
    {
      id: 2,
      userName: "John Doe",
      userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      timeAgo: "2 hours ago",
      postText: "Just finished an amazing workout session! Feeling pumped and ready to take on the day. Consistency is key to achieving your fitness goals.",
      postImage: null, // Text only post
      likedBy: null,
      likes: "856",
      comments: "124",
      shares: "89"
    },
    {
      id: 3,
      userName: "Sarah Johnson",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      timeAgo: "5 hours ago",
      postText: "Morning yoga session complete! Starting the day with mindfulness and movement makes all the difference.",
      postImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      likedBy: "Liked by Mike Ross and 2.4k people",
      likes: "2.4k",
      comments: "632",
      shares: "421"
    }
  ];

  return (
    <View className="flex-1 ">

        {posts.map((post) => (
          <SocialPostCard
            key={post.id}
            userName={post.userName}
            userAvatar={post.userAvatar}
            timeAgo={post.timeAgo}
            postText={post.postText}
            postImage={post.postImage}
            likedBy={post.likedBy}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        ))}
    </View>
  );
};

export default SocialFeed;