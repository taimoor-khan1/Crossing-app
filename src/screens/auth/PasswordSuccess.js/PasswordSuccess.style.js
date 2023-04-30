import { StyleSheet } from "react-native"
import colors from "../../../config/Colors"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    btn: {
        backgroundColor: colors.white,
        marginTop: 33
    },
    txt: {
        fontFamily: "Satoshi-Variable",
        color: colors.white,
        fontWeight: "500",
        fontSize: 24,
        textAlign: "center",
        lineHeight: 31.5,
        marginTop: 44,
        paddingHorizontal: 30
    },
    titleStyle: {
        color: colors.blue
    },
    img: {
        alignSelf: "center"
    }
})
export default styles