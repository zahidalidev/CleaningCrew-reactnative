import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from '../config/colors';

function CartCard({ id, title, price, value, incrementValue, decrementValue }) {
    return (
        <View key={id} style={styles.container}>
            {/* Product Card */}
            <View style={{
                marginBottom: RFPercentage(1.5),
                // marginLeft: RFPercentage(1),
                backgroundColor: '#fff',
                shadowColor: '#b5b5b5',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                width: "100%", alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: "column", padding: RFPercentage(2)
            }} >
                <View style={{ flexDirection: "column", width: "100%" }} >
                    <Text style={{ fontSize: Platform.OS === "ios" ? RFPercentage(2.6) : RFPercentage(3), color: "black" }} >{title}</Text>
                </View>

                <View style={{ flexDirection: "row", width: "100%" }} >
                    <View style={{ flexDirection: "row", width: Platform.OS === "ios" ? "70%" : "75%" }} >
                        <Text style={{ fontWeight: "300", fontSize: Platform.OS === "ios" ? RFPercentage(2.4) : RFPercentage(2.7), color: "grey" }} >{price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: Platform.OS === "ios" ? "30%" : "25%" }} >
                        <TouchableOpacity onPress={() => incrementValue(id)} style={{ backgroundColor: "#cccccc", padding: Platform.OS === "ios" ? RFPercentage(0.7) : RFPercentage(0.2) }} >
                            <MaterialCommunityIcons color="white" name="plus" size={RFPercentage(2.8)} />
                        </TouchableOpacity>

                        <View style={{ padding: RFPercentage(0.4), paddingLeft: RFPercentage(1), paddingRight: RFPercentage(1) }} >
                            <Text style={{ fontWeight: "300", fontSize: Platform.OS === "ios" ? RFPercentage(2.1) : RFPercentage(2.5) }} >{value}</Text>
                        </View>

                        <TouchableOpacity onPress={() => decrementValue(id)} style={{ backgroundColor: "#cccccc", padding: Platform.OS === "ios" ? RFPercentage(0.7) : RFPercentage(0.2) }} >
                            <MaterialCommunityIcons color="white" name="minus" size={RFPercentage(2.8)} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%", backgroundColor: "white"
    }
})

export default CartCard;