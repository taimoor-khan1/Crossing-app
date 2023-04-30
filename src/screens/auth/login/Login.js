import { Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import colors from '../../../config/Colors'
import { images } from '../../../config/Images'
import { SIZES } from '../../../config/Sizes'
import EditText from '../../../components/EditText'
import CustomButton from '../../../components/CustomBotton'
import styles from './Login.style'
import SocialButton from '../../../components/SocialButton/SocialButton'
import Utility from '../../../utils/Utility'
import Screens from '../../../config/Screens'
import { resetRoot } from '../../../navigation/NavigationService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/actions/UserAction'

export default function Login(props) {
    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [Remember, setRemember] = useState(false);
    const [EmailborderColor, setEmailBorderColor] = useState(colors.white);
    const [PasswordborderColor, setPasswordBorderColor] = useState(colors.white);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={styles.container}>
                <CustomHeader title="Welcome back!" />
                <Text style={styles.subTitle}>
                    Enter the email address you’d like to use to log in to Crossingz.
                </Text>
                <EditText
                    isFocused={focusedEmail}
                    txtStyle={{ colorFocused: email !== "" && !Utility.validateEmail(email) ? colors.red : colors.blue }}
                    styleContainer={{ borderColor: email !== "" && !Utility.validateEmail(email) ? colors.red : EmailborderColor }}
                    title="Email address"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={value => setEmail(value)}
                    onFocus={() => {
                        setFocusedEmail(true)
                        setEmailBorderColor(colors.blue);
                    }}
                    onBlur={() => {
                        setFocusedEmail(false)
                        setEmailBorderColor(colors.white);
                    }}
                />
                {email !== "" && !Utility.validateEmail(email) &&
                    <View style={styles.errorRow}>
                        <Image source={images.error} />
                        <Text style={styles.errorText}> Invalid Email</Text>
                    </View>
                }
                <EditText
                    password
                    isFocused={focusedPassword}
                    txtStyle={{ colorFocused: password !== "" && !Utility.validatePassword(password) ? colors.red : colors.blue }}
                    styleContainer={{ marginTop: 20, borderColor: password !== "" && !Utility.validatePassword(password) ? colors.red : PasswordborderColor }}
                    title="Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    onFocus={() => {
                        setFocusedPassword(true)
                        setPasswordBorderColor(colors.blue);
                    }}
                    onBlur={() => {
                        setFocusedPassword(false)
                        setPasswordBorderColor(colors.white);
                    }}
                />
                {password !== "" && !Utility.validatePassword(password) &&
                    <View style={styles.errorRow}>
                        <Image source={images.error} />

                        <Text style={styles.errorText}>  Invalid Password</Text>
                    </View>

                }

                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => {
                            setRemember((pre) => !pre)
                        }}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image source={Remember ? images.BlueBox : images.GreyBox} />
                        <Text style={[styles.Bottomtext, { marginLeft: SIZES.five, marginTop: 0 }]}>
                            Remember me
                        </Text>
                    </TouchableOpacity>
                    <Text style={[styles.Bottomtext, { color: colors.blue, marginTop: 0 }]}
                        onPress={() => {
                            navigation.navigate(Screens.ForgotPassword)
                        }}
                    >
                        Forgot password?
                    </Text>
                </View>
                <CustomButton
                    disabled={email === '' || password === '' || !Utility.validateEmail(email) || !Utility.validatePassword(password) && true}
                    title={"Log In"} onPress={() => { dispatch(login(navigation, { email, password })) }} />
                <Text style={styles.Bottomtext1}>
                    Don’t have an account?{" "}
                    <Text style={{ color: colors.blue }} onPress={() => {
                        navigation.navigate(Screens.SignUp)
                    }}>
                        Sign Up
                    </Text>
                </Text>
                <SocialButton
                    btnStyle={{ marginTop: 24 }}
                    image={images.LinkedinIcon}
                    title="Continue with LinkedIn" />
                <SocialButton
                    image={images.AppleIcon}
                    title="Continue with Apple" />

            </View>
        </TouchableWithoutFeedback>
    )
}
