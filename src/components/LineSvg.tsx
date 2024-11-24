import { colors } from '@/styles/colors';
import React from 'react';
import { View } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

const LineSvg = () => {
    return (
        <View>
            <Svg height={20} width="100%">
                <Line
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke={colors.black}
                    strokeWidth={1}
                    strokeDasharray="5,5"
                />
                <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
                <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
            </Svg>
        </View>
    );
};

export default LineSvg;
