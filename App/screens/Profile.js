import React, { useState, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';


function Profile(props) {

    const [fullName, setFullName] = useState('Zahid Ali')
    const [number, setNumber] = useState('+92 3367088018')
    const [email, setEmail] = useState('m.zahidalidev@gmail.com')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showProfile, setShowProfile] = useState(true)
    const [showChangePassword, setShowChangePassword] = useState(false)

    const [render, setRender] = useState(false)

    const handleSubmit = () => {
        console.log('submited')
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="#fafcfb" />
            {/* Appbar */}
            <Appbar style={{ shadowOpacity: 0.07, position: "absolute", left: 0, right: 0, top: 0, backgroundColor: "#fafcfb" }} >
                <Appbar.Action onPress={() => props.navigation.navigate('Home')} icon="arrow-left" color="black" />
                <Appbar.Content
                    title={<Text style={{ color: "black" }}> Zahid Ali </Text>}
                    style={{ alignItems: 'center' }}
                />
                <Appbar.Action onPress={() => props.navigation.navigate('Home')} icon="power" color="black" />
            </Appbar>

            <ScrollView style={{ marginTop: RFPercentage(10), width: "100%", backgroundColor: "white" }} >
                <View style={{
                    marginTop: RFPercentage(2),
                    backgroundColor: '#fff',
                    width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: "column", flex: 1,
                    maxHeight: "75%",
                }} >
                    <View style={{ borderBottomColor: "grey", borderBottomWidth: showProfile ? 0 : 0.2, padding: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ width: "90%" }} >
                            <Text style={{ fontWeight: Platform.OS === "ios" ? '500' : "bold", fontSize: RFPercentage(3) }} >Profile</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setShowChangePassword(false)
                            setShowProfile(!showProfile)
                        }} style={{ width: "10%" }} >
                            <MaterialCommunityIcons size={RFPercentage(3.2)} color="black" name={showProfile ? "chevron-down" : "chevron-right"} />
                        </TouchableOpacity>
                    </View>

                    {showProfile ?

                        <View style={{ flexDirection: "column", width: "100%", padding: RFPercentage(2), paddingTop: 0 }} >
                            <View style={{ flexDirection: "row", width: "100%" }} >
                                <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <View style={{ marginTop: RFPercentage(1) }} >
                                        <AppTextInput
                                            placeHolder="Full Name"
                                            width="100%"
                                            icon="account"
                                            value={fullName}
                                            onChange={(text) => setFullName(text)}
                                        />
                                    </View>
                                    <View style={{ marginTop: RFPercentage(3.5) }} >
                                        <AppTextInput
                                            placeHolder="Mobile Number"
                                            width="100%"
                                            icon="phone"
                                            value={number}
                                            onChange={(text) => setNumber(text)}
                                        />
                                    </View>
                                    <View style={{ marginTop: RFPercentage(3.5) }} >
                                        <AppTextInput
                                            placeHolder="Email"
                                            width="100%"
                                            icon="email"
                                            value={email}
                                            onChange={(text) => setEmail(text)}
                                            editable={false}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "100%", alignItems: "flex-end", marginTop: RFPercentage(2) }} >
                                <AppTextButton
                                    name="Save"
                                    onSubmit={() => handleSubmit()}
                                    width="27%"
                                />
                            </View>

                        </View>
                        : null
                    }
                </View>

                <View style={{
                    marginBottom: RFPercentage(3),
                    marginTop: RFPercentage(1),
                    backgroundColor: '#fff',
                    width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: "column", flex: 1,
                    // maxHeight: "75%",
                }} >

                    <View style={{ borderBottomColor: "grey", borderBottomWidth: showChangePassword ? 0 : 0.2, padding: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ width: "90%" }} >
                            <Text style={{ fontWeight: Platform.OS === "ios" ? '500' : "bold", fontSize: RFPercentage(3) }} >Change Password</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            setShowChangePassword(!showChangePassword)
                            setShowProfile(false)
                        }} style={{ width: "10%" }} >
                            <MaterialCommunityIcons size={RFPercentage(3.2)} color="black" name={showChangePassword ? "chevron-down" : "chevron-right"} />
                        </TouchableOpacity>
                    </View>

                    {showChangePassword ?
                        <View style={{ flexDirection: "column", width: "100%", padding: RFPercentage(2), paddingTop: 0 }} >
                            <View style={{ flexDirection: "row", width: "100%" }} >
                                <View style={{ flex: 2, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                                    <View style={{ marginTop: RFPercentage(1) }} >
                                        <AppTextInput
                                            placeHolder="Old Password"
                                            width="100%"
                                            icon="lock"
                                            secure={true}
                                            value={oldPassword}
                                            onChange={(text) => setOldPassword(text)}
                                        />
                                    </View>
                                    <View style={{ marginTop: RFPercentage(3.5) }} >
                                        <AppTextInput
                                            placeHolder="New Password"
                                            width="100%"
                                            icon="lock"
                                            secure={true}
                                            value={newPassword}
                                            onChange={(text) => setNewPassword(text)}
                                        />
                                    </View>
                                    <View style={{ marginTop: RFPercentage(3.5) }} >
                                        <AppTextInput
                                            placeHolder="Confirm New Password"
                                            width="100%"
                                            icon="lock"
                                            secure={true}
                                            value={confirmPassword}
                                            onChange={(text) => setConfirmPassword(text)}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: "100%", alignItems: "flex-end", marginTop: RFPercentage(5) }} >
                                <AppTextButton
                                    name="Save"
                                    onSubmit={() => handleSubmit()}
                                    width="27%"
                                />
                            </View>
                        </View> : null
                    }
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },

})

export default Profile;