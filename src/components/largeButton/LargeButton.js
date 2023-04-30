import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './LargeButton.style';

const LargeButton = ({
  title,
  onButtonPress = () => {},
  additionalStyle = {},
  additionalTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, additionalStyle]}
      onPress={onButtonPress}>
      <Text style={[styles.buttonTitleStyle, additionalTextStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default LargeButton;
