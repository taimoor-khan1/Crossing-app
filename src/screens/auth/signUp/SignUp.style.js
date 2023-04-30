import { StyleSheet, Platform } from "react-native"
import colors from "../../../config/Colors"
import { SIZES } from "../../../config/Sizes"


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: SIZES.fifteen,

    }, txt: {
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 18,
        color: "#0E1014",
        fontFamily: "General-Sans-Variable",
    },
    Bottomtext: {
        fontSize: 13,
        fontWeight: Platform === 'ios' ? '600' : 'bold',
        lineHeight: 18,
        color: colors.black,
        textAlign: "center",
        marginTop: SIZES.fifteen,
        fontFamily: "General-Sans-Variable",
    },
    row: {
        marginTop: SIZES.twenty,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    errorText: {
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 16,
        color: colors.red,
        fontFamily: "General-Sans-Variable",
    },
    subTitle: {
        fontFamily: "General-Sans-Variable",
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 18,
        color: "#0E1014"
    },
    errorRow: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    }
})
export default styles;