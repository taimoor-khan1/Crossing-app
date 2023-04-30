import {Platform, Dimensions, StyleSheet} from 'react-native';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  flex: size => ({flex: Number(size)}),
  flexDirection: z => ({flexDirection: z}),
  fontSize: size => ({fontSize: Number(size)}),
  color: color => ({color: color}),
  backgroundColor: color => ({backgroundColor: color}),
  alignSelf: z => ({alignSelf: z}),
  alignItems: z => ({alignItems: z}),
  flexGrow: z => ({flexGrow: z}),
  justifyContent: z => ({justifyContent: z}),
  full_Height: H => ({height: H ? height / Number(H) : height}),
  maxHeight: H => ({maxHeight: H ? Number(H) : height}),
  maxHeightPct: H => ({maxHeight: H}),
  height_width: (H, W) => ({height: Number(H), width: Number(W)}),
  Divide_width: W => ({width: width / Number(W)}),
  width: W => ({width: Number(W)}),
  width_Percent: W => ({width: W}),
  height: H => ({height: Number(H)}),
  lineHeight: size => ({lineHeight: Number(size)}),
  fontWeight: size => ({fontWeight: size}),
  fontColor: color => ({color: colors[color]}),
  padding: size => ({padding: Number(size)}),
  margin: size => ({margin: Number(size)}),
  mT: size => ({marginTop: Number(size)}),
  mL: size => ({marginLeft: Number(size)}),
  mR: size => ({marginRight: Number(size)}),
  mB: size => ({marginBottom: Number(size)}),
  mV: size => ({marginVertical: Number(size)}),
  mH: size => ({marginHorizontal: Number(size)}),
  pT: size => ({paddingTop: Number(size)}),
  pB: size => ({paddingBottom: Number(size)}),
  pL: size => ({paddingLeft: Number(size)}),
  pR: size => ({paddingRight: Number(size)}),
  pH: size => ({paddingHorizontal: Number(size)}),
  pV: size => ({paddingVertical: Number(size)}),
  bR: size => ({borderRadius: Number(size)}),
  top: size => ({top: Number(size)}),
  bottom: size => ({bottom: Number(size)}),
  left: size => ({left: Number(size)}),
  right: size => ({right: Number(size)}),
  borderR: (size = 1, color = colors.lightGrey) => ({
    borderRightWidth: Number(size),
    borderColor: color,
  }),
  zIndex: index => ({zIndex: index}),
  bw: size => ({borderWidth: Number(size)}),
  textAlign: z => ({textAlign: z}),
  textStyle: (fontFamily, size, color) => ({
    fontSize: size,
    color: color,
    fontFamily: fontFamily,
  }),
  elevation: value => ({elevation: value}),
  shadowDemoCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: colors.shadowBlack,

    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 7,
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: '#000000d4',
    opacity: 1,
  },
  shadowSettingView: {
    backgroundColor: colors.backGround,
    shadowColor: colors.shadowBlack,
    // opacity: 1,
    // shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,

    elevation: 24,
  },
  // shadowSettingView1: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 8,
  //   },
  //   shadowOpacity: 0.44,
  //   shadowRadius: 10.32,

  //   elevation: 16,
  // },
  titleTextStyle: {
    marginLeft: 15,
    marginTop: 41,
    fontSize: 24,
    alignSelf: 'flex-start',
    fontFamily: fonts.gilroyBold,
    color: colors.black,
  },
  bottomSheetTitle: {
    alignSelf: 'center',
    fontSize: 14,
    fontFamily: fonts.generalSansSemiBold,
    marginTop: 8,
    color: colors.black,
  },
});
