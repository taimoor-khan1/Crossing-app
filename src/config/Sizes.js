import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
export const SIZES = {
    // global sizes
    five: height * 0.0055,
    ten: height * 0.011,
    fifteen: height * 0.017,
    twenty: height * 0.023,
    twentyWidth: width * 0.05,
    twentyFive: height * 0.03,
    twentyFiveWidth: width * 0.08,
    fifty: height * 0.075,
    fiftyWidth: width * 0.13,

    // font sizes
    h16: width * 0.034,
    h18: width * 0.038,
    h20: width * 0.042,
    h22: width * 0.048,
    h24: width * 0.055,
    body08: width * 0.024,
    body10: width * 0.028,
    body12: width * 0.032,
    body14: width * 0.036,
    body16: width * 0.04,
    body18: width * 0.045,
};