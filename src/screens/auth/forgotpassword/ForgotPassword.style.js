import { StyleSheet } from "react-native"
import colors from "../../../config/Colors"

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 16
    },
    subTitle: {
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 18,
        fontFamily: "General-Sans-Variable",
        color: "#0E1014"
    },
    errorText: {
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 16,
        color: colors.red,
        fontFamily: "General-Sans-Variable"
    },
    errorRow: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center"
    }
})
export default styles