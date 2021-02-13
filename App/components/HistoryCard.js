import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

function HistoryCard({ service, price, date, status }) {
    return (
        <View style={{
            marginTop: RFPercentage(2),
            marginBottom: RFPercentage(1.5),
            marginLeft: "4%",
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            borderRadius: 10,
            marginRight: RFPercentage(2),
            width: "92%"
        }} >
            <View style={{ width: "100%", flexDirection: 'row', padding: RFPercentage(2), paddingBottom: RFPercentage(0.5) }} >
                <View style={{ flexDirection: "row", width: "70%", maxWidth: "70%", alignItems: "center", justifyContent: "flex-start" }} >
                    <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.5), fontWeight: Platform.OS === "ios" ? "500" : "bold" }} >{service}</Text>
                </View>
                <View style={{ flexDirection: "row", width: "30%", maxWidth: "30%", alignItems: "center", justifyContent: "flex-end" }} >
                    <Text style={{ fontSize: RFPercentage(2.2), color: "grey", fontWeight: "300" }} >{price}</Text>
                </View>
            </View>

            <View style={{ width: "100%", flexDirection: 'row', padding: RFPercentage(1), paddingBottom: 2, paddingLeft: RFPercentage(2.7), alignItems: "center", justifyContent: "flex-start" }} >
                <MaterialIcons style={{ marginRight: RFPercentage(1) }} color="#cfd0d1" size={RFPercentage(2.2)} name="account-circle" />
                <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.6), color: 'grey', fontWeight: "300" }} >Zahid Ali</Text>
            </View>
            <View style={{ width: "100%", flexDirection: 'row', paddingBottom: RFPercentage(2), paddingLeft: RFPercentage(2.7), alignItems: "flex-start" }} >
                <MaterialIcons style={{ marginRight: RFPercentage(1) }} color="#cfd0d1" size={RFPercentage(2.2)} name="phone" />
                <Text numberOfLines={1} style={{ fontSize: RFPercentage(1.6), color: 'grey', fontWeight: "300" }} >+92 3367088018</Text>
            </View>

            <View style={{ borderColor: "#eaeaea", borderTopWidth: 0.7, width: "100%", flexDirection: 'row', padding: RFPercentage(2) }} >
                <View style={{ flexDirection: "row", width: "60%", maxWidth: "60%", alignItems: "center", justifyContent: "flex-start" }} >
                    <Text numberOfLines={1} style={{ fontSize: RFPercentage(2.1), fontWeight: Platform.OS === "ios" ? "500" : "bold" }} >{date}</Text>
                </View>
                <View style={{ flexDirection: "row", width: "40%", maxWidth: "40%", alignItems: "center", justifyContent: "flex-end" }} >
                    <View style={{ backgroundColor: status === "Canceled" ? "#edd5d5" : "#e0f9f0", padding: RFPercentage(0.5), paddingLeft: RFPercentage(1.9), paddingRight: RFPercentage(1.9), borderRadius: RFPercentage(2) }} >
                        <Text numberOfLines={1} style={{ fontSize: RFPercentage(2), color: status === "Canceled" ? "#ce3333" : "#649d86", fontWeight: Platform.OS === "ios" ? "500" : 'bold' }} >{status}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HistoryCard;