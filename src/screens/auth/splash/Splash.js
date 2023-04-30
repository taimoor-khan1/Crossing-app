/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../../../config/Images';
import styles from './Splash.style';
import Screens from '../../../config/Screens';

const Splash = ({ navigation }) => {
  useEffect(() => {
    async function navigate() {
      setTimeout(async function () {
        var user = await AsyncStorage.getItem('user_detail');
        navigation.replace(user ? 'DrawerStack' : Screens.introScreen);
      }, 2000);
    }
    navigate();
  }, []);

  return (
    <View style={[styles.container]}>
      <Image source={images.logo} style={styles.fullScreen} />
    </View>
  );
};

export default Splash;
