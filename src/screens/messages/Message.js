import { View, Text, Image, StyleSheet, ScrollView, Pressable, TextInput, TouchableOpacity } from "react-native";
import { images } from "../../config/Images";
import { SIZES } from "../../config/Sizes";
import colors from "../../config/Colors";
import { ChatBubbleReceived, ChatBubbleSent } from "../../components/ChatBubble";
import { useNavigation } from "@react-navigation/native";
import Labels from "../../config/Labels";
import Screens from "../../config/Screens";

export default function Message() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image source={images.back} />
                    </Pressable>
                    <Image source={images.User1} style={styles.avatar} />
                    <Text style={styles.name}>Mickael B. 24</Text>
                </View>
                <View style={styles.headerContent}>
                    <Image source={images.CalendarIcon} />
                    <Text style={styles.schedule} onPress={() => navigation.navigate(Screens.RescheduleChat)}>Schedule a meeting</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <View style={styles.line} />
                    <Text style={{ width: '40%', textAlign: 'center' }}>Yesterday 3:01 PM</Text>
                    <View style={styles.line} />
                </View>
                <ChatBubbleReceived />
                <ChatBubbleSent />
                <ChatBubbleReceived />
                <ChatBubbleSent />
            </ScrollView>
            <View style={styles.row}>
                <TextInput style={styles.textInput} placeholder={Labels.TypeYourMessageHere} />
                <TouchableOpacity style={styles.sendBTN}>
                    <Image source={images.MsgSendBtn} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F9FAFA'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        marginLeft: 16,
        marginRight: 8
    },
    name: {
        fontSize: 12,
        color: '#0E1014'
    },
    schedule: {
        color: colors.blue,
        fontSize: 12,
        marginLeft: 6
    },
    line: {
        width: '30%',
        borderBottomColor: '#E7E7E8',
        borderBottomWidth: StyleSheet.hairlineWidth
    }, row: {
        flexDirection: "row",
        marginHorizontal: 16,
        alignItems: "center",
        marginBottom: 59
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#B4B5B6",
        height: 39,
        borderRadius: 200,
        paddingHorizontal: 14

    }, sendBTN: {
        marginLeft: 8
    }
})