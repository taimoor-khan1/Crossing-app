import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import colors from '../config/Colors';
import { SIZES } from '../config/Sizes';
import Icon, { IconType } from './Icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';

const EditText = React.forwardRef((props, ref) => {
  const { title, styleContainer, txtStyle, borderColor } = props;
  const navigation = useNavigation();

  const [show, setShow] = useState(false);

  return (
    <View>
      <FloatingLabelInput
        label={title}
        isPassword={props?.password}
        togglePassword={show}
        {...props}
        labelStyles={[styles.labelstyle1]}
        containerStyles={[styles.inputContainer, styleContainer]}
        customLabelStyles={[styles.labelstyle, txtStyle]}
        inputStyles={styles.inputStyles}
        animationDuration={150}
        customShowPasswordComponent={
          <Icon
            name={"eye-off"}
            type={IconType.Feather}
            color={colors.black}
          />
        }
        customHidePasswordComponent={
          <Icon
            name={"eye"}
            type={IconType.Feather}
            color={colors.black}

          />}
      />
    </View>

    // <View style={
    //   [{
    //     borderRadius: 12,
    //     marginTop: 10,
    //     paddingHorizontal: SIZES.fifteen,
    //     paddingTop: 10,
    //     paddingBottom: 0,
    //     borderWidth: 1,
    //     borderColor: borderColor,
    //     backgroundColor: colors.white,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,

    //     elevation: 5,
    //   }, styleContainer]
    // } >
    //   <View
    //     style={[
    //       {
    //         justifyContent: 'space-between',
    //         flexDirection: 'row',
    //       },
    //     ]}>
    //     <Text
    //       style={[
    //         {
    //           fontWeight: "600",
    //           fontFamily: "General-Sans-Variable",
    //           color: colors.blue,
    //         },
    //         txtStyle
    //       ]}>
    //       {title}
    //     </Text>
    //   </View>
    //   {/* EditText  */}
    //   <View
    //     style={[
    //       {
    //         // backgroundColor: colors.black,
    //         justifyContent: 'center'
    //         // marginTop: SIZES.ten,
    //       },
    //       props.style,
    //     ]}>
    //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>

    //       <TextInput
    //         ref={ref}
    //         {...props}
    //         secureTextEntry={props.password ? showText : false}
    //         selectionColor={colors.BtnYellowColor}
    //         placeholder={props.placeholder}
    //         placeholderTextColor={colors.lightGrey}

    //         style={[
    //           {
    //             height: 40,
    //             flex: 1,
    //             color: colors.black,
    //           },
    //         ]}
    //       />
    //     </View>
    //     {/* {email !== "" && !Utility.validateEmail(email) && <Text style={styles.errorText}> ! Incorrect password</Text>} */}

    //   </View>
    // </View>
  );
});

export default EditText;
const styles = StyleSheet.create({

  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginTop: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  labelstyle: {
    fontSizeFocused: 12,
    topFocused: -15,
    topBlurred: 0,
    colorFocused: "black",
  },
  labelstyle1: {
    fontWeight: "bold",
    paddingLeft: 3,

  },
  inputStyles: {
    color: "black",
    height: 60,
    justifyContent: "space-between",
    paddingLeft: 5,
    bottom: Platform.OS === "ios" ? -10 : -10
  }
})