import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import colors from '../../../config/Colors'
import CustomHeader from '../../../components/CustomHeader'
import styles from './VerifyEmail.style'
import CustomButton from '../../../components/CustomBotton'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Labels from '../../../config/Labels'
import { useDispatch } from 'react-redux'
import { verifyUserEmail, verifyPasswordResetOtp, resendOtp } from '../../../store/actions/UserAction'

export default function VerifyEmail(props) {
    const { navigation, route } = props
    const { email, optType } = route.params
    console.log("optType", optType)
    const dispatch = useDispatch()
    const [code, setcode] = useState('');
    const inputRef = useRef(null);
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={styles.container}>
                <CustomHeader hasBackArrow title={Labels.VerifyYourEmail} />
                <Text style={styles.subTitle}>{Labels.EnterverificationCode}</Text>
                <View>
                    <OTPInputView
                        code={code}
                        pinCount={4}
                        ref={inputRef}
                        onCodeChanged={setcode}
                        secureTextEntry
                        selectionColor={colors.blue}
                        codeInputFieldStyle={[styles.otp]}
                        codeInputHighlightStyle={[styles.otpSelected]}
                        style={styles.OTPContainer}
                    />
                </View>

                <Text style={styles.Bottomtext} onPress={() => optType === 'email_verification' ? dispatch(resendOtp(email)) : null}>
                    {Labels.DidnGetaCode}{" "}
                    <Text style={{ color: colors.blue }}>
                        00:16
                    </Text>
                </Text>
                <CustomButton
                    btnStyle={{ marginTop: 40 }}
                    title={Labels.Verify}
                    disabled={code.length === 4 ? false : true}
                    onPress={() =>
                        optType === 'email_verification' ?
                            dispatch(verifyUserEmail(navigation, { email, code: Number(code) })) :
                            dispatch(verifyPasswordResetOtp(navigation, { email, code: Number(code) }))
                    }
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
