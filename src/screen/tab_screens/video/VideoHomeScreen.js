import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutDetailScreen from './WorkoutDetailScreen';
import WhatYoullLearnComponent from './WhatYouWillLearnComponent';
import TrainerProfileComponent from './TrainerProfileComponent';
import TrainingEpisodeComponent from './TrainingEpisodeComponent';
import ProductReviewComponent from './ProductReviewComponent';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';

const VideoHomeScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    

    return (
        <SafeAreaView className="flex-1 bg-[#060f15]">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

            <WorkoutDetailScreen 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            
            <View className="px-7">
                <WhatYoullLearnComponent/>
                <TrainerProfileComponent/>
                <TrainingEpisodeComponent/>
                <ProductReviewComponent/>
                
            </View>
            
            </ScrollView>

            {modalVisible && <PurchaseConfirmationModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default VideoHomeScreen;
