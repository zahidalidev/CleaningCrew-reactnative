import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from '../config/colors';

function AppTextButton({ name, icon, onSubmit, width, activeOpacity = 0.8, borderRadius = 25, backgroundColor = "black", iconSize = 20, iconLeft }) {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={() => onSubmit()} style={{ width: width, paddingLeft: RFPercentage(1.5), paddingRight: RFPercentage(1.5), flexDirection: 'row', backgroundColor: backgroundColor, borderRadius: borderRadius, alignItems: "center", justifyContent: "center" }} >

            {iconLeft ?
                <MaterialCommunityIcons style={{ padding: RFPercentage(1.6), paddingRight: name ? 0 : RFPercentage(1.6) }} color="white" size={iconSize} name={iconLeft} />
                : null
            }
            {name ?
                <Text numberOfLines={1} style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", color: "white", padding: RFPercentage(1.6), paddingRight: RFPercentage(1.2), fontSize: RFPercentage(2.2) }} >{name}</Text>
                : null
            }
            {icon ?
                <MaterialCommunityIcons style={{ padding: RFPercentage(1.6), paddingLeft: name ? 0 : RFPercentage(1.6) }} color="white" size={iconSize} name={icon} />
                : null
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextButton;