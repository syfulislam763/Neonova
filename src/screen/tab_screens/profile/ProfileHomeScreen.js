import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../home/HeaderComponent';
import SocialFeed from './SocialFeed';
import { Plus } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileHomeScreen = () => {

    const navigation = useNavigation()


    return (
        <SafeAreaView className="flex-1 px-5 bg-[#060f15] relative ">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

            
                <HeaderComponent/>

                <View className="my-7">
                    <Text className="text-white font-tektur-semibold text-3xl mb-3">Community Fitness</Text>
                    <Text className="text-[#9CA3AF] font-inter-medium text-sm">There are many variations of passages of Lorem Ipsum  but the majority have suffered available </Text>
                </View>

                <SocialFeed/>
                

            </ScrollView>

            <View className="justify-end items-end absolute bottom-5 right-0">
                    <TouchableOpacity
                        className="bg-white px-6 py-3 rounded-[5px] flex-row w-44 items-center justify-center"
                        onPress={() => navigation.navigate("CreatePostScreen")}
                    >
                        <View className="w-5 h-5 border-2 border-black rounded mr-3 items-center justify-center">
                            <Plus color="#000000" size={14} strokeWidth={3} />
                        </View>
                        <Text className="text-black text-base font-tektur-semibold">
                            Add Post
                        </Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default ProfileHomeScreen;
