import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import fonts from '../../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
  inputContainer: {
    width: '100%',
    height: 56,
    marginTop: 6,
    marginBottom: 14,
    borderRadius: 12,
    backgroundColor: colors.white,
    // paddingHorizontal: 14,
  },
  smallInputContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },

  /////////////////////////////
  // skillElemetView: {
  //   width: '100%',
  //   minHeight: 56,
  //   marginTop: 6,
  //   borderRadius: 12,
  //   backgroundColor: colors.white,
  //   marginBottom: 16,
  //   // paddingHorizontal: 14,
  //   paddingVertical: 8,
  // },

  titleText: {
    color: colors.blue,
    fontFamily: fonts.generalSansSemiBold,
    paddingHorizontal: 14,
    marginTop: 8,
  },
  attendingText: {
    fontFamily: fonts.generalSansSemiBold,
    fontSize: 12,
    // alignSelf: 'center',
    // textAlign: 'center',
  },
  itemNameStyle: {
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.poppinsSemiBold,
  },
  addItemText: {
    marginTop: 12,
    color: colors.textBlue,
    fontSize: 12,
  },
  inputTextField: {
    borderBottomColor: colors.borderGrey,
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.generalSansMedium,
    paddingHorizontal: 14,
    textAlignVertical: 'top',

    textAlign: 'left',
  },

  smallInputTextField: {
    width: '47%',
    height: 56,
    borderRadius: 12,
    // paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderBottomColor: colors.borderGrey,
  },
});
export default styles;
