import {StyleSheet} from 'react-native';
import colors from '../../../config/Colors';
import {SIZES} from '../../../config/Sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: SIZES.twenty,
  },
  text: {
    // fontFamily: "General Sans Variable",
    color: colors.black,
    fontWeight: '400',
    fontSize: SIZES.fifteen + 1,
    marginBottom: SIZES.ten,
    lineHeight: 21.6,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: SIZES.fifty,
  },
  skip: {
    alignSelf: 'flex-end',
    marginRight: SIZES.twentyFive,
    fontWeight: '500',
    color: colors.blue,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  btnStyle: {
    marginVertical: SIZES.twenty,
  },
  card: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  ImageBox: {
    width: 286,
    height: 399,
    alignSelf: 'center',
    borderRadius: SIZES.fifteen,
    marginBottom: SIZES.twenty,
  },
  boxHeading: {
    // fontFamily: "General Sans Variable",
    color: colors.black,
    fontWeight: '600',
    fontSize: 22,
    marginBottom: SIZES.ten,
  },
});
export default styles;
