import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import React from 'react';
import colors from '../../config/Colors';
import CustomHeader2 from '../../components/CustomHeader2';
import Labels from '../../config/Labels';
import { images } from '../../config/Images';
import { Rating } from 'react-native-ratings';
import ReactNativeModal from 'react-native-modal';
import CustomButton from '../../components/CustomBotton';
import { useState } from 'react';
import EditText from '../../components/EditText';
import Utility from '../../utils/Utility';
import styles from './profile.style';

export const { width, height } = Dimensions.get('window');
export default function Profile(props) {
    const { navigation } = props
    const [modalVisible, setModalVisible] = useState(false);
    const [sendInviate, setSendInviate] = useState(false);
    const [email, setEmail] = useState('');
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [EmailborderColor, setEmailBorderColor] = useState(colors.white);

    // ================================================Render Skills================================================
    const renderSkills = ({ item, index }) => {
        return (
            <View>
                <View
                    style={[
                        styles.skillsBorder,
                        { borderBottomWidth: index === skills.length - 1 ? 0 : 2 },
                    ]}>
                    <Text style={styles.SkillTitle}>{item.name}</Text>
                    <Text style={styles.skillDes}>{item.des}</Text>
                </View>
            </View>
        );
    };
    // ================================================Render Experience================================================
    const renderExperience = ({ item, index }) => {
        return (
            <View>
                <View
                    style={[
                        styles.skillsBorder,
                        { borderBottomWidth: index === experience.length - 1 ? 0 : 2 },
                    ]}>
                    <Text style={styles.expDuration}>{item.duration}</Text>
                    <Text style={styles.expTitle}>{item.title}</Text>
                    <Text style={styles.expName}>{item.name}</Text>
                    <Text style={styles.expDes}>{item.des}</Text>
                </View>
            </View>
        );
    };
    // ================================================Render Education================================================
    const renderEducation = ({ item, index }) => {
        return (
            <View>
                <View
                    style={[
                        styles.skillsBorder,
                        { borderBottomWidth: index === education.length - 1 ? 0 : 2 },
                    ]}>
                    <Text style={styles.eduTitle}>
                        {item.title}
                        <Text style={{ color: '#2EAE4E' }}>{item?.subTitle}</Text>
                    </Text>
                    <Text style={styles.eduDes}>{item.des}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <CustomHeader2
                    title={Labels.MyProfile}
                    menu
                    ShowChatIcon
                    ShowbellIcon
                    onPressmenu={() => {
                        navigation.toggleDrawer();
                    }}
                />
                {/* User Profile Details */}
                <View style={styles.UserDetails}>
                    <View style={styles.UserSection1}>
                        <Image source={images.User1} />
                        <Text style={styles.edit}>{Labels.Edit}</Text>
                    </View>
                    <View style={styles.UserSection2}>
                        <Text style={styles.name}>Megan Megs, 24</Text>
                        <Text style={styles.Address}>
                            Policy Advisor at ThinkTank UWS, 2020 Lives in New York, US
                        </Text>
                        <View style={styles.iconRow}>
                            <Image source={images.LinkedinIconWhite} />
                            <Image source={images.fbIconWhite} />
                            <Image source={images.TiktokIconWhite} />
                            <Image source={images.instaIconWhite} />
                            <Image source={images.twiterIconWhite} />
                        </View>
                    </View>
                    <View style={styles.UserSection3}>
                        <View style={styles.icon}>
                            <Image source={images.edit} />
                        </View>
                        <View style={styles.coin}>
                            <Image source={images.Coins} />
                            <Text style={styles.coinTxt}>289</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.Score}>{Labels.Score}</Text>
                <View style={styles.ScoreSection}>
                    <Text style={styles.ScoreRate}>4.9</Text>
                    <Rating readonly startingValue={5} ratingCount={5} imageSize={18} />
                    <Text style={styles.ScoreCount}>79</Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    {/* ======Skills======   */}
                    <View style={styles.row}>
                        <Text style={styles.Score}>{Labels.Skills}</Text>
                        <Text style={styles.editBtn}>{Labels.Edit}</Text>
                    </View>
                    <View>
                        <FlatList
                            contentContainerStyle={styles.skills}
                            data={skills}
                            keyExtractor={item => {
                                item.id;
                            }}
                            renderItem={renderSkills}
                        />
                    </View>
                    {/* ======Experience ======   */}
                    <View style={styles.row}>
                        <Text style={styles.Score}>{Labels.Experience}</Text>
                        <Text style={styles.editBtn}>{Labels.Edit}</Text>
                    </View>
                    <View>
                        <FlatList
                            contentContainerStyle={styles.skills}
                            data={experience}
                            keyExtractor={item => {
                                item.id;
                            }}
                            renderItem={renderExperience}
                        />
                    </View>

                    {/* ======Education ======   */}
                    <View style={styles.row}>
                        <Text style={styles.Score}>{Labels.Education}</Text>
                        <Text style={styles.editBtn}>{Labels.Edit}</Text>
                    </View>
                    <View>
                        <FlatList
                            contentContainerStyle={styles.skills}
                            data={education}
                            keyExtractor={item => {
                                item.id;
                            }}
                            renderItem={renderEducation}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottomBar}>
                <CustomButton
                    title={Labels.InviteFriend}
                    btnStyle={styles.inviteBtn}
                    onPress={() => {
                        setEmail('');
                        setModalVisible(true);
                        setSendInviate(false);
                    }}
                />
            </View>
            <ReactNativeModal
                isVisible={modalVisible}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationIn={'slideInUp'}
                animationInTiming={450}
                animationOutTiming={450}
                hideModalContentWhileAnimating
                deviceHeight={height * height}
                coverScreen
                animationOut={'slideOutDown'}>
                <View style={styles.Modal}>
                    <View style={styles.bar} />
                    {!sendInviate ? (
                        <>
                            <Text style={styles.modalText}>{Labels.InviteFriend}</Text>
                            <EditText
                                isFocused={focusedEmail}
                                txtStyle={{
                                    colorFocused:
                                        email !== '' && !Utility.validateEmail(email)
                                            ? colors.red
                                            : colors.blue,
                                }}
                                styleContainer={{
                                    borderColor:
                                        email !== '' && !Utility.validateEmail(email)
                                            ? colors.red
                                            : EmailborderColor,
                                }}
                                title="Email address"
                                value={email}
                                onChangeText={value => setEmail(value)}
                                onFocus={() => {
                                    setFocusedEmail(true);
                                    setEmailBorderColor(colors.blue);
                                }}
                                onBlur={() => {
                                    setFocusedEmail(false);
                                    setEmailBorderColor(colors.white);
                                }}
                            />
                            <CustomButton
                                title={Labels.SendInviate}
                                disabled={
                                    email === '' || (!Utility.validateEmail(email) && true)
                                }
                                onPress={() => {
                                    setSendInviate(true);
                                    setTimeout(() => {
                                        setModalVisible(false);
                                    }, 2000);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Image source={images.PaperPlain} />
                            <Text style={styles.sendTitle}>{Labels.SendInviate}</Text>
                            <Text style={styles.sendDes}>
                                Your invite has been sent to{'\n'}
                                {email}
                            </Text>
                        </>
                    )}
                </View>
            </ReactNativeModal>
        </View>
    );
}
const skills = [
    {
        id: 1,
        name: 'I can Teach',
        des: 'Martial arts Product Management',
    },
    {
        id: 2,
        name: 'Interested in learning about',
        des: 'Interested in learning about',
    },
    {
        id: 3,
        name: 'About me',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id quam imperdiet, maximus est sit amet, consequat augue. Integer ut augue vitae nulla accumsan dictum id sit amet turpis. Morbi eu varius ipsum',
    },
];
const experience = [
    {
        id: 1,
        duration: '2021 - Present',
        name: 'I can Teach',
        title: 'Finance ',
        des: 'Toranto, Canada',
    },
    {
        id: 2,
        duration: '2022 - 2023',
        name: 'Interested in learning about',
        title: 'Finance ',
        des: 'Toranto, Canada',
    },
];
const education = [
    {
        id: 1,
        title: 'Harvard University ',
        subTitle: ', Attending',
        des: 'Toranto, Canada',
    },
    {
        id: 2,
        title: 'Conestoga College Kitchener, 2020 ',
        des: 'Toranto, Canada',
    },
];