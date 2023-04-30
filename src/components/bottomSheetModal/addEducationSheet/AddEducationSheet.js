import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './AddEducationSheet.style';
import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import colors from '../../../config/Colors';
import labels from '../../../assets/labels/English.labels';
import GlobalStyle from '../../../assets/globalStyle/GlobalStyle';
import LargeButton from '../../largeButton/LargeButton';
import {images} from '../../../config/Images';

const AddEducationSheet = ({
  setSnapPoint,
  setValue,
  setIndex,
  title,
  editItem,
  setEditEducation,
}) => {
  const [studied, setStudied] = useState();
  const [institute, setInstitute] = useState();
  const [graduated, setGraduated] = useState();
  const [attending, setAttending] = useState(false);

  //input Field Data List
  const inputList = [
    {
      inputTitle: labels.studied,
      placeholder: labels.subjectAndDegree,
      value: studied,
      setState: setStudied,
    },
    {
      inputTitle: labels.instituteOrUniversity,
      placeholder: labels.instituteOrUniversity,
      value: institute,
      setState: setInstitute,
    },
    {
      inputTitle: labels.graduated,
      placeholder: labels.year,
      value: graduated,
      setState: setGraduated,
    },
  ];

  // UseEffects
  useEffect(() => {
    console.log(editItem, 'editItemEidt');
    editItem !== null
      ? (setStudied(editItem?.studied),
        setInstitute(editItem?.institute),
        setGraduated(editItem?.graduated),
        setAttending(editItem?.attending))
      : null;
  }, []);

  //Functions
  const addEducation = () => {
    if (studied && institute && graduated !== null) {
      let obj = {
        studied: studied,
        institute: institute,
        graduated: graduated,
        attending: attending,
      };
      setValue(prev => [obj, ...prev]), setIndex(0);
    } else {
      alert('empty');
    }
  };
  const editEducation = () => {
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
        <View style={[GlobalStyle.flexDirection('row'), GlobalStyle.mV(10)]}>
          <View style={[GlobalStyle.flex(0.1)]}>
            <TouchableOpacity
              onPress={() => {
                setAttending(!attending);
              }}>
              {attending ? (
                <Image source={images.activeCheck} />
              ) : (
                <Image source={images.nonActiveCheck} />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={[
              GlobalStyle.flex(0.9),
              GlobalStyle.justifyContent('center'),
            ]}>
            <Text
              style={[
                styles.attendingText,
                {color: attending ? colors.textBlue : colors.darkGrey},
              ]}>
              {labels.attending}
            </Text>
          </View>
        </View>
        <LargeButton
          title={labels.save}
          additionalStyle={GlobalStyle.mT(24)}
          onButtonPress={
            title === labels.editExperience ? editEducation : addEducation
          }
        />
      </ScrollView>
    </View>
  );
};

export default AddEducationSheet;
