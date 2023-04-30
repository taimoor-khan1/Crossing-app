import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../config/Colors'
import { images } from '../../../config/Images'
import { SIZES } from '../../../config/Sizes'
import CustomButton from '../../../components/CustomBotton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Screens from '../../../config/Screens'
import styles from './StarScreen.style'
import Labels from '../../../config/Labels'

export default function StarScreen(props) {
    const { navigation } = props
    return (
        <View style={styles.Container}>
            <Image source={images.logo} style={{ marginBottom: SIZES.fifty }} />
            <View style={styles.bottom}>
                <View style={{ alignItems: "center", marginHorizontal: SIZES.fifty }}>
                    <Text style={styles.heading}>

                        {Labels.WelcometoCrossingz}
                    </Text>
                    <Text style={[styles.txt, { textAlign: "center" }]}>
                        {Labels.Connect}
                    </Text>
                </View>
                <View style={{ paddingHorizontal: SIZES.twenty }}>
                    <CustomButton title={Labels.CreateAccount}
                        btnStyle={{ marginTop: 24 }}
                        onPress={() => {
                            navigation.navigate(Screens.SignUp)

                        }} />
                    <CustomButton title={Labels.Already} titleStyle={{ color: colors.blue }}
                        onPress={async () => {
                            navigation.navigate(Screens.login);
                        }}
                        btnStyle={{ backgroundColor: "#007AFF" + 18, marginTop: 8 }} />
                </View>
            </View>
        </View>
    )
}
