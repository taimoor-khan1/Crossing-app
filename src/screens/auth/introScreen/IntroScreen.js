import { Image, ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/Colors'
import { images } from '../../../config/Images'
import CircleButton from '../../../components/CircleButton'
import Unorderedlist from 'react-native-unordered-list';
import { SIZES } from '../../../config/Sizes'
import Screens from '../../../config/Screens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './IntroScreen.style'
import Labels from '../../../config/Labels'

export default function IntroScreen(props) {
    const { navigation } = props
    const [select, setSelect] = useState(false)
    const [swiper, setswiper] = useState(false)
    return (
        <View style={styles.container}>
            {!select &&
                <Text style={styles.skip} onPress={() => navigation.navigate(Screens.startScreen)}>
                    {Labels.skip}
                </Text>
            }
            <View style={{ flex: 1, justifyContent: "center" }}>
                {!select ?
                    <>
                        <Image source={images.logo} style={styles.logo} />
                        <Text style={styles.text}>
                            {Labels.weBelive}
                        </Text>
                        <Unorderedlist color={colors.black} >
                            <Text style={styles.text}>
                                {Labels.ponit1}
                            </Text>
                        </Unorderedlist>
                        <Unorderedlist color={colors.black}>
                            <Text style={styles.text}>
                                {Labels.point2}

                            </Text>

                        </Unorderedlist>
                        <Unorderedlist color={colors.black}>
                            <Text style={styles.text}>
                                {Labels.point3}

                            </Text>
                        </Unorderedlist>
                        <Unorderedlist color={colors.black}>
                            <Text style={styles.text}>
                                {Labels.point4}

                            </Text>
                        </Unorderedlist>
                    </> : <>
                        <View style={styles.ImageBox}  >
                            <Image source={images.IntroCard} resizeMode="contain" />
                            {/* <View style={{ bottom: 0, position: "absolute", margin: SIZES.ten }}>
                                <Text style={styles.boxHeading}>
                                    Mike Smith, 24
                                </Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={images.Star} style={{ marginRight: SIZES.ten }} />
                                    <Text style={styles.boxHeading}>
                                        4.9
                                    </Text>

                                </View>
                            </View> */}
                        </View>
                        <Text style={[styles.text1]}>
                            {Labels.Swip}
                        </Text>
                        <Text style={styles.text}>
                            {Labels.SwipDetail}
                        </Text>

                    </>}
                <View style={styles.row}>
                    <Image source={!select ? images.BlueCircle : images.GreyCircle} style={{ marginRight: SIZES.ten }} />
                    <Image source={select ? images.BlueCircle : images.GreyCircle} />
                </View>
            </View>
            <CircleButton style={styles.btnStyle} onPress={async () => {
                if (!select) {
                    setSelect(true);
                } else {
                    navigation.navigate(Screens.startScreen);
                }
            }} />
        </View>
    )
}
