import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import AddSkillSheet from './addSkillSheet/AddSkillSheet';
import styles from './BottomSheetModal.style';
import colors from '../../config/Colors';
import { Dimensions, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const BottomSheetModal = ({
  ref,
  Sheet,
  index,
  setIndex,
  points = ['1%', '50%'],
  setSkills,
  setIntrests,
  title,
}) => {
  console.log(points, 'points');
  //States
  const [snapPoint, setSnapPoint] = useState(points);

  //ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => snapPoint, [snapPoint]);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={index}
      initialSnapIndex={index}
      snapPoints={snapPoints}
      style={styles.container}
      containerStyle={{
        backgroundColor: index ? colors.lowBlack : colors.transparent,
      }}
      backgroundStyle={{ backgroundColor: colors.background }}
      enablePanDownToClose={true}
      //   handleIndicatorStyle={{color: 'blue'}}
      onClose={() => {
        setIndex(0);
      }}
      contentHeight={true}
      keyboardBehavior={'interactive'}
      onChange={handleSheetChanges}
    >
      {/* <View style={{height: Dimensions.get('screen').height / 2.5}}> */}
      <BottomSheetScrollView contentContainerStyle={{ color: colors.background }}>
        {Sheet}
      </BottomSheetScrollView>
      {/* </View> */}
    </BottomSheet>
  );
};

export default BottomSheetModal;
