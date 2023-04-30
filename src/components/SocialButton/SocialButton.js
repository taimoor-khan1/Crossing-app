import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './SocialButton.style';


export default function SocialButton(props) {
    const {
        title,
        image,
        btnStyle,
        titleStyle,
        onPress,
    } = props;


    return (
        <TouchableOpacity onPress={onPress}
            style={[
                styles.container,
                btnStyle,
            ]}
        // disabled={disabled}
        >
            <Image
                source={image}
            />
            <Text
                style={[
                    styles.textStyle,
                    titleStyle
                ]}>
                {title}
            </Text>

        </TouchableOpacity>
        // </View>
    );
}
