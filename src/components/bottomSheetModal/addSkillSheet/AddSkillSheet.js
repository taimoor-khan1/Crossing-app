import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './AddSkillSheet.style';
import GlobalStyle from '../../../assets/globalStyle/GlobalStyle';
import {Image} from 'react-native';
import {images} from '../../../config/Images';
import {TextInput} from 'react-native-gesture-handler';
import labels from '../../../assets/labels/English.labels';
import colors from '../../../config/Colors';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import Button from '../../button/Button';
import Utility from '../../../utils/Utility';
import LargeButton from '../../largeButton/LargeButton';

const AddSkillSheet = ({
  setSnapPoint,
  setValue,
  // setIntrests,
  // setSkills,
  setIndex,
  title,
}) => {
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchData, setSearchData] = useState([
    {itemName: 'Graphic Designer'},
    {itemName: 'UI Designer'},
    {itemName: 'UX Designer'},
  ]);

  //Use Effect
  useEffect(() => {}, []);
  //Funtions
  const searchByValue = value => {
    return records => {
      return (
        records?.itemName?.toLowerCase().includes(value?.toLowerCase()) ||
        !value
      );
    };
  };
  const addItems = () => {
    setValue(prev => [...prev, ...selectedItems]);
    setIndex(0);
  };

  //UI Functions
  const addItemUI = (title, items) => {
    let searchValue = searchData?.filter(searchByValue(search));
    return (
      <View style={styles.skillElemetView}>
        <Text style={styles.titleText}>{title}</Text>

        <ScrollView
          horizontal
          contentContainerStyle={GlobalStyle.pH(16)}
          showsHorizontalScrollIndicator={false}>
          {items
            ? items?.map((item, index) => {
                return (
                  <View style={styles.itemsView}>
                    <Text style={styles.itemNameStyle}>{item?.itemName}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        Utility.handleRemove(items, index, setSelectedItems)
                      }>
                      <Image
                        style={GlobalStyle.mL(14)}
                        source={images.cross}></Image>
                    </TouchableOpacity>
                  </View>
                );
              })
            : null}
        </ScrollView>
        <View style={[GlobalStyle.pH(14)]}>
          <BottomSheetTextInput
            style={[
              styles.inputTextField,
              items ? GlobalStyle.mT(24) : GlobalStyle.mT(8),
            ]}
            placeholder={labels.searchSkill}
            paddingVertical={2}
            placeholderTextColor={colors.darkGrey}
            value={searchData}
            onFocus={() => {
              setSnapPoint(['1%', '65%']);
            }}
            onBlur={() => {
              setSnapPoint(['1%', '40%']);
            }}
            onChangeText={value => {
              if (value.length > 2) {
                setSearch(value);
              } else {
                setSearch(value);
              }
            }}
          />
        </View>

        {searchValue.length ? (
          searchValue?.map(item => {
            return (
              <TouchableOpacity
                style={[GlobalStyle.mT(12), GlobalStyle.pH(14)]}
                onPress={() => {
                  // setValue(prev => [...prev, item]);
                  setSelectedItems(prev => [...prev, item]);
                }}>
                <Text style={styles.searchedTextStyle}>{item?.itemName}</Text>
              </TouchableOpacity>
            );
          })
        ) : searchValue.length === 0 ? (
          <View style={styles.addSkillView}>
            <Text style={styles.didnotText}>{labels.didnotFind}</Text>
            <TouchableOpacity
              onPress={() => {
                // setValue(prev => [...prev, {itemName: search}]);
                setSelectedItems(prev => [...prev, {itemName: search}]);
              }}>
              <Text style={styles.addNowText}>{labels.addNow}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };
  //Main return
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Text style={GlobalStyle.bottomSheetTitle}>{title}</Text>
        {addItemUI('Interested in learning about', selectedItems)}
        <LargeButton title={labels.save} onButtonPress={() => addItems()} />
      </ScrollView>
    </View>
  );
};

export default AddSkillSheet;
