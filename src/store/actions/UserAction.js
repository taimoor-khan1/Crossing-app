import { LOGIN, REGISTRATION } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../api/Api';
import Screens from '../../config/Screens';
import Toast from 'react-native-simple-toast'

export const login = (navigation, params) => {
  return async dispatch => {
    console.log(params)
    var response = await Api._post('user/sign-in', params);
    console.log('response:', response)
    if (response.data) {
      if (response.data.data.email_verified === false) {
        Toast.show(response.data.message)
      } else {
        await AsyncStorage.setItem('user_detail', JSON.stringify(response.data.data))
        await AsyncStorage.setItem('token_detail', JSON.stringify(response.data.tokenDetails))

        dispatch({ type: LOGIN, payload: response.data.data })
        navigation.replace('DrawerStack')
      }
    }
  };
};

export const signUp = (navigation, credentials) => {
  return async dispatch => {
    let result = await Api._post('user/sign-up', credentials)
    if (result) {
      dispatch({ type: REGISTRATION, payload: null })
      navigation.navigate(Screens.verifyEmail, { email: credentials.email, optType: 'email_verification' })
    }
  }
}

export const verifyUserEmail = (navigation, credentials) => {
  return async dispatch => {
    console.log("data get", credentials)

    let response = await Api._post('user/email-verify', credentials)
    if (response.data) {
      await AsyncStorage.setItem('user_detail', JSON.stringify(response.data))
      await AsyncStorage.setItem('token_details', JSON.stringify(response.data.tokenDetails))
      dispatch({ type: LOGIN, payload: response.data.data })
      navigation.replace('DrawerStack')
    }
  }
}


export const forgotPasswordRequest = (navigation, email) => {
  return async dispatch => {
    let response = await Api._post('user/forget-password', { email })
    if (response.data) {
      Toast.show(response.data.message)
      navigation.navigate(Screens.verifyEmail, { email, otpType: 'password_reset_otp' })
    }
  }
}

export const verifyPasswordResetOtp = (navigation, credentials) => {
  return async dispatch => {
    let response = await Api._post('user/verify-otp', credentials)
    console.log("forgot password reset", credentials)

    if (response.data) {
      Toast.show(response.data?.message)
      console.log(response.data.data.userId)
      navigation.navigate(Screens.CreateNewPassword, { userId: response.data?.data.userId })
    }
  }
}

export const resetPasswordRequest = (navigation, credentials) => {
  return async dispatch => {
    let response = await Api._post('user/reset-password', credentials)
    if (response.data) {
      Toast.show(response.data.message)
      navigation.navigate(Screens.PasswordSuccess)
    }
  }
}

export const resendOtp = (email) => {
  return async dispatch => {
    let response = await Api._post('user/resend-code', { email })
    if (response.data) {
      Toast.show(response.data.message)
    }
  }
}