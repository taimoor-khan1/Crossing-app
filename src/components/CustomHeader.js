import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icon, { IconType } from './Icons'
import colors from '../config/Colors'
import { SIZES } from '../config/Sizes'
import { useNavigation } from '@react-navigation/native'

export default function CustomHeader(props) {
    const {
        hasBackArrow,
        title
    } = props
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {hasBackArrow ?
                <TouchableOpacity style={styles.btn} onPress={() => [
                    navigation.goBack()
                ]}>
                    <Icon
                        name="arrow-back"
                        type={IconType.Ionicons}
                        size={SIZES.twentyFive}
                        color={colors.black}
                    />
                </TouchableOpacity> : <View style={styles.btn}>
                </View>

            }

            <Text style={[styles.txt]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.ten
    }, txt: {
        fontFamily: "Satoshi-Variable",
        marginTop: 23,
        fontWeight: "700",
        fontSize: 28,
        color: colors.black
    }, btn: {
        height: SIZES.twenty,
        marginTop: SIZES.ten
    }
})