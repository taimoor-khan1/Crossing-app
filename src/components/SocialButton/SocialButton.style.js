import { StyleSheet } from "react-native";
import colors from "../../config/Colors";
import { SIZES } from "../../config/Sizes";

const styles = StyleSheet.create({
    container: {
        height: 48,
        marginTop: 12,

        borderWidth: .8,
        borderRadius: 12,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: colors.white,
        borderColor: "#B4B5B6",
        paddingLeft: 88,
        flexDirection: "row",
        fontFamily: "General-Sans-Variable"
    },
    textStyle: {
        marginLeft: 8,
        fontWeight: "500",
        fontSize: 16,
        color: colors.black
    },
    iconStyle: {
        right: SIZES.fifteen,
        position: 'absolute',
    },
});

export default styles
