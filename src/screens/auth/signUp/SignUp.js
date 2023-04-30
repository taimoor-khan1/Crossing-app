import { Image, StyleSheet, Text, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import colors from '../../../config/Colors'
import { images } from '../../../config/Images'
import { SIZES } from '../../../config/Sizes'
import EditText from '../../../components/EditText'
import CustomButton from '../../../components/CustomBotton'
import styles from './SignUp.style'
import SocialButton from '../../../components/SocialButton/SocialButton'
import Utility from '../../../utils/Utility'
import Screens from '../../../config/Screens'
import Labels from '../../../config/Labels'
import { signUp } from '../../../store/actions/UserAction'
import { useDispatch } from 'react-redux'

export default function SignUp(props) {
    const { navigation } = props
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState("");
    const [NameborderColor, setNameBorderColor] = useState(colors.white);
    const [focusedName, setFocusedName] = useState(false);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [EmailborderColor, setEmailBorderColor] = useState(colors.white);
    const [PasswordborderColor, setPasswordBorderColor] = useState(colors.white);

    const dispatch = useDispatch()
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>



                <CustomHeader title={Labels.LetGetStarted} />
                <Text style={styles.subTitle}>
                    {Labels.EnterTheEmail}
                </Text>
                <EditText
                    isFocused={focusedName}
                    txtStyle={{ colorFocused: colors.blue }}
                    styleContainer={{ marginTop: 20, borderColor: NameborderColor }}
                    title={Labels.NamePlaceHolder}
                    value={name}
                    onChangeText={value => setName(value)}
                    onFocus={() => {
                        setNameBorderColor(colors.blue);
                        setFocusedName(true)
                    }}
                    onBlur={() => {
                        setFocusedName(false);
                        setNameBorderColor(colors.white);
                    }}
                />
                <EditText
                    isFocused={focusedEmail}
                    txtStyle={{ colorFocused: email !== "" && !Utility.validateEmail(email) ? colors.red : colors.blue }}
                    styleContainer={{ marginTop: 20, borderColor: email !== "" && !Utility.validateEmail(email) ? colors.red : EmailborderColor }}
                    title={Labels.EmailPlaceHolder}
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
                    title={Labels.PasswordPlaceHolder}
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

                <CustomButton title={Labels.signUp}
                    disabled={name === '' || email === '' || password === '' || !Utility.validateEmail(email) || !Utility.validatePassword(password) && true}
                    onPress={() => {
                        dispatch(signUp(navigation, { email, fullName: name, password, role: "user" }))
                    }} />
                <Text style={styles.Bottomtext}>
                    {Labels.AlreadyHaveAnAccount} {" "}
                    <Text style={{ color: colors.blue }} onPress={() => { navigation.navigate(Screens.login) }}>
                        {Labels.logIn}
                    </Text>
                </Text>
                <SocialButton
                    btnStyle={{ marginTop: 24 }}
                    image={images.LinkedinIcon}
                    title={Labels.ContinueWithLinkedIn} />
                <SocialButton
                    image={images.AppleIcon}
                    title={Labels.ContinueWithApple} />
            </View>
        </TouchableWithoutFeedback>
    )
}
