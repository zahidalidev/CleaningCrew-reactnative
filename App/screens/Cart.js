import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Appbar } from "react-native-paper";

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';
import CartCard from "../components/CartCard"

function Cart(props) {

    const [cardData, setCardData] = useState([
        {
            id: 1,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 2,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 3,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 4,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
    ])

    const [render, setRender] = useState(false)

    const handleSubmit = () => {
        console.log('submited')
        props.navigation.navigate('CheckOut')
    }

    const handleIncrement = (id) => {
        let data = cardData;
        data.map((item) => {
            if (item.id === id) {
                item.value = item.value + 1
            }
        })
        setCardData(data)
        setRender(!render)
    }

    const handleDecrement = (id) => {
        let data = cardData;
        data.map((item) => {
            if (item.id === id && item.value > 0) {
                item.value = item.value - 1
            }
        })
        setCardData(data)
        setRender(!render)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.primary} />
            {/* Appbar */}
            <Appbar style={{ position: "absolute", left: 0, right: 0, top: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.navigate('OrderDetail')} icon="arrow-left" color="white" />
                <Appbar.Content />
                <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="home" color="white" />
            </Appbar>

            <ScrollView style={{ marginTop: RFPercentage(9), width: "100%", backgroundColor: "white", marginBottom: RFPercentage(2) }} >
                <View style={{ marginTop: RFPercentage(2), marginLeft: "4%", width: "92%", flex: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }} >
                    {cardData.map((item) => (
                        <CartCard id={item.id} title={item.title} price={item.price} value={item.value} incrementValue={handleIncrement} decrementValue={handleDecrement} />
                    ))}
                </View>
            </ScrollView>

            <View style={{
                marginBottom: RFPercentage(1.5),
                // marginLeft: RFPercentage(1),
                backgroundColor: '#fff',
                shadowColor: '#b5b5b5',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 3,
                width: "92%", alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: "column", padding: RFPercentage(2)
            }} >
                <View style={{ padding: RFPercentage(1), borderBottomColor: '#d8d8d8', borderBottomWidth: 0.2, flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "40%" }} >
                        <Text style={{ fontWeight: "300", fontSize: Platform.OS === "ios" ? RFPercentage(2.7) : RFPercentage(3) }} >Subtotal</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "60%", alignItems: "center", justifyContent: "flex-end" }} >
                        <Text style={{ fontWeight: "300", fontSize: RFPercentage(2.7), color: "grey" }} >$190.00</Text>
                    </View>
                </View>
                <View style={{ padding: RFPercentage(1), borderBottomColor: '#d8d8d8', borderBottomWidth: 0.2, flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "40%" }} >
                        <Text style={{ fontWeight: "300", fontSize: Platform.OS === "ios" ? RFPercentage(2.7) : RFPercentage(3) }} >Discount</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "60%", alignItems: "center", justifyContent: "flex-end" }} >
                        <Text style={{ fontSize: RFPercentage(2.7), color: "grey", fontWeight: "300" }} >$10.00</Text>
                    </View>
                </View>
                <View style={{ padding: RFPercentage(1), flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "40%" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(3) }} >Total</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "60%", alignItems: "center", justifyContent: "flex-end" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(2.7), color: "grey" }} >$180.00</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(1), marginBottom: RFPercentage(2) }} >
                <AppTextButton
                    name="CHECKOUT"
                    icon="arrow-right"
                    onSubmit={() => handleSubmit()}
                    width={Platform.OS === 'ios' ? "47%" : "42%"}
                />
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

export default Cart;