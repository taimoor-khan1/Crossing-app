import { StyleSheet, View, Text } from "react-native"

export default function RescheduleChatTimeBox() {
    return (
        <View style={styles.selectionBox}>
            <Text style={styles.date}>06:00 pm - 06:30 pm EST</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    selectionBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: '#E7E7E8',
        marginVertical: 8
    },
    date: {
        fontSize: 20,
        fontWeight: '400',
        color: '#0E1014'
    }
})