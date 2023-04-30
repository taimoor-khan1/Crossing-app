import { StyleSheet } from "react-native"
import colors from "../../../config/Colors"
import { SIZES } from "../../../config/Sizes"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 16
    }, subTitle: {
        fontFamily: "General-Sans-Variable",
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 18,
        color: "#0E1014"
    },
    Bottomtext: {
        fontSize: 13,
        fontWeight: "600",
        lineHeight: 18,
        color: colors.black,
        textAlign: "center",
        fontFamily: "General-Sans-Variable"
    },
    OTPContainer: {
        height: 56,
        width: 208,
        alignSelf: "center",
        marginTop: 28,
        marginBottom: 16
    },
    otp: {
        borderRadius: 12,
        height: 56,
        width: 40,
        fontSize: SIZES.twentyFive,
        backgroundColor: colors.lightGrey,
        color: colors.blue,
        borderRadius: SIZES.ten,
        shadowColor: '#00000035',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 8.3,
        elevation: 13,
    },
    otpSelected: {
        borderRadius: SIZES.fifteen,
        fontSize: SIZES.twentyFive,
        backgroundColor: colors.white,
        color: colors.black,
        borderRadius: SIZES.ten,
        shadowColor: '#00000035',
        shadowOffset: {
            width: 0,
            height: 6,
        }
    },
    filled: {
        color: colors.blue,
        backgroundColor: colors.red
    }
})
export default styles