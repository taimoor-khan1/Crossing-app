import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import styles from './GetStarted.style';
import colors from '../../config/Colors';
import labels from '../../assets/labels/English.labels';
import {images} from '../../config/Images';
import fonts from '../../config/Fonts';
import Button from '../../components/button/Button';
import GlobalStyle from '../../assets/globalStyle/GlobalStyle';
import Utility from '../../utils/Utility';
import AddSkillSheet from '../../components/bottomSheetModal/addSkillSheet/AddSkillSheet';
// import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetModal from '../../components/bottomSheetModal/BottomSheetModal';
import AddExperienceSheet from '../../components/bottomSheetModal/addExperienceSheet/AddExperienceSheet';
import AddEducationSheet from '../../components/bottomSheetModal/addEducationSheet/AddEducationSheet';
import LargeButton from '../../components/largeButton/LargeButton';
import {useNavigation} from '@react-navigation/native';
const GetStarted = () => {
  const navigation = useNavigation();
  //States
  const [skills, setSkills] = useState([]);
  const [intrests, setIntrests] = useState([]);
  const [title, setTitle] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [description, setDescription] = useState('');
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [snapPoint, setSnapPoint] = useState(['1%', '40%']);
  const [experienceDetail, setExperienceDetail] = useState([]);
  const [editExperience, setEditExperience] = useState([]);
  const [educationDetail, setEducationDetail] = useState([]);
  const [editEducation, setEditEducation] = useState([]);

  //ref
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    // alert(currentStep);
  }, [currentStep]);

  const openBottomSheet = title => {
    setBottomSheetIndex(1);
    //Title for BottomSheet
    setTitle(title);
  };
  //UI functions below

  //SkillUI function
  const skillsUI = (title, items, addLabel, setState) => {
    return (
      <View style={styles.skillElemetView}>
        <Text style={styles.titleText}>{title}</Text>
        <ScrollView
          contentContainerStyle={GlobalStyle.pH(16)}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {items
            ? items?.map((item, index) => {
                return (
                  <View style={styles.itemsView}>
                    <Text style={styles.itemNameStyle}>{item?.itemName}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        Utility.handleRemove(items, index, setState)
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
        <TouchableOpacity
          style={{flexDirection: 'column'}}
          onPress={() => {
            setSnapPoint(['1%', '45%']);
            openBottomSheet(addLabel);
          }}>
          <Text style={styles.addItemText}>{`${labels.plus} ${addLabel}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const experienceUI = (item, index) => {
    return (
      <View style={[styles.experienceContainer]}>
        <View
          style={[
            styles.experienceDetailView,
            {
              borderLeftWidth: experienceDetail?.length - 1 !== index ? 1 : 0,
            },
          ]}>
          <View style={styles.dotPoint(index)}></View>
          <View style={styles.textContainer}>
            <Text style={styles.durationStyle}>
              {item?.duration?.to}
              {item?.duration?.from}
            </Text>
            <Text style={styles.industryTextStyle}>{item?.industry}</Text>
            <Text style={styles.companyNameText}>{item?.companyName}</Text>
            <Text style={styles.countryCityStyle}>{item?.country}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            setSnapPoint(['3%', '66%']);
            openBottomSheet(labels.editExperience);
            setEditExperience(item);
          }}>
          <Image source={images.edit} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    );
  };
  const educationUI = (item, index) => {
    return (
      <View style={[styles.experienceContainer]}>
        <View
          style={[
            styles.experienceDetailView,
            {
              borderLeftWidth: educationDetail?.length - 1 !== index ? 1 : 0,
            },
          ]}>
          <View style={styles.dotPoint(index)}></View>
          <View style={styles.textContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.industryTextStyle, GlobalStyle.mT(-7)]}>
                {item?.institute}
                {', '}
              </Text>
              {item?.attending === true ? (
                <Text style={[styles.attendingText, GlobalStyle.mT(-7)]}>
                  {labels.attending}
                </Text>
              ) : (
                <Text
                  style={[
                    styles.industryTextStyle,
                    GlobalStyle.mT(-7),
                    GlobalStyle.mL(2),
                  ]}>
                  {item?.graduated}
                </Text>
              )}
            </View>
            <Text style={styles.companyNameText}>{item?.studied}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => {
            setSnapPoint(['3%', '66%']);
            openBottomSheet(labels.editEducation);
            setEditEducation(item);
          }}>
          <Image source={images.edit} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    );
  };
  //Main Return
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={[GlobalStyle.flex(1), GlobalStyle.pH(16)]}>
        <View style={styles.stepView}>
          <StepIndicator
            stepCount={3}
            direction={'horizontal'}
            customStyles={styles.customStepStyles}
            currentPosition={currentStep}
            labels={labels.stepsLabels}
            onPress={index => {
              setCurrentStep(index);
            }}
          />
        </View>
        {/* Steps Conditional Screens */}
        {currentStep === 0 ? (
          <ScrollView
            style={styles.scrollContainer}
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Text style={styles.headingTextStyle}>{labels.getStarted}</Text>
            <Text style={styles.aboutMeTextStyle}>{labels.aboutMe}</Text>
            <View style={styles.aboutInputView}>
              <TextInput
                multiline={true}
                style={styles.aboutDescription}
                onChangeText={text => setDescription(text)}></TextInput>
            </View>
            <Text style={styles.skillsText}>{labels.skills}</Text>
            {skillsUI(labels.canTeach, skills, labels.addSkill, setSkills)}
            {skillsUI(
              labels.intrestedInLearning,
              intrests,
              labels.addIntrest,
              setIntrests,
            )}
            <LargeButton
              title={labels.continue}
              onButtonPress={() => {
                if (currentStep > 1) {
                  setCurrentStep(0);
                } else {
                  setCurrentStep(currentStep + 1);
                }
              }}
              additionalStyle={[GlobalStyle.mT(28), GlobalStyle.mB(10)]}
            />
          </ScrollView>
        ) : currentStep === 1 ? (
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.addExperienceContainer}
              onPress={() => {
                setSnapPoint(['3%', '66%']);
                openBottomSheet(labels.addExperience);
              }}>
              <View style={styles.circleView}>
                <Text style={styles.plusStyle}>{labels.plus}</Text>
              </View>
              <Text style={styles.experienceTextStyle}>
                {labels.addExperience}
              </Text>
            </TouchableOpacity>
            {/*detail and edit card */}
            {experienceDetail.length ? (
              <>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.experienceContainerView}>
                  {experienceDetail?.map((item, index) => {
                    return experienceUI(item, index);
                  })}
                </ScrollView>
                {/* <View style={{backgroundColor: 'yellow'}}> */}
                <LargeButton
                  title={labels.continue}
                  onButtonPress={() => {
                    if (currentStep > 1) {
                      setCurrentStep(0);
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                  additionalStyle={[GlobalStyle.mT(28), GlobalStyle.mB(10)]}
                />
                {/* </View> */}
              </>
            ) : (
              <View style={styles.noExperienceView}>
                <Text style={styles.noExperienceText}>
                  {labels.noExperience}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.addExperienceContainer}
              onPress={() => {
                setSnapPoint(['3%', '66%']);
                openBottomSheet(labels.addEducation);
              }}>
              <View style={styles.circleView}>
                <Text style={styles.plusStyle}>{labels.plus}</Text>
              </View>
              <Text style={styles.experienceTextStyle}>
                {labels.addEducation}
              </Text>
            </TouchableOpacity>
            {educationDetail.length ? (
              <>
                {/* <View style={{flex: 1, backgroundColor: 'blue'}}> */}
                <ScrollView
                  style={{flexGrow: 1}}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.experienceContainerView}>
                  {educationDetail?.map((item, index) => {
                    return educationUI(item, index);
                  })}
                </ScrollView>
                <LargeButton
                  title={labels.continue}
                  onButtonPress={() => {
                    navigation.navigate('StartExploring');
                  }}
                  additionalStyle={[GlobalStyle.mT(28), GlobalStyle.mB(10)]}
                />
                {/* </View> */}
              </>
            ) : (
              <View style={styles.noExperienceView}>
                <Text style={styles.noExperienceText}>
                  {labels.noEducation}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Bottom Sheets */}
        {bottomSheetIndex ? (
          <BottomSheetModal
            ref={bottomSheetRef}
            index={bottomSheetIndex}
            setIndex={setBottomSheetIndex}
            points={snapPoint}
            //Components/Sheets to render in BottomSheet
            Sheet={
              title === labels.addExperience ||
              title === labels.editExperience ? (
                <AddExperienceSheet
                  setValue={setExperienceDetail}
                  editItem={
                    title === labels.editExperience ? editExperience : null
                  }
                  setEditExperience={setEditExperience}
                  setSnapPoint={setSnapPoint}
                  setIndex={setBottomSheetIndex}
                  title={title}
                />
              ) : title === labels.addEducation ||
                title === labels.editEducation ? (
                <AddEducationSheet
                  setValue={setEducationDetail}
                  editItem={
                    title === labels.editEducation ? editEducation : null
                  }
                  setEditEducation={setEditEducation}
                  setSnapPoint={setSnapPoint}
                  setIndex={setBottomSheetIndex}
                  title={title}
                />
              ) : (
                <AddSkillSheet
                  setValue={title === labels.addSkill ? setSkills : setIntrests}
                  // setSkills={setSkills}
                  // setIntrests={setIntrests}
                  setSnapPoint={setSnapPoint}
                  setIndex={setBottomSheetIndex}
                  title={title}
                />
              )
            }
          />
        ) : null}
      </GestureHandlerRootView>
    </View>
  );
};

export default GetStarted;
