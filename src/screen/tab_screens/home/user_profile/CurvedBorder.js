import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const CurvedBorder = ({ width = 350, height = 60 }) => {
  return (
    <View className="w-full h-14 rounded-tl-[50px] rounded-tr-[50px] overflow-hidden bg-[##a3e636] items-center relative">
        <View className="w-full h-12 bg-[#060f15] absolute bottom-0 rounded-tl-[50px] rounded-tr-[50px]">

        </View>
    </View>
  );
};


export default CurvedBorder;