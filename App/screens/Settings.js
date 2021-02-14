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

function Settings(props) {

    const [fullName, setFullName] = useState('Zahid Ali')
    const [number, setNumber] = useState('+92 3367088018')
    const [email, setEmail] = useState('m.zahidalidev@gmail.com')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [termsConditions, SetTermsConditions] = useState(true)
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [supportCenter, setsupportCenter] = useState(false)

    const [render, setRender] = useState(false)

    const handleSubmit = () => {
        console.log('submited')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="#fafcfb" />
            {/* Appbar */}
            <Appbar style={{ position: "absolute", left: 0, right: 0, top: 0, backgroundColor: "#fafcfb" }} >
                <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="arrow-left" color="black" />
                <Appbar.Content
                    title={<Text style={{ color: "black" }}> Settings </Text>}
                    style={{ alignItems: 'center' }}
                />
                <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="power" color="black" />
            </Appbar>

            <ScrollView style={{ width: "100%", backgroundColor: "white" }} >
                <View style={{
                    marginTop: RFPercentage(8),
                    backgroundColor: '#fff',
                    width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: "column", flex: 1,
                }} >
                    <View style={{ borderBottomColor: "grey", borderBottomWidth: termsConditions ? 0 : 0.2, padding: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ width: "90%" }} >
                            <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(2.6) }} >Terms & Condition</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            SetTermsConditions(!termsConditions)
                            setsupportCenter(false)
                            setPrivacyPolicy(false)
                        }} style={{ width: "10%" }} >
                            <MaterialCommunityIcons size={RFPercentage(3.2)} color="black" name={termsConditions ? "chevron-down" : "chevron-right"} />
                        </TouchableOpacity>
                    </View>

                    {termsConditions ?
                        <View style={{ flexDirection: "column", width: "89%", marginRight: "3%", marginTop: -RFPercentage(1) }} >
                            <Text style={{ fontWeight: "300", fontSize: RFPercentage(2.1) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        </View>
                        : null
                    }

                </View>

                <View style={{
                    marginTop: RFPercentage(1),
                    backgroundColor: '#fff',
                    width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: "column", flex: 1,
                }} >
                    <View style={{ borderBottomColor: "grey", borderBottomWidth: privacyPolicy ? 0 : 0.2, padding: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ width: "90%" }} >
                            <Text style={{ fontWeight: "300", fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(2.6) }} >Privacy Policy</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            SetTermsConditions(false)
                            setsupportCenter(false)
                            setPrivacyPolicy(!privacyPolicy)
                        }} style={{ width: "10%" }} >
                            <MaterialCommunityIcons size={RFPercentage(3.2)} color="black" name={privacyPolicy ? "chevron-down" : "chevron-right"} />
                        </TouchableOpacity>
                    </View>

                    {privacyPolicy ?
                        <View style={{ flexDirection: "column", width: "89%", marginRight: "3%", marginTop: -RFPercentage(1) }} >
                            <Text style={{ fontWeight: "300", fontSize: RFPercentage(2.1) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        </View>
                        : null
                    }

                </View>

                <View style={{
                    marginTop: RFPercentage(1),
                    backgroundColor: '#fff',
                    width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                    flexDirection: "column", flex: 1,
                }} >
                    <View style={{ borderBottomColor: "grey", borderBottomWidth: supportCenter ? 0 : 0.2, padding: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ width: "90%" }} >
                            <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(2.6) }} >Support Center</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            SetTermsConditions(false)
                            setsupportCenter(!supportCenter)
                            setPrivacyPolicy(false)
                        }} style={{ width: "10%" }} >
                            <MaterialCommunityIcons size={RFPercentage(3.2)} color="black" name={supportCenter ? "chevron-down" : "chevron-right"} />
                        </TouchableOpacity>
                    </View>

                    {supportCenter ?
                        <View style={{ flexDirection: "column", width: "89%", marginRight: "3%", marginTop: -RFPercentage(1) }} >
                            <Text style={{ fontSize: RFPercentage(2.1) }} >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Text>
                        </View>
                        : null
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

export default Settings;