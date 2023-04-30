import { View, Text } from 'react-native'
import colors from '../config/Colors'
export function ChatBubbleReceived() {
    return (
        <View style={{ alignSelf: 'flex-start' }}>
            <View style={{
                backgroundColor: '#E7E7E8',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                padding: 10,
            }}>


                <Text style={{
                    color: '#0E1014',
                    fontSize: 13
                }}>Hi, How are you doing?</Text>
            </View>
            <Text style={{ color: '#5E5F62', fontSize: 10 }}>05:00 PM</Text>
        </View>
    )
}

export function ChatBubbleSent() {
    return (
        <View style={{ alignSelf: 'flex-end' }}>
            <View style={{
                backgroundColor: colors.blue,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                padding: 10,

            }}>

                <Text style={{

                    color: '#fff',
                    fontSize: 13
                }}>Hi, How are you doing?</Text>
            </View>

            <Text style={{ color: '#5E5F62', fontSize: 10 }}>05:00 PM</Text>
        </View>
    )
}