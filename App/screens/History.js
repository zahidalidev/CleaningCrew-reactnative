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
import HistoryCard from '../components/HistoryCard';

function History(props) {


    const [active, SetActive] = useState(true)
    const [completed, setCompleted] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [render, setRender] = useState(false)

    const [activeOrders, setActiveOrders] = useState([
        {
            id: 1,
            service: "Home",
            price: "BD 20.00",
            date: "23-Sep-2020",
            status: "Processing"
        },
        {
            id: 2,
            service: "Home",
            price: "BD 25.00",
            date: "03-Jan-2020",
            status: "Processing"
        },
        {
            id: 3,
            service: "Home",
            price: "BD 30.00",
            date: "15-Dec-2020",
            status: "Processing"
        }
    ])
    const [completedOrders, setCompletedOrders] = useState([
        {
            id: 1,
            service: "Home",
            price: "BD 20.00",
            date: "23-Sep-2020",
            status: "Completed"
        },
        {
            id: 2,
            service: "Home",
            price: "BD 25.00",
            date: "03-Jan-2020",
            status: "Completed"
        },
        {
            id: 3,
            service: "Home",
            price: "BD 30.00",
            date: "15-Dec-2020",
            status: "Completed"
        }
    ])
    const [cancelOrders, setCancelOrders] = useState([
        {
            id: 1,
            service: "Home",
            price: "BD 20.00",
            date: "23-Sep-2020",
            status: "Cancelled"
        },
        {
            id: 2,
            service: "Home",
            price: "BD 25.00",
            date: "03-Jan-2020",
            status: "Cancelled"
        },
        {
            id: 3,
            service: "Home",
            price: "BD 30.00",
            date: "15-Dec-2020",
            status: "Cancelled"
        }
    ])

    const handleSubmit = () => {
        console.log('submited')
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor="#fafcfb" />

            {/* Appbar */}
            <Appbar style={{ shadowOpacity: 0.07, flexDirection: "column", height: RFPercentage(11), position: "absolute", left: 0, right: 0, top: 0, backgroundColor: "#fafcfb" }} >

                <View style={{ flexDirection: 'row', width: "100%", flex: 1 }} >
                    <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="arrow-left" color="black" />
                    <Appbar.Content
                        title={<Text style={{ color: "black" }}> Manage Orders </Text>}
                        style={{ alignItems: 'center', justifyContent: "center" }}
                    />
                    <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="home" color="black" />
                </View>

                <View style={{ flexDirection: 'row', width: "100%", flex: 1 }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        SetActive(true)
                        setCancel(false)
                        setCompleted(false)
                    }} style={{ width: "33%", borderBottomColor: "#92e6c1", borderBottomWidth: active ? 4 : 0 }} >
                        <Appbar.Content
                            title={<Text style={{ fontWeight: "300", fontSize: RFPercentage(Platform.OS === "ios" ? 2.2 : 2.4), color: active ? "#92e6c1" : "grey" }}> Active </Text>}
                            style={{ alignItems: 'center', justifyContent: "center" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        setCompleted(true)
                        setCancel(false)
                        SetActive(false)
                    }} style={{ width: "33%", borderBottomColor: "#92e6c1", borderBottomWidth: completed ? 4 : 0 }} >
                        <Appbar.Content
                            title={<Text style={{ fontWeight: "300", fontSize: RFPercentage(Platform.OS === "ios" ? 2.2 : 2.4), color: completed ? "#92e6c1" : "grey" }}> Completed </Text>}
                            style={{ alignItems: 'center', justifyContent: "center" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => {
                        setCancel(true)
                        setCompleted(false)
                        SetActive(false)
                    }} style={{ width: "33%", borderBottomColor: "#92e6c1", borderBottomWidth: cancel ? 4 : 0 }} >
                        <Appbar.Content
                            title={<Text style={{ fontWeight: "300", fontSize: RFPercentage(Platform.OS === "ios" ? 2.2 : 2.4), color: cancel ? "#92e6c1" : "grey" }}> Cancelled </Text>}
                            style={{ alignItems: 'center', justifyContent: "center" }}
                        />
                    </TouchableOpacity>

                </View>
            </Appbar>

            <ScrollView style={{ width: "100%", backgroundColor: "white", marginTop: RFPercentage(12) }} >
                {active ?
                    activeOrders.map((item, i) => (
                        <HistoryCard service={item.service} price={item.price} date={item.date} status={item.status} />
                    ))
                    : null
                }
                {completed ?
                    completedOrders.map((item, i) => (
                        <HistoryCard service={item.service} price={item.price} date={item.date} status={item.status} />
                    ))
                    : null
                }
                {cancel ?
                    cancelOrders.map((item, i) => (
                        <HistoryCard service={item.service} price={item.price} date={item.date} status={item.status} />
                    ))
                    : null
                }
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

export default History;