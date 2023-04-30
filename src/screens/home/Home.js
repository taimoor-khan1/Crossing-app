import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Home.style';
import labels from '../../assets/labels/English.labels';
import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/UserAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const apiCall = () => {
    navigation.navigate('GetStarted');
    // dispatch(login({}));
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          apiCall();
        }}>
        <Text>{labels.home}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
