import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './AddExperienceSheet.style';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import colors from '../../../config/Colors';
import labels from '../../../assets/labels/English.labels';
import GlobalStyle from '../../../assets/globalStyle/GlobalStyle';
import LargeButton from '../../largeButton/LargeButton';
import {KeyboardAvoidingView} from 'react-native';
const AddExperienceSheet = ({
  setSnapPoint,
  setValue,
  setIndex,
  title,
  editItem,
  setEditExperience,
}) => {
  const [jobTitle, setJobTitle] = useState();
  const [companyName, setCompanyName] = useState();
  const [industry, setIndustry] = useState();
  const [location, setLocation] = useState();
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  //input Field Data List
  const inputList = [
    {
      inputTitle: labels.job,
      placeholder: labels.job,
      value: jobTitle,
      setState: setJobTitle,
    },
    {
      inputTitle: labels.companyName,
      placeholder: labels.companyName,
      value: companyName,
      setState: setCompanyName,
    },
    {
      inputTitle: labels.industry,
      placeholder: labels.industry,
      value: industry,
      setState: setIndustry,
    },
    {
      inputTitle: labels.location,
      placeholder: labels.countryCity,
      value: location,
      setState: setLocation,
    },
  ];

  //UseEffects
  useEffect(() => {
    console.log(editItem, 'editItemEidt');
    editItem !== null
      ? (setJobTitle(editItem?.jobTitle),
        setCompanyName(editItem?.companyName),
        setIndustry(
          editItem?.industry,
          setLocation(editItem?.country),
          setTo(editItem?.duration?.to),
          setFrom(editItem?.duration?.from),
        ))
      : null;
  }, []);

  //Functions
  const addExperience = () => {
    if (to && from && industry && companyName && location !== null) {
      let obj = {
        duration: {
          to: to,
          from: from,
        },
        jobTitle: jobTitle,
        industry: industry,
        companyName: companyName,
        country: location,
      };
      setValue(prev => [obj, ...prev]), setIndex(0);
    } else {
      alert('empty');
    }
  };
  const editExperience = () => {
    setEditExperience('');
    setIndex(0);
  };
  //UI function below
  const inputUI = item => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>{item?.inputTitle}</Text>
        <BottomSheetTextInput
          style={[styles.inputTextField]}
          placeholder={item?.placeholder}
          paddingVertical={4}
          placeholderTextColor={colors.darkGrey}
          value={item?.value}
          onFocus={() => {
            setSnapPoint(['1%', '60%']);
          }}
          onBlur={() => {
            setSnapPoint(['1%', '40%']);
          }}
          onChangeText={value => {
            item?.setState(value);
          }}
        />
      </View>
    );
  };
  const toAndFromInputUI = () => {
    return (
      <View style={styles.smallInputContainer}>
        <View style={styles.smallInputTextField}>
          <Text style={styles.titleText}>{labels.to}</Text>
          <BottomSheetTextInput
            style={[styles.inputTextField]}
            placeholder={labels.to}
            paddingVertical={2}
            placeholderTextColor={colors.darkGrey}
            value={to}
            // onFocus={() => {
            //   setSnapPoint(['1%', '60%']);
            // }}
            onBlur={() => {
              setSnapPoint(['1%', '40%']);
            }}
            onChangeText={value => {
              setTo(value);
            }}
          />
        </View>
        <View style={styles.smallInputTextField}>
          <Text style={styles.titleText}>{labels.from}</Text>
          <BottomSheetTextInput
            style={[styles.inputTextField]}
            placeholder={labels.from}
            paddingVertical={2}
            placeholderTextColor={colors.darkGrey}
            value={from}
            // onFocus={() => {
            //   setSnapPoint(['1%', '60%']);
            // }}
            onBlur={() => {
              setSnapPoint(['1%', '40%']);
            }}
            onChangeText={value => {
              setFrom(value);
            }}
          />
        </View>
      </View>
    );
  };
  //Main Return
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 50,
        }}>
        <Text style={GlobalStyle.bottomSheetTitle}>{title}</Text>
        {inputList?.map((item, index) => {
          return inputUI(item);
        })}
        {toAndFromInputUI()}
        <LargeButton
          title={labels.save}
          additionalStyle={GlobalStyle.mT(24)}
          onButtonPress={
            title === labels.editExperience ? editExperience : addExperience
          }
        />
      </ScrollView>
    </View>
  );
};

export default AddExperienceSheet;
