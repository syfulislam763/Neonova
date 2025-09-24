import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.5;
const SPACING = 25;

const data = [
  {
    id: "1",
    title: "Personal Trainers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority...",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
  },
  {
    id: "2",
    title: "AI Assistance",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority...",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
  },
  {
    id: "3",
    title: "Support",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority...",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
  },
];

const circularData = [...data];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function FitnessCarousel() {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    // Start in the middle copy
    setTimeout(() => {
      flatListRef.current?.scrollToOffset({
        offset: 1 * (CARD_WIDTH + SPACING),
        animated: false,
      });
    }, 50);
  }, []);

  return (
    <View className="flex-1 ">
      <AnimatedFlatList
        ref={flatListRef}
        data={circularData}
        keyExtractor={(item, index) => item.id + index}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2.4,
          alignItems:'flex-end'
        }}
        renderItem={({ item, index }) => {
          return <Card item={item} index={index} scrollX={scrollX} />;
        }}
      />
    </View>
  );
}

function Card({ item, index, scrollX }) {
  const animatedStyle = useAnimatedStyle(() => {
    const position = index * (CARD_WIDTH + SPACING);
    const diff = scrollX.value - position;

    const rotateX = interpolate(
      diff,
      [-CARD_WIDTH, 0, CARD_WIDTH],
      [30, 0, 30],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      diff,
      [-CARD_WIDTH, 0, CARD_WIDTH],
      [1, 1, 1],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      diff,
      [-CARD_WIDTH, 0, CARD_WIDTH],
      [1, 1, 1],
      Extrapolate.CLAMP
    );

    const translateY = interpolate(
      diff,
      [CARD_WIDTH, 0, CARD_WIDTH],
      [0, 0, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { perspective: 1000 },
        { rotateX: `${rotateX}deg` },
        { scale },
        { translateY },
      ],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: CARD_WIDTH,
          minHeight:270,
          marginHorizontal: SPACING / 2,
          borderRadius: 20,
        },
        animatedStyle
      ]}
      className="overflow-hidden"
    >

        <BlurView intensity={30} tint="light" className="flex-1 p-4 items-center rounded-2xl">
            <Image
                source={{ uri: item.image }}
                className="w-full h-44 rounded-xl mb-3"
            />
            <Text className="text-lg font-bold text-white mb-1 text-center font-tektur-semibold">
                {item.title}
            </Text>
            <Text className="text-sm text-neutral-200 text-center font-inter-semibold">
                {item.description}
            </Text>
        </BlurView>
    </Animated.View>
  );
}
