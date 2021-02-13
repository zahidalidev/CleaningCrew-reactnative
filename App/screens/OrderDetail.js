import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Appbar } from "react-native-paper";

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';
import MainPicker from '../components/MainPicker';

function OrderDetail(props) {

    const [fullName, setFullName] = useState('')
    const [number, setNumber] = useState('')
    const [house, setHouse] = useState('')
    const [building, setBuilding] = useState('')
    const [road, setRoad] = useState('')
    const [block, setBlock] = useState('')
    const [area, setArea] = useState('')
    const [note, setNote] = useState('')
    const [marginTop, setMarginTop] = useState(0)

    const handleSubmit = () => {
        console.log('submited')

        props.navigation.navigate('Cart')
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.primary} />
            <ScrollView style={{ width: "100%", backgroundColor: "white", marginTop: Platform.OS === "ios" ? marginTop : 0 }} >

                {/* Appbar */}
                <Appbar style={{ position: "absolute", left: 0, right: 0, top: 0, backgroundColor: colors.primary }} >
                    <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="arrow-left" color="white" />
                    <Appbar.Content />
                    <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="home" color="white" />
                </Appbar>

                {/* <TouchableOpacity onPress={() => props.navigation.navigate('HomeTabs')} style={{ marginLeft: "7.5%", width: "85%", flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', marginTop: RFPercentage(2) }} >
                    <MaterialCommunityIcons name="arrow-left" color="grey" size={RFPercentage(3)} />
                </TouchableOpacity> */}

                <View style={{ marginTop: RFPercentage(11), marginLeft: "7.5%", width: "85%", flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end' }} >
                    <Text style={{ fontSize: Platform.OS === "ios" ? RFPercentage(4.5) : RFPercentage(5), fontWeight: Platform.OS === "ios" ? "500" : 'bold', color: 'black' }} >Add Details</Text>
                </View>

                <View style={{ marginTop: RFPercentage(1), marginLeft: "7.5%", width: "85%", flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }} >
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Full Name"
                            width="100%"
                            icon="account"
                            fontWeight="bold"
                            value={fullName}
                            onChange={(text) => setFullName(text)}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Mobile Number"
                            width="100%"
                            icon="phone"
                            fontWeight="bold"
                            value={number}
                            onChange={(text) => setNumber(text)}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="House"
                            width="100%"
                            iconType="MaterialIcons"
                            // icon="location-on"
                            fontWeight="bold"
                            value={house}
                            onChange={(text) => setHouse(text)}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Building"
                            width="100%"
                            iconType="MaterialIcons"
                            // icon="location-on"
                            fontWeight="bold"
                            value={building}
                            onChange={(text) => setBuilding(text)}
                            startEdit={() => setMarginTop(-RFPercentage(1))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Road"
                            width="100%"
                            iconType="MaterialIcons"
                            // icon="location-on"
                            fontWeight="bold"
                            value={road}
                            onChange={(text) => setRoad(text)}
                            startEdit={() => setMarginTop(-RFPercentage(10))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Block"
                            width="100%"
                            iconType="MaterialIcons"
                            // icon="location-on"
                            fontWeight="bold"
                            value={block}
                            onChange={(text) => setBlock(text)}
                            startEdit={() => setMarginTop(-RFPercentage(20))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(3.5), width: "100%" }} >
                        <MainPicker
                            items={[{ label: 'select city' }, { label: 'option2' }, { label: 'option3' }]}
                            selectedValue={area}
                            setSelectedValue={(item) => setArea(item)}
                        />
                    </View>

                    <View style={{ marginTop: RFPercentage(3.5) }} >
                        <AppTextInput
                            placeHolder="Note"
                            width="100%"
                            iconType="MaterialIcons"
                            // icon="location-on"
                            fontWeight="bold"
                            value={note}
                            onChange={(text) => setNote(text)}
                            startEdit={() => setMarginTop(-RFPercentage(42))}
                            endEdit={() => setMarginTop(0)}
                        />
                    </View>

                    <View style={{ marginBottom: RFPercentage(6), marginTop: RFPercentage(7), width: "97%", flex: 1, alignItems: "flex-end" }} >
                        <AppTextButton
                            name="Next"
                            width={Platform.OS === "ios" ? "40%" : '35%'}
                            icon="arrow-right"
                            onSubmit={() => handleSubmit()}
                        />
                    </View>
                </View>

            </ScrollView>
        </View >
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

export default OrderDetail;