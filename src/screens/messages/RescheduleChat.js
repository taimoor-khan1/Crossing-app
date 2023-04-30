import { ScrollView, Text, View, StyleSheet } from "react-native";
import RescheduleChatTimeBox from '../../components/RescheduleChatTimeBox';
import CustomButton from '../../components/CustomBotton'
import CustomHeader from "../../components/CustomHeader2";
import Labels from "../../config/Labels";
import colors from "../../config/Colors";


export default function RescheduleChat() {
    return (
        <View style={styles.container}>
            <CustomHeader hasBackArrow title={Labels.RescheduleChat} />



            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 14, color: '#909193' }}>Your Availabilities</Text>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#3E4043', marginVertical: 8 }}>Monday 9, March</Text>
                    <RescheduleChatTimeBox />
                    <RescheduleChatTimeBox />
                    <RescheduleChatTimeBox />

                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#3E4043', marginVertical: 8 }}>Tuesday 10, March</Text>
                    <RescheduleChatTimeBox />
                    <RescheduleChatTimeBox />
                </ScrollView>
                <CustomButton title='Reschedule'></CustomButton>
                <CustomButton btnStyle={styles.btn} titleStyle={styles.createAvailability} title='Create availability'></CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFA'
    },
    header: {
        alignItems: 'center',
        paddingTop: 55
    },
    title: {
        color: '#0E1014',
        fontSize: 17,
        fontWeight: '500'
    }, createAvailability: {
        color: colors.blue
    }, btn: {
        backgroundColor: colors.blue + 20
    }
})