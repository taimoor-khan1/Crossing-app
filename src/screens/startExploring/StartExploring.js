import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import styles from './StartExploring.style';
import LargeButton from '../../components/largeButton/LargeButton';
import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import { images } from '../../config/Images';
import Screens from '../../config/Screens';

const StartExploring = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          //   backgroundColor: 'red',
        }}>
        <Image source={images.hi} resizeMode="contain" />
        <Text style={styles.readyLearning}>
          You’re ready to start learning, Jane K.
        </Text>
        <Text style={styles.exitedText}>
          We're so excited to have you here!
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          //   paddingBottom: 20,
        }}>
        <LargeButton
          onButtonPress={() => {
            navigation.navigate(Screens.Profile)

          }}
          title={labels.startExploring}
          additionalStyle={{
            bottom: 70,
            backgroundColor: 'white',
          }}
          additionalTextStyle={{ color: colors.blue }}></LargeButton>
      </View>
    </View>
  );
};

export default StartExploring;
