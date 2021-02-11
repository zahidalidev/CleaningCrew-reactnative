import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';
import logo from "../../assets/Icons/Colored-06.png"

function Signup(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [marginTop, setMarginTop] = useState(0)

    const handleSubmit = () => {
        console.log('submited')
        console.log(email)
        console.log(password)
        props.navigation.navigate('HomeTabs')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />

            <View style={{ flex: 1, width: "100%", backgroundColor: "white", marginTop: Platform.OS === "ios" ? marginTop : 0 }} >

                <View style={{ flex: 1, backgroundColor: "white", marginTop: RFPercentage(2), width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} style={{ flex: 1, width: "90%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: RFPercentage(2) }} >
                        <MaterialCommunityIcons name="arrow-left" color="grey" size={RFPercentage(3)} />
                    </TouchableOpacity>
                    {/* <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                        <Image style={{ width: RFPercentage(25), height: RFPercentage(25) }} source={logo} />
                    </View> */}
                    {/* <Text style={{ fontSize: Platform.OS === "ios" ? RFPercentage(5) : RFPercentage(5.5), fontWeight: Platform.OS === "ios" ? "500" : 'bold', color: 'black' }} >Sign Up</Text> */}
                </View>

                <View style={{ flex: 4, marginTop: -RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5), backgroundColor: colors.primaryLight, width: "100%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >

                    <View style={{ marginTop: RFPercentage(6), width: "85%", alignItems: "center" }} >
                        <Text style={{ color: "black", fontSize: Platform.OS === "ios" ? RFPercentage(3) : RFPercentage(4.5), fontWeight: Platform.OS === "ios" ? "500" : 'bold' }} >Sign Up</Text>
                    </View>
                    {/* <View>
                        <AppTextInput
                            placeHolder="Firs Name"
                            width="100%"
                            icon="account"
                            fontWeight=Platform.OS === "ios" ? "500" : "bold"
                            value={firstName}
                            onChange={(text) => setFirstName(text)}
                        />
                    </View> */}
                    <View style={{ marginTop: RFPercentage(6), width: "85%" }} >
                        <AppTextInput
                            placeHolder="Full Name"
                            width="100%"
                            icon="account"
                            value={lastName}
                            onChange={(text) => setLastName(text)}
                        />
                    </View>
                    <View style={{ width: "85%", marginTop: RFPercentage(4) }} >
                        <AppTextInput
                            placeHolder="Mobile Number"
                            width="100%"
                            icon="phone"
                            value={number}
                            onChange={(text) => setNumber(text)}
                        />
                    </View>
                    <View style={{ width: "85%", marginTop: RFPercentage(4) }} >
                        <AppTextInput
                            placeHolder="Email"
                            width="100%"
                            icon="email"
                            value={email}
                            onChange={(text) => setEmail(text)}
                            startEdit={() => setMarginTop(-RFPercentage(10))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>

                    <View style={{ width: "85%", marginTop: RFPercentage(4) }} >
                        <AppTextInput
                            placeHolder="Password"
                            width="100%"
                            icon="lock"
                            value={password}
                            onChange={(text) => setPassword(text)}
                            secure={true}
                            startEdit={() => setMarginTop(-RFPercentage(15))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>
                    <View style={{ width: "85%", marginTop: RFPercentage(4) }} >
                        <AppTextInput
                            placeHolder="Confirm Password"
                            width="100%"
                            icon="lock"
                            value={confirmPassword}
                            onChange={(text) => setConfirmPassword(text)}
                            secure={true}
                            startEdit={() => setMarginTop(-RFPercentage(20))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>


                    <View style={{ marginTop: RFPercentage(5), width: "85%", flex: 1, alignItems: "flex-end" }} >
                        <AppTextButton
                            name="Sign Up"
                            // icon="arrow-right"
                            borderRadius={RFPercentage(1.2)}
                            onSubmit={() => handleSubmit()}
                            width={Platform.OS === "ios" ? "34%" : "30%"}
                            backgroundColor={colors.primary}
                            width="100%"
                        />
                    </View>
                </View>

                <View style={{ width: "100%", backgroundColor: colors.primaryLight }} >
                    <View style={{ marginBottom: RFPercentage(5), width: "85%", marginLeft: "7.5%", flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }} >
                        <Text style={{ color: "grey", fontWeight: "300" }} >Already have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signin')} ><Text style={{ color: colors.primary, fontWeight: Platform.OS === "ios" ? "500" : "bold" }} >Login</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
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

export default Signup;