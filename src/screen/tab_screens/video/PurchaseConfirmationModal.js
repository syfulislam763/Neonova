import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Lock, Check } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PurchaseConfirmationModal = ({modalVisible, setModalVisible}) => {


  const handleBuyNow = () => {
    console.log('Buy $89 pressed');
    setModalVisible(false);
  };

  const handleNotNow = () => {
    console.log('Not Now pressed');
    setModalVisible(false);
  };

  const handleViewProfile = () => {
    console.log('View Profile pressed');
  };

  const handleBuyFromBottom = () => {
    console.log('Buy $89 from bottom pressed');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Modal Overlay */}
        <SafeAreaView 
          className="flex-1 px-5 mt-72"
        >
          {/* Modal Content */}
          <View className="w-full">
            <BlurView
              className="rounded-3xl overflow-hidden"
              intensity={100}
              tint="light"
              style={{
                
              }}
            >
              <View className="p-6">
                {/* Modal Title */}
                <Text className="text-white text-xl font-bold text-center mb-4 leading-7">
                  Are you sure you want to buy{'\n'}this training course?
                </Text>

                {/* Modal Description */}
                <Text className="text-gray-400 text-base text-center mb-8 leading-6">
                  There are many variations of passages of Lorem{'\n'}
                  Ipsum available, but the majority...
                </Text>

                {/* Modal Buttons */}
                <View className="flex-row gap-4">
                  <TouchableOpacity
                    className="flex-1 bg-white py-4 rounded-xl items-center"
                    onPress={handleBuyNow}
                    activeOpacity={0.8}
                  >
                    <Text className="text-black text-base font-semibold">
                      Buy $89
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="flex-1 py-4 rounded-xl items-center"
                    style={{ backgroundColor: 'rgba(75, 85, 99, 0.8)' }}
                    onPress={handleNotNow}
                    activeOpacity={0.8}
                  >
                    <Text className="text-white text-base font-semibold">
                      Not Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          </View>
        </SafeAreaView>
      </Modal>
  );
};

export default PurchaseConfirmationModal;