import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../../config/Images'
import styles from "./PasswordSuccess.style"
import CustomButton from '../../../components/CustomBotton'
import Labels from '../../../config/Labels'
import Screens from '../../../config/Screens'

export default function PasswordSuccess(props) {
    const { navigation } = props
    return (
        <ImageBackground source={images.BlueBg} style={styles.container}>
            <Image source={images.Shield} style={styles.img} />
            <Text style={styles.txt} >
                {Labels.successfullychanged}
            </Text>

            <CustomButton
                titleStyle={styles.titleStyle}
                btnStyle={styles.btn}
                title={Labels.logIn}
                onPress={() => {
                    navigation.navigate(Screens.login)

                }}
            />
        </ImageBackground>
    )
}
