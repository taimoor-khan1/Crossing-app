import {Platform, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  emailText: {
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: Platform.OS === 'ios' ? 16 : 15,
    color: colors.black,
  },
  emailButton: {
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.black,
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 10 : 8,
  },
  buttonStyle: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  buttonTitleStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.generalSansSemiBold,
  },
});

export default styles;
