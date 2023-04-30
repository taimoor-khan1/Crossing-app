import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import labels from '../../assets/labels/English.labels';
import Screens from '../../config/Screens';
import styles from './Drawer.style';
// import { resetRoot } from '../../../config/NavigationService';
import { resetRoot } from '../../navigation/NavigationService'
const Drawer = ({ navigation }) => {
  const MenuBar = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={async () => {
          if (item?.title === "Log out") {
            await AsyncStorage.removeItem('user_detail').then(() => {
              // resetRoot("AuthStack");
              navigation.replace('AuthStack');
            });
          }

        }}
        style={styles.menuContainer}>
        <Text style={[styles.txt, { color: item?.title === "Log out" ? "red" : "#909193" }]}>
          {item.title}
        </Text>

      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={menuitems}
        keyExtractor={(item) => item.id}
        renderItem={MenuBar}
      />
    </View>
  );
};
const menuitems = [
  {
    id: "0",
    title: "Home",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "1",
    title: "Network",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "2",
    title: "Events",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "3",
    title: "Calendar",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "4",
    title: "Premium Features",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "5",
    title: "Feedback",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "6",
    title: "Settings",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "7",
    title: "How it woks",
    Screen: Screens.home,
    icon: ""
  },
  {
    id: "8",
    title: "Log out",
    Screen: Screens.home,
    icon: ""
  },
]

export default Drawer;
