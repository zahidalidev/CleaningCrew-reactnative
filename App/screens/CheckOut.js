import React, { useState, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Appbar } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';

import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import AppTextButton from '../components/AppTextButton';
import CartCard from "../components/CartCard"


function CheckOut(props) {

    const [cardData, setCardData] = useState([
        {
            id: 1,
            title: "This is title 1 ",
            price: "$129.00",
            value: 0
        },
        {
            id: 2,
            title: "This is title 2",
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
            id: 5,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 6,
            title: "This is title",
            price: "$129.00",
            value: 0
        },
        {
            id: 7,
            title: "This is title",
            price: "$129.00",
            value: 0
        },



    ])

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Select Date');
    const [selectedTime, setSelectedTime] = useState('Select Time');

    const [render, setRender] = useState(false)

    const handleSubmit = () => {
        console.log('submited')
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let d = new Date(currentDate)
        setSelectedDate(`${d.getDate()}: ${d.getMonth() + 1}: ${d.getFullYear()}`)
    };

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let d = new Date(currentDate)
        setSelectedTime(`${d.getHours()}: ${d.getMinutes()}`)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.primary} />
            {/* Appbar */}
            <Appbar style={{ position: "absolute", left: 0, right: 0, top: 0, backgroundColor: colors.primary }} >
                <Appbar.Action onPress={() => props.navigation.navigate('Cart')} icon="arrow-left" color="white" />
                <Appbar.Content />
                <Appbar.Action onPress={() => props.navigation.navigate('HomeTabs')} icon="home" color="white" />
            </Appbar>

            <View style={{
                marginBottom: RFPercentage(1.5),
                // marginLeft: RFPercentage(1),
                backgroundColor: '#fff',
                shadowColor: '#b5b5b5',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
                elevation: 3,
                width: "92%", alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: "column", padding: RFPercentage(2), flex: 1, marginTop: RFPercentage(10),
                maxHeight: show ? Platform.OS === "ios" ? "100%" : "75%" : "75%"
            }} >
                <View style={{ padding: RFPercentage(1), flexDirection: "column", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "100%" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(3) }} >Room</Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(2), flexDirection: "row", width: "100%" }} >
                        <View style={{ flexDirection: "column", width: "50%", alignItems: "flex-start", justifyContent: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.7), color: "black" }} >Date</Text>
                            <TouchableOpacity onPress={showDatepicker} style={{ marginTop: RFPercentage(1) }} >
                                <Text style={{ fontSize: RFPercentage(2.7), color: "grey" }} >{selectedDate}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', width: "50%", alignItems: "flex-end", justifyContent: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.7), color: "black" }} >Time</Text>
                            <TouchableOpacity onPress={showTimepicker} style={{ marginTop: RFPercentage(1) }} >
                                <Text style={{ fontSize: RFPercentage(2.7), color: "grey" }} >{selectedTime}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {show && (
                        <View style={{ width: "100%", marginBottom: -RFPercentage(2) }} >
                            <DateTimePicker
                                style={{ width: 320, backgroundColor: "white" }}
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={mode === 'date' ? onChangeDate : onChangeTime}
                            />
                            {Platform.OS === "ios" ?
                                <TouchableOpacity onPress={() => setShow(false)} style={{ marginTop: RFPercentage(2), width: "100%", alignItems: "flex-end" }} >
                                    <Text style={{ color: colors.primary }} >Done</Text>
                                </TouchableOpacity>
                                : null
                            }
                        </View>
                    )}
                </View>

                <View style={{ marginTop: RFPercentage(1), padding: RFPercentage(1), flexDirection: "column", width: "100%" }} >
                    <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(3) }} >Services</Text>
                </View>
                <ScrollView style={{ width: "100%", backgroundColor: "white", marginBottom: RFPercentage(2) }} >
                    <View style={styles.containerTable}>
                        <Table borderStyle={{ borderWidth: 2, borderColor: '#efefef' }}>
                            <Row data={['Type', 'Quantity', 'Total']} style={styles.head} textStyle={{ textAlign: 'center', fontSize: RFPercentage(2.6), margin: RFPercentage(Platform.OS === "ios" ? 0 : 1.5), marginLeft: RFPercentage(1.5), fontWeight: Platform.OS === "ios" ? "500" : 'bold' }} />
                            {cardData.map((item, i) => (
                                <TableWrapper style={{ flexDirection: 'row' }} >
                                    <Col data={[item.title]} heightArr={[RFPercentage(Platform.OS === "ios" ? 7 : 5), RFPercentage(Platform.OS === "ios" ? 7 : 5)]} textStyle={{ fontWeight: "300", textAlign: 'left', fontSize: RFPercentage(Platform.OS === "ios" ? 2 : 2.2), margin: RFPercentage(Platform.OS === "ios" ? 0 : 1.2), marginLeft: RFPercentage(1.2) }} />
                                    <Col data={[item.value]} heightArr={[RFPercentage(Platform.OS === "ios" ? 7 : 5), RFPercentage(Platform.OS === "ios" ? 7 : 5)]} textStyle={{ fontWeight: "300", textAlign: 'right', fontSize: RFPercentage(Platform.OS === "ios" ? 2 : 2.2), margin: RFPercentage(Platform.OS === "ios" ? 0 : 1.2), marginRight: RFPercentage(1.2) }} />
                                    <Col data={[`${item.value} x ${item.price}`]} heightArr={[RFPercentage(Platform.OS === "ios" ? 7 : 5), RFPercentage(Platform.OS === "ios" ? 7 : 5)]} textStyle={{ fontWeight: "300", textAlign: 'right', fontSize: RFPercentage(Platform.OS === "ios" ? 2 : 2.2), margin: RFPercentage(Platform.OS === "ios" ? 0 : 1.2), marginRight: RFPercentage(1.2) }} />
                                    {/* <Row key={i} data={[item.value, `${item.value} x ${item.price}`]} textStyle={{ textAlign: 'right', fontSize: RFPercentage(2.4), margin: RFPercentage(1.2) }} /> */}
                                </TableWrapper>
                            ))}
                        </Table>
                    </View>
                </ScrollView>

                <View style={{ padding: RFPercentage(1), flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "50%" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(Platform.OS === "ios" ? 2.5 : 2.8) }} >Discount</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "50%", alignItems: "center", justifyContent: "flex-end" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(Platform.OS === "ios" ? 2.4 : 2.7), color: "grey" }} >20%</Text>
                    </View>
                </View>

                <View style={{ padding: RFPercentage(1), flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "column", width: "50%" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(Platform.OS === "ios" ? 2.7 : 3) }} >Grand Total</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: "50%", alignItems: "center", justifyContent: "flex-end" }} >
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", fontSize: RFPercentage(Platform.OS === "ios" ? 2.4 : 2.7), color: "grey" }} >$180.00</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(1), marginBottom: RFPercentage(2) }} >
                <AppTextButton
                    name="Varify and Payment"
                    icon="arrow-right"
                    onSubmit={() => handleSubmit()}
                    width={Platform.OS === "ios" ? "65%" : "53%"}
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
    containerTable: { flex: 1, paddingTop: RFPercentage(3), backgroundColor: '#fff' },
    head: { height: 40 },
})

export default CheckOut;