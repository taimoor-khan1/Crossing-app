import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  fullScreen: {
    width,
    height,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingHorizontal: 16,
    // alignContent: 'center',
    backgroundColor: colors.background,
    // marginBottom: 5,
    // backgroundColor: 'blue',
  },
  viewContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flex: 1,
    // backgroundColor: 'red',
    // paddingHorizontal: 16,
  },
  headingTextStyle: {
    color: colors.black,
    fontSize: 28,
    marginTop: 24,
    fontFamily: fonts.satoshiBold,
  },
  aboutMeTextStyle: {
    marginTop: 15,
    fontSize: 19,
    color: colors.blue,
    fontFamily: fonts.satoshiBold,
  },
  aboutInputView: {
    minHeight: 250,
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: colors.greyWhite,
    textAlign: 'center',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    // backgroundColor: 'red',
  },
  aboutDescription: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 13,
    fontFamily: fonts.generalSansMedium,
    color: colors.darkGrey,
  },
  skillsText: {
    marginTop: 14,
    color: colors.darkGrey,
    fontSize: 13,
    fontFamily: fonts.generalSansRegular,
  },
  skillElemetView: {
    width: '100%',
    minHeight: 56,
    marginTop: 6,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 16,
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
    fontFamily: fonts.generalSansSemiBold,
    color: colors.black,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  itemNameStyle: {
    color: colors.black,
    fontSize: 13,
    fontFamily: fonts.generalSansRegular,
  },
  addItemText: {
    marginTop: 12,
    marginBottom: 8,
    color: colors.textBlue,
    fontSize: 12,
    paddingHorizontal: 16,
  },
  attendingText: {
    fontFamily: fonts.generalSansSemiBold,
    fontSize: 12,
    color: colors.greenText,
  },
  addExperienceContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 66,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  experienceTextStyle: {
    marginLeft: 12,
    fontSize: 13,
    fontFamily: fonts.generalSansSemiBold,
    color: colors.black,
  },
  experienceContainerView: {
    width: '100%',
    marginTop: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 20,
    // paddingTop: 20,
  },
  experienceContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  dotPoint: index => ({
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.dotPointBackground,
    position: 'absolute',
    left: -4.5,
    top: 0,
  }),
  straightLineAbove: {
    width: 1,
    height: 20,
    alignSelf: 'center',
    backgroundColor: colors.greyWhite,
  },
  straightLine: {
    width: 1,
    minHeight: 60,
    alignSelf: 'center',
    // borderWidth: 1,
    backgroundColor: colors.greyWhite,
    borderColor: colors.greyWhite,
  },
  experienceDetailView: {
    flex: 9,
    borderLeftColor: colors.greyWhite,
    position: 'relative',
    marginLeft: 12,
    // backgroundColor: 'red',
    // justifyContent: 'flex-start',
  },
  textContainer: {
    marginLeft: 14,
    paddingBottom: 14,
    padding: 2,
  },
  durationStyle: {
    fontSize: 14,
    fontFamily: fonts.generalSansMedium,
    color: colors.darkGreyText,
    marginTop: -7,
    // marginTop: 2,
  },
  industryTextStyle: {
    fontFamily: fonts.generalSansSemiBold,
    fontSize: 12,
    color: colors.blue,
    marginTop: 2,
  },
  companyNameText: {
    fontSize: 14,
    fontFamily: fonts.generalSansMedium,
    color: colors.black,
    marginTop: 2,
  },
  countryCityStyle: {
    fontSize: 11,
    fontFamily: fonts.generalSansRegular,
    color: colors.darkGreyText,
    marginTop: 2,
    marginBottom: 14,
  },
  imageContainer: {
    flex: 0.5,
    marginRight: 16,
  },
  circleView: {
    backgroundColor: '#E6F2FF',
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 14,
  },
  plusStyle: {
    fontSize: 28,
    color: colors.textBlue,
    textAlign: 'center',
    alignSelf: 'center',
  },
  noExperienceView: {
    flex: 1,
    justifyContent: 'center',
  },
  noExperienceText: {
    fontSize: 16,
    fontFamily: fonts.generalSansRegular,
    alignSelf: 'center',
    color: colors.darkGreyText,
  },
  //Step Styling Below
  stepView: {
    // width: '95%',
    marginTop: 60,
  },
  customStepStyles: {
    stepIndicatorSize: 22,
    currentStepIndicatorSize: 22,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.blue,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.blue,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: colors.blue,
    separatorUnFinishedColor: colors.greyWhite,
    stepIndicatorFinishedColor: colors.blue,
    stepIndicatorUnFinishedColor: colors.white,
    stepIndicatorCurrentColor: colors.blue,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.white,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 11,
    currentStepLabelColor: colors.blue,
    stepStrokeWidth: 2,
    separatorStrokeWidth: 4,
  },
});
export default styles;
