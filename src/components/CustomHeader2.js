import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon, { IconType } from "./Icons";
import { useSelector } from "react-redux";
import colors from '../config/Colors'
import { SIZES, width } from '../config/Sizes'
import { images } from '../config/Images'
import Screens from "../config/Screens";


export default function CustomHeader(props) {
    const {
        title,
        subTitle,
        menu,
        hasBackArrow,
        ShowChatIcon,
        ShowbellIcon,
        ShowCalendarIcon,
        onPressmenu

    } = props;
    const navigation = useNavigation();

    return (
        <View style={[styles.container, props.containerStyle]}>
            <View style={{ flex: 0.2 }}>
                {hasBackArrow && (
                    <TouchableOpacity
                        // style={{ padding: 8 }}
                        activeOpacity={0.85}
                        onPress={() => navigation.goBack()}
                    >
                        <View
                            style={[
                                styles.btnStyle,
                                props.style,
                            ]}
                        >
                            <Image source={images.back} />
                        </View>
                    </TouchableOpacity>
                )}
                {menu && (
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={onPressmenu}

                    >
                        <View
                            style={[
                                styles.btnStyle,
                                props.style,
                            ]}
                        >
                            <Image source={images.menu} />
                        </View>
                    </TouchableOpacity>
                )}

            </View>

            {title && (
                <View style={[styles.titleContainer]}>
                    <Text
                        style={[

                            styles.titleStyle,

                        ]}
                    >
                        {title}
                    </Text>

                    {subTitle ? (
                        <Text style={[styles.subTtitleStyle]}>
                            {"  "}( {subTitle} )
                        </Text>
                    ) : null}
                </View>
            )}
            <View style={{ flex: 0.2 }} />
            <View style={styles.RightIcon}>
                {ShowCalendarIcon &&
                    <TouchableOpacity
                        activeOpacity={0.85}
                    >
                        <View
                            style={[
                                styles.btnStyle1,
                                props.style,
                            ]}
                        >
                            <Image source={images.CalendarIcon} />
                        </View>
                    </TouchableOpacity>

                }
                {ShowbellIcon &&
                    <TouchableOpacity
                        activeOpacity={0.85}
                    >
                        <View
                            style={[
                                styles.btnStyle1,
                                props.style,
                            ]}
                        >
                            <Image source={images.bellIcon} />
                        </View>
                    </TouchableOpacity>

                }
                {ShowChatIcon &&
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={() => {
                            navigation.navigate(Screens.inbox)
                        }}

                    >
                        <View
                            style={[
                                styles.btnStyle1,
                                props.style,
                            ]}
                        >
                            <Image source={images.ChatIcon} />
                        </View>
                    </TouchableOpacity>

                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        // marginHorizontal: SIZES.ten,
        paddingVertical: SIZES.ten,
        // marginTop: SIZES.fifteen,
    },
    btnStyle: {
        // borderWidth: 1,
        height: width * 0.1,
        width: width * 0.1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width,
        marginRight: SIZES.twenty

    },
    btnStyle1: {
        // borderWidth: 1,
        height: width * 0.1,
        width: width * 0.1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    titleStyle: {
        color: colors.black,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: "500"
    },
    subTtitleStyle: {
        color: colors.textColor,
        alignSelf: "flex-end",
        marginBottom: 2,
    },
    iconStyle: {
        flex: 0.2,
        alignItems: "flex-end",
    },
    shuffleBtnStyle: {
        borderWidth: 1,
        height: width * 0.08,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: SIZES.ten,
        borderColor: colors.lightPurple,
        marginLeft: -SIZES.twenty * 2.5,
        paddingHorizontal: SIZES.ten,
    },
    shuffleTextStyle: {
        color: colors.purple,
        marginLeft: SIZES.five,
    }, RightIcon: {
        flexDirection: "row",
        position: "absolute",
        right: 0
    }
});
