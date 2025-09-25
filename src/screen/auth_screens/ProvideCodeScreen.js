import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';

const bg = require("../../../assets/img/bg7.png")

const ProvideCodeScreen = () => {

    const navigation = useNavigation()
  const [code, setCode] = React.useState(['', '', '', '', '', '']);
  const inputRefs = React.useRef([]);

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace to go to previous input
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const fullCode = code.join('');
    console.log('Submit pressed', { code: fullCode });
  };

  return (


    <View className="flex-1 ">
         
        <ImageBackground
            source={bg}
            className="flex-1 justify-between"
            resizeMode="cover"
        >
    
        
            <SafeAreaView className="flex-1">
               <View className="flex-1 px-5 pt-16">
                
                {/* Header */}
                <View className="mb-12">
                    <Text className="text-3xl font-tektur-semibold text-white mb-3">
                        Provide Code
                    </Text>
                    <Text className="text-base font-inter-medium text-gray-400 leading-6">
                    We will send OTP verification to you.
                    </Text>
                </View>

                {/* OTP Input Fields */}
                <View className="flex-row justify-between mb-12 px-2">
                    {code.map((digit, index) => (
                    <BlurView
                        key={index}
                        className="rounded-xl overflow-hidden"
                        intensity={10}
                        tint="dark"
                        style={{
                        width: 50,
                        height: 60,
                        backgroundColor: 'rgba(55, 65, 81, 0.6)',
                        borderWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    >
                        <TextInput
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        className="flex-1 text-white text-xl font-semibold text-center"
                        value={digit}
                        onChangeText={(text) => handleCodeChange(text.slice(-1), index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        keyboardType="numeric"
                        maxLength={1}
                        selectTextOnFocus
                        />
                    </BlurView>
                    ))}
                </View>

                {/* Submit Button */}
                <TouchableOpacity 
                    className={`py-4 rounded-xl items-center ${
                    code.every(digit => digit !== '') ? 'bg-[#a3e636]' : 'bg-gray-600'
                    }`}
                    onPress={() => {
                        navigation.dispatch(state => {
                            const routes = state.routes.slice(0,-2);
                            routes.push({
                                name: "LoginScreen"
                            })

                            return CommonActions.reset({
                                ...state,
                                index: routes.length -1,
                                routes
                            })
                        })
                    }}
                    activeOpacity={0.8}
                    disabled={!code.every(digit => digit !== '')}
                >
                    <Text className="text-base font-tektur-semibold text-black">
                        Submit
                    </Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    </View>
    

  );
};

export default ProvideCodeScreen;