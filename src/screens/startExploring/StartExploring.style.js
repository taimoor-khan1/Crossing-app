import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  readyLearning: {
    fontFamily: fonts.satoshiBold,
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    marginTop: 24,
  },
  exitedText: {
    fontFamily: fonts.generalSansMedium,
    fontSize: 18,
    marginTop: 10,
  },
});
export default styles;
