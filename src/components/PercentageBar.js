import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{ justifyContent: 'center' }}>
        <View
          style={{
            marginRight: 15,
            marginBottom:10,
          }}>
          <Text style={{ textAlign: 'right', color: '#2DAF95',fontSize:9 }}>{getPercentage}</Text>
        </View>
        <View
          style={{

            width: '100%',
            height: 10,
            // marginVertical: 10,
            borderRadius: 5,
            borderColor: getBackgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: 10,
            // marginVertical: 10,
            borderRadius: 5,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom: 20
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            // bottom: 10
          }}>
            
          {/* <Text style={{ textAlign: 'right', color: 'blue' }}>{getPercentage}</Text> */}
        </View>
      </View>
    </View>
  );
};
export default PercentageBar