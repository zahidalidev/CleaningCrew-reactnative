import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';
import logo from "../../assets/Icons/Colored-06.png"

function Signin(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('submited')
        console.log(email)
        console.log(password)
        props.navigation.navigate('HomeTabs')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="white" />

            <View style={{ paddingBottom: RFPercentage(4), backgroundColor: "white", marginTop: RFPercentage(2), width: "100%", flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                {/* <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }} >
                    <Image style={{ width: RFPercentage(25), height: RFPercentage(25) }} source={logo} />
                </View> */}
                {/* <Text style={{ color: colors.primary, fontSize: Platform.OS === "ios" ? RFPercentage(4) : RFPercentage(5.5), fontWeight: Platform.OS === "ios" ? "500" : 'bold' }} >Login</Text> */}
                {/* <Text style={{ marginTop: RFPercentage(0.5), fontSize: Platform.OS === "ios" ? RFPercentage(2) : RFPercentage(2.2), color: "grey", fontWeight: "bold" }} >Please sign in to continue.</Text> */}
            </View>

            <View style={{ marginTop: -RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5), backgroundColor: colors.primaryLight, width: "100%", flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >

                <View style={{ marginTop: RFPercentage(7), width: "85%", alignItems: "center" }} >
                    <Text style={{ color: "black", fontSize: Platform.OS === "ios" ? RFPercentage(3) : RFPercentage(4.5), fontWeight: Platform.OS === "ios" ? "500" : 'bold' }} >Login</Text>
                </View>

                <View style={{ marginTop: RFPercentage(7), width: "85%" }} >
                    <AppTextInput
                        placeHolder="Email"
                        width="100%"
                        icon="email-outline"
                        fontWeight="bold"
                        value={email}
                        onChange={(text) => setEmail(text)}
                    />
                </View>
                <View style={{ width: "85%", marginTop: RFPercentage(4) }} >
                    <AppTextInput
                        placeHolder="Password"
                        width="100%"
                        icon="lock"
                        fontWeight="bold"
                        value={password}
                        onChange={(text) => setPassword(text)}
                        rightButtonText="FORGOT"
                        secure={true}
                    />
                </View>


                <View style={{ marginTop: RFPercentage(5), width: "85%", flex: 1, alignItems: "flex-end" }} >
                    <AppTextButton
                        name="LOGIN"
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
                <View style={{ marginBottom: RFPercentage(5), marginLeft: "7.5%", width: "85%", flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }} >
                    <Text style={{ color: "grey", fontSize: RFPercentage(1.7) }} >Dont't have an account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} ><Text style={{ color: colors.primary, fontWeight: "bold", fontSize: RFPercentage(1.7) }} >Sign Up</Text></TouchableOpacity>
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

export default Signin;