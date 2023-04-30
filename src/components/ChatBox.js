import { View, Image, StyleSheet, Text, Pressable } from 'react-native'
import { images } from '../config/Images'
import colors from '../config/Colors'
import { useNavigation } from '@react-navigation/native'
import Screens from '../config/Screens'

export default function ChatBox({ notificationCount }) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate(Screens.message)}>
            <View style={styles.container}>
                <View style={styles.chatbox}>
                    <Image source={images.User1} />
                    <View style={styles.contentSection}>
                        <Text style={[styles.name, notificationCount > 0 && styles.unreadName]}>Megan Mags</Text>
                        <Text style={[styles.message, notificationCount > 0 ? styles.unreadMessageColor : styles.readMessageColor]}>Hello, please check your email</Text>
                    </View>
                </View>
                {notificationCount > 0 && (
                    <View style={styles.unreadCount}>
                        <Text style={styles.unreadCountText}>{notificationCount}</Text>
                    </View>
                )}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E9E9E9',
        borderBottomWidth: 0.8,
        padding: 16,

    },
    chatbox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentSection: {
        marginLeft: 6
    },
    unreadCount: {
        backgroundColor: 'red',
        width: 24,
        height: 24,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    unreadCountText: {
        color: colors.white,
    },
    name: {
        fontSize: 16,
        color: '#0E1014'
    },
    unreadName: {
        fontWeight: "600",
    },
    message: {
        fontSize: 13
    },
    unreadMessageColor: {
        color: '#0E1014',
    },
    readMessageColor: {
        color: '#5E5F62'
    }
})