import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({navigation, text}) => {
  return (
    <TouchableOpacity onPress={() => navigation()}>
      <View style={styles.emailButton}>
        <Text style={styles.emailText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
