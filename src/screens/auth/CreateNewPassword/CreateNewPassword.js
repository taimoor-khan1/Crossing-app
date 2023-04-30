import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../components/CustomBotton'
import CustomHeader from '../../../components/CustomHeader'
import EditText from '../../../components/EditText'
import styles from './CreateNewPassword.style'
import Labels from '../../../config/Labels'
import Screens from '../../../config/Screens'
import colors from '../../../config/Colors'
import { useDispatch } from 'react-redux'
import { resetPasswordRequest } from '../../../store/actions/UserAction'

export default function CreateNewPassword(props) {
    const { navigation, route } = props
    const { userId } = route.params
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [NewPasswordborderColor, setNewPasswordBorderColor] = useState(colors.white);
    const [ConfirmPasswordborderColor, setConfirmPasswordBorderColor] = useState(colors.white);
    const [focusedPassword, setFocusedPassword] = useState(false);
    const [focusedconfirmPassword, setFocusedConfirmPassword] = useState(false);
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>

            <View style={styles.conatiner}>
                <CustomHeader hasBackArrow title={Labels.Createpassword} />
                <Text style={styles.subTitle}>{Labels.EnterYourNewPassword}</Text>
                <EditText
                    password
                    isFocused={focusedPassword}
                    borderColor={NewPasswordborderColor}
                    title={Labels.NewPassworPlaceHolder}
                    txtStyle={{ colorFocused: colors.blue }}
                    styleContainer={{ borderColor: NewPasswordborderColor }}
                    value={newPassword}
                    onChangeText={value => setNewPassword(value)}
                    onFocus={() => {
                        setFocusedPassword(true)
                        setNewPasswordBorderColor(colors.blue);
                    }}
                    onBlur={() => {
                        setFocusedPassword(false)
                        setNewPasswordBorderColor(colors.white);
                    }}

                />
                <EditText
                    password

                    isFocused={focusedconfirmPassword}
                    value={confirmPassword}
                    borderColor={ConfirmPasswordborderColor}
                    txtStyle={{ colorFocused: colors.blue }}
                    styleContainer={{ borderColor: ConfirmPasswordborderColor }}
                    title={Labels.ConfirmPasswordPlaceHolder}
                    onChangeText={value => setConfirmPassword(value)}
                    onFocus={() => {
                        setFocusedConfirmPassword(true)
                        setConfirmPasswordBorderColor(colors.blue);
                    }}
                    onBlur={() => {
                        setFocusedConfirmPassword(false)

                        setConfirmPasswordBorderColor(colors.white);
                    }}
                />
                <CustomButton
                    btnStyle={{ marginTop: 40 }}
                    title={Labels.next}
                    onPress={() => {
                        dispatch(resetPasswordRequest(navigation, { userId, password: newPassword }))
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}
