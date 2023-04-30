import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import {SIZES} from '../../../config/Sizes';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: SIZES.fifty,
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.black,
    marginBottom: SIZES.fifteen,
  },
  txt: {
    fontWeight: '500',
    fontSize: 13,
    color: colors.black,
    marginBottom: SIZES.fifteen,
  },
});
export default styles;
