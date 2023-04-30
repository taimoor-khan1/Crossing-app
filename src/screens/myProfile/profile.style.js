import { StyleSheet } from "react-native";
import colors from "../../config/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backGroundColor,

    },
    UserDetails: {
        flexDirection: "row",
        backgroundColor: colors.blue,
        padding: 14,
        borderRadius: 12
    },
    UserSection1: {
        alignItems: "center",

    },
    UserSection2: {
        flex: .7,
        marginLeft: 6

    },
    UserSection3: {
        flex: .3,
        justifyContent: "space-between",
        alignItems: "flex-end"

    },
    edit: {
        color: colors.white,
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 16.2,
        marginTop: 2,
        marginBottom: 9
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: colors.white,
        lineHeight: 22
    },
    Address: {
        lineHeight: 16.2,
        fontSize: 12,
        fontWeight: "500",
        color: colors.white,
        marginTop: 4
    }, iconRow: {
        marginTop: 8,
        flexDirection: "row",
        width: 160,
        justifyContent: "space-between"
    }, row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    icon: {
        backgroundColor: colors.white,
        width: 23,
        height: 23,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 23,
        right: 0
    }, coin: {
        flexDirection: "row",
        alignItems: "center",

    }, coinTxt: {
        fontWeight: "700",
        fontSize: 22,
        color: colors.white,
        marginLeft: 7

    }, Score: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 22,
        color: "#909193",
        marginTop: 12,
        marginBottom: 4
    }, ScoreSection: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        padding: 14
    }, ScoreRate: {
        color: colors.black,
        fontSize: 24,
        lineHeight: 28,
        fontWeight: "700",
        marginRight: 16
    }, ScoreCount: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 22,
        color: "#909193",
        position: "absolute",
        right: 14

    }, SkillTitle: {
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        fontSize: 16,
        color: colors.black,
        lineHeight: 19.36,
        fontFamily: "Inter",
        marginBottom: 2
    },
    skillDes: {
        fontFamily: "General-Sans-Variable",
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 16.2,
        color: "#909193"
    },
    skills: {
        backgroundColor: colors.white,
        borderRadius: 12,

    },
    skillsBorder: {
        borderBottomColor: "#E9E9E9",
        paddingVertical: 14,
        marginHorizontal: 14
    },
    editBtn: {
        fontWeight: Platform.OS === "ios" ? "500" : "bold",
        fontSize: 13,
        lineHeight: 22,
        fontFamily: "General-Sans-Variable",
        color: colors.blue
    },
    expTitle: {
        color: colors.blue,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        fontSize: 13,
        lineHeight: 16.2,
        fontFamily: "General-Sans-Variable",
    },
    expDuration: {
        fontFamily: "General-Sans-Variable",
        fontSize: 13,
        fontWeight: Platform.OS === "ios" ? "500" : "bold",
        lineHeight: 17.5,
        color: "#5E5F62"
    },
    expName: {
        fontFamily: "General-Sans-Variable",
        fontSize: 14,
        fontWeight: Platform.OS === "ios" ? "500" : "bold",
        lineHeight: 18.9,
        color: colors.black
    },
    expDes: {
        fontFamily: "General-Sans-Variable",
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 14.85,
        color: "#5E5F62"
    },
    eduTitle: {
        fontFamily: "General-Sans-Variable",
        fontWeight: Platform.OS === "ios" ? "500" : "bold",
        fontSize: 12,
        lineHeight: 16.2,
        color: colors.blue
    },
    eduDes: {
        fontFamily: "General-Sans-Variable",
        fontWeight: Platform.OS === "ios" ? "500" : "bold",
        fontSize: 14,
        lineHeight: 18.9,
        color: colors.black
    },
    inviteBtn: {
        marginTop: 14,
        marginBottom: 56,
        marginHorizontal: 16
    },
    bottomBar: {
        backgroundColor: colors.white,
        marginTop: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    modalText: {
        fontFamily: "General-Sans-Variable",
        fontSize: 14,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        color: colors.black,
        textAlign: "center"
    },
    Modal:
    {
        backgroundColor: colors.white,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 23,
        height: 375,
        padding: 16
    }, bar: {
        width: 44,
        height: 4,
        borderRadius: 200,
        backgroundColor: "#B4B5B6",
        alignSelf: "center",
        marginBottom: 16
    },
    sendTitle: {
        fontFamily: "General-Sans-Variable",
        fontSize: 20,
        lineHeight: 22,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        color: colors.black,
        textAlign: "center",
        marginBottom: 10
    },
    sendDes: {
        fontFamily: "General-Sans-Variable",
        fontSize: 14,
        lineHeight: 18.5,
        fontWeight: "400",
        color: "#5E5F62",
        textAlign: "center"
    }
})
export default styles