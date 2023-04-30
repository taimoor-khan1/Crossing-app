import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/CustomHeader'
import colors from '../../../config/Colors'
import CustomButton from '../../../components/CustomBotton'
import EditText from '../../../components/EditText'
import Utility from '../../../utils/Utility'
import styles from "./ForgotPassword.style"
import Screens from '../../../config/Screens'
import Labels from '../../../config/Labels'
import { images } from '../../../config/Images'
import { useDispatch } from 'react-redux'
import { forgotPasswordRequest } from '../../../store/actions/UserAction'


export default function ForgotPassword(props) {
    const { navigation } = props
    const [email, setEmail] = useState('');
    const [EmailborderColor, setEmailBorderColor] = useState(colors.white);
    const [focusedEmail, setFocusedEmail] = useState(false);

    const dispatch = useDispatch()
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={styles.conatiner}>
                <CustomHeader hasBackArrow title={Labels.ForgotPassword} />

                <Text style={styles.subTitle}>{Labels.EnterRegisteredEmail}</Text>
                <EditText
                    isFocused={focusedEmail}
                    txtStyle={{ colorFocused: email !== "" && !Utility.validateEmail(email) ? colors.red : colors.blue }}
                    styleContainer={{ borderColor: email !== "" && !Utility.validateEmail(email) ? colors.red : EmailborderColor }}
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
                <CustomButton
                    disabled={email === '' || !Utility.validateEmail(email) && true}

                    onPress={() => dispatch(forgotPasswordRequest(navigation, email))}
                    btnStyle={{ marginTop: 40 }}
                    title={Labels.next}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
