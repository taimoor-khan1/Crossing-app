import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/Colors'
import { images } from '../config/Images'

export default function CircleButton(props) {
    const { style, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
            <Image source={images.Forwardbutton} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignSelf: "center"
    }
})