import React from 'react';
import {Text, View} from 'react-native';
import labels from '../../assets/labels/English.labels';
import styles from './BotttomTab.style';

const BottomTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{labels.hello}</Text>
    </View>
  );
};

export default BottomTab;
