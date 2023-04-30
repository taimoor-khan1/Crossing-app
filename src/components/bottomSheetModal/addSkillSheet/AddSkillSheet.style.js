import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import fonts from '../../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F9FAFA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  skillElemetView: {
    width: '100%',
    minHeight: 56,
    marginTop: 6,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 16,
    // paddingHorizontal: 14,
    paddingVertical: 8,
  },
  itemsView: {
    flex: 1,
    minWidth: 85,
    minHeight: 30,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 6,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  titleText: {
    color: colors.blue,
    fontFamily: fonts.generalSansSemiBold,
    paddingHorizontal: 14,
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
    borderBottomWidth: 1,
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.generalSansMedium,
  },
  searchedTextStyle: {
    fontSize: 13,
    fontFamily: fonts.generalSansRegular,
    color: colors.textGrey,
  },
  addSkillView: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  didnotText: {
    color: colors.darkGrey,
    fontSize: 13,
    fontFamily: fonts.generalSansRegular,
    // marginTop:10
  },
  addNowText: {
    color: colors.blue,
    fontSize: 13,
    fontFamily: fonts.generalSansMedium,
    marginTop: 5,
  },
});
export default styles;
