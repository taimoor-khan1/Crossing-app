import {Platform} from 'react-native';

const fonts = {
  //Poppins
  poppinsBold: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',
  poppinsMedium: Platform.OS === 'ios' ? 'Poppins-Medium' : 'Poppins-Medium',
  poppinsRegular: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Regular',
  poppinsSemiBold:
    Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  //GeneralSans
  generalSansBold:
    Platform.OS === 'ios' ? 'GeneralSans-Bold' : 'GeneralSans-Bold',
  generalSansBoldItalic:
    Platform.OS === 'ios' ? 'GeneralSans-BoldItalic' : 'GeneralSans-BoldItalic',
  generalSansExtraLight:
    Platform.OS === 'ios' ? 'GeneralSans-Extralight' : 'GeneralSans-Extralight',
  generalSansExtraLightItalic:
    Platform.OS === 'ios'
      ? 'GeneralSans-ExtralightItalic'
      : 'GeneralSans-ExtralightItalic',
  generalSansItalic:
    Platform.OS === 'ios' ? 'GeneralSans-Italic' : 'GeneralSans-Italic',
  generalSansLight:
    Platform.OS === 'ios' ? 'GeneralSans-Light' : 'GeneralSans-Light',
  generalSansLightItalic:
    Platform.OS === 'ios'
      ? 'GeneralSans-LightItalic'
      : 'GeneralSans-LightItalic',
  generalSansMedium:
    Platform.OS === 'ios' ? 'GeneralSans-Medium' : 'GeneralSans-Medium',
  generalSansMediumItalic:
    Platform.OS === 'ios'
      ? 'GeneralSans-MediumItalic'
      : 'GeneralSans-MediumItalic',
  generalSansRegular:
    Platform.OS === 'ios' ? 'GeneralSans-Regular' : 'GeneralSans-Regular',
  generalSansSemiBold:
    Platform.OS === 'ios' ? 'GeneralSans-Semibold' : 'GeneralSans-Semibold',
  generalSansSemiBoldItalic:
    Platform.OS === 'ios'
      ? 'GeneralSans-SemiboldItalic'
      : 'GeneralSans-SemiboldItalic',
  //Satoshi
  satoshiBold: Platform.OS === 'ios' ? 'Satoshi-Bold' : 'Satoshi-Bold',
  satoshiBoldItalic:
    Platform.OS === 'ios' ? 'Satoshi-BoldItalic' : 'Satoshi-BoldItalic',
  satoshiBlack: Platform.OS === 'ios' ? 'Satoshi-Black' : 'Satoshi-Black',
  satoshiBlackItalic:
    Platform.OS === 'ios' ? 'Satoshi-BlackItalic' : 'Satoshi-BlackItalic',
  satoshiItalic: Platform.OS === 'ios' ? 'Satoshi-Italic' : 'Satoshi-Italic',
  satoshiLight: Platform.OS === 'ios' ? 'Satoshi-Light' : 'Satoshi-Light',
  satoshiLightItalic:
    Platform.OS === 'ios' ? 'Satoshi-LightItalic' : 'Satoshi-LightItalic',
  satoshiMedium: Platform.OS === 'ios' ? 'Satoshi-Medium' : 'Satoshi-Medium',
  satoshiBoldMediumItalic:
    Platform.OS === 'ios' ? 'Satoshi-MediumItalic' : 'Satoshi-MediumItalic',
  satoshiRegular: Platform.OS === 'ios' ? 'Satoshi-Regular' : 'Satoshi-Regular',
};

export default fonts;
