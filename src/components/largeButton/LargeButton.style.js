import {Platform, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
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
