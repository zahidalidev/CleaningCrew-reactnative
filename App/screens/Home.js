import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking, Platform, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Appbar } from "react-native-paper";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

import AppTextButton from '../components/AppTextButton';

import logo from "../../assets/Icons/Colored-01.png"
import HomeSlider from "../../assets/HomeSlider.jpg"
import colors from '../config/colors';
import { color } from 'react-native-reanimated';

function Home(props) {

    const [category, setCategory] = useState([
        {
            id: 1,
            name: "Home",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },
        {
            id: 2,
            name: "Apartment",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },
        {
            id: 3,
            name: "This is Home",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },
        {
            id: 3,
            name: "This is Home",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },
        {
            id: 3,
            name: "This is Home",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },
        {
            id: 3,
            name: "This is Home",
            picture: "https://www.meganscookin.com/wp-content/uploads/2020/09/EYrud-a6KJ-Ayt63GXIVxF.jpg"
        },

    ])
    const dialCall = () => {
        let phoneNumber = Platform.OS === 'android' ? phoneNumber = 'tel:1234567890' : 'telprompt:1234567890';
        Linking.openURL(phoneNumber);
    };


    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.primary} />

            {/* Appbar */}
            {/* <Appbar style={{ position: "absolute", left: 0, right: 0, top: 0, backgroundColor: colors.primary }} >
                <Appbar.Content title="Cleaning Crew" color="white" titleStyle={{ fontWeight: '600', fontSize: RFPercentage(3.5) }} />
            </Appbar> */}

            <View style={{ borderRadius: RFPercentage(5), borderBottomRightRadius: RFPercentage(5), maxHeight: "33%", backgroundColor: "white", flex: 1, width: "100%", flexDirection: "row", justifyContent: "center", alignItems: 'center' }} >
                {/* <Image style={{ width: RFPercentage(18), height: RFPercentage(18) }} source={logo} /> */}
                <ImageBackground borderBottomRightRadius={RFPercentage(5)} borderBottomLeftRadius={RFPercentage(5)} source={HomeSlider} style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }} >
                    <View style={{ borderBottomRightRadius: RFPercentage(5), borderBottomLeftRadius: RFPercentage(5), flexDirection: "column", justifyContent: "center", alignItems: "flex-start", top: 0, right: 0, left: 0, bottom: 0, backgroundColor: colors.primary, position: "absolute" }} >

                        <View style={{ width: "90%", marginLeft: "5%", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0, 2, 5, 0)", position: "absolute" }} >
                            <View style={{ width: "50%", alignItems: "flex-start" }} >
                                <MaterialIcons
                                    style={{ padding: 4, borderRadius: RFPercentage(5), marginTop: 13, backgroundColor: colors.greenLight }}
                                    name="menu-open"
                                    color="white"
                                    size={RFPercentage(4)}
                                    onPress={() => props.navigation.openDrawer()}
                                />
                            </View>
                            <View style={{ width: "50%", alignItems: "flex-end" }} >
                                <MaterialCommunityIcons
                                    style={{ padding: 4, borderRadius: RFPercentage(5), marginTop: 13, backgroundColor: colors.greenLight }}
                                    name="account-circle"
                                    color="white"
                                    size={RFPercentage(4)}
                                    onPress={() => props.navigation.navigate("Profile")}
                                />
                            </View>
                            {/* <AppTextButton
                            // name=""
                            backgroundColor="green"
                            borderRadius={25}
                            icon="phone"
                            iconSize={25}
                            onSubmit={() => dialCall()}
                            width="12%"
                            activeOpacity={0.9}
                        /> */}
                        </View>
                        <View style={{ flexDirection: 'column', width: "90%", marginLeft: "5%", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "rgba(0, 2, 5, 0)", position: "absolute" }} >
                            <Text style={{ fontWeight: "bold", color: "white", fontSize: RFPercentage(6) }} >Welcome,</Text>
                            <Text style={{ fontWeight: "bold", color: "white", fontSize: RFPercentage(5.7) }} >Zahid</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* <View style={{ borderTopRightRadius: RFPercentage(5), borderTopLeftRadius: RFPercentage(5), backgroundColor: "white", paddingBottom: RFPercentage(4), width: "100%", flexDirection: "row", justifyContent: "center", alignItems: 'center' }} >
                <View style={{ marginTop: -RFPercentage(2.5), width: "100%", flexDirection: "row", justifyContent: "center", alignItems: 'center' }} >
                    <AppTextButton
                        name="Call us for urgent service"
                        iconLeft="phone"
                        backgroundColor={colors.primary}
                        onSubmit={() => dialCall()}
                        width={Platform.OS === "ios" ? "75%" : "59%"}
                        activeOpacity={0.9}
                    />

                </View>
            </View> */}


            <View style={{ width: "96%", marginLeft: RFPercentage(3), marginTop: RFPercentage(3), justifyContent: "center", alignItems: "flex-start" }} >
                <Text style={{ fontSize: RFPercentage(3.7), fontWeight: Platform.OS === "ios" ? "500" : "bold" }} >Choose Service</Text>
            </View>

            <View style={{ flex: 1, width: "96%", backgroundColor: "white", paddingLeft: "2%" }} >

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: RFPercentage(3), flex: 1, width: "95%", backgroundColor: "white" }} >
                    {category.map((item, i) => (
                        <TouchableOpacity onPress={() => props.navigation.navigate('OrderDetail')} key={item.id} activeOpacity={0.9} style={{
                            marginBottom: RFPercentage(1.5),
                            marginLeft: RFPercentage(1),
                            marginRight: RFPercentage(2),
                            marginTop: RFPercentage(1),
                            backgroundColor: 'white',
                            shadowColor: '#b5b5b5',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            elevation: 7,
                            borderRadius: RFPercentage(4),
                            width: RFPercentage(17.5), height: RFPercentage(25),
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }} >
                            {/* <View style={{ top: 0, left: 0, bottom: 0, right: 0, position: "absolute", flexDirection: "column", alignItems: "center", justifyContent: "center" }} > */}
                            {/* <ImageBackground borderRadius={10} style={{ width: "80%", height: "75%" }} source={{ uri: item.picture }} > */}
                            {/* </ImageBackground> */}
                            <Image borderRadius={10} style={{ marginTop: RFPercentage(1), marginBottom: RFPercentage(2), width: "70%", height: "53%" }} source={{ uri: item.picture }} />
                            <View style={{ width: "67%" }}>
                                <Text style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS === "ios" ? "500" : "bold", color: "black" }} >{item.name}</Text>
                            </View>
                            {/* </View> */}
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={{ marginBottom: RFPercentage(5), width: "100%" }} >
                <View style={{ width: "96%", marginLeft: RFPercentage(3), justifyContent: "center", alignItems: "flex-start" }} >
                    <Text style={{ fontSize: RFPercentage(3.7), fontWeight: Platform.OS === "ios" ? "500" : "bold" }} >Amazing Offers</Text>
                </View>
                <View style={{ width: "96%", marginLeft: RFPercentage(3), marginTop: RFPercentage(4), justifyContent: "center", alignItems: "flex-start" }} >
                    <Image borderRadius={RFPercentage(4)} style={{ width: "90%", height: RFPercentage(16) }} source={HomeSlider} />
                </View>
            </View>


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

export default Home;