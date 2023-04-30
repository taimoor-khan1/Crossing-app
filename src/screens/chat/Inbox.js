import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomHeader2 from '../../components/CustomHeader2'
import Labels from '../../config/Labels'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import colors from '../../config/Colors';
import { images } from '../../config/Images';
import ChatBox from '../../components/ChatBox';
import styles from './inbox.styles';

export default function Inbox() {
    const [cont, setCont] = useState('');
    return (
        <View style={styles.container}>
            <CustomHeader2 title={Labels.inbox} hasBackArrow ShowCalendarIcon ShowChatIcon ShowbellIcon />
            <View style={styles.searchContainer}>
                <Image source={images.searchIcon} />
                <TextInput placeholder="Search" style={styles.input} />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <ChatBox notificationCount={2} />
                <ChatBox />
                <ChatBox notificationCount={19} />
                <ChatBox />
            </ScrollView>
        </View>
    )
}
