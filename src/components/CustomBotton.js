import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/Colors';
import { SIZES } from '../config/Sizes';


export default function CommonButton(props) {
    const {
        title,
        btnStyle,
        titleStyle,
        onPress,
        disabled
    } = props;


    return (

        <TouchableOpacity onPress={onPress}
            style={[
                styles.container, { backgroundColor: disabled ? "#E7E7E8" : colors.blue },
                btnStyle,
            ]}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.textStyle,
                    { color: disabled ? "#B4B5B6" : colors.white },
                    titleStyle
                ]}>
                {title}
            </Text>

        </TouchableOpacity>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        marginTop: 20,
        // paddingVertical: SIZES.fifteen * 1.3,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        paddingHorizontal: SIZES.twenty,
        // marginHorizontal: SIZES.twenty
    },
    textStyle: {
        fontWeight: "700",
        fontSize: 16,
        color: colors.white,
        fontFamily: "General-Sans-Variable"
    },
    iconStyle: {
        right: SIZES.fifteen,
        position: 'absolute',
    },
});
