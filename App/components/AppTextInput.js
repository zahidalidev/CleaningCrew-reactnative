import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from "../config/colors"

function AppTextInput({ placeHolder, value, onChange, width = "100%", icon, fontWeight, rightButtonText, secure = false, iconType = "MaterialCommunityIcons", editable = true, startEdit, endEdit }) {
    const [focus, setFocus] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <View style={focus ? {
            borderRadius: RFPercentage(1.2),
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 1,
            elevation: 5,
            width: width, alignItems: 'flex-start', justifyContent: 'center'
        } : {
                backgroundColor: '#fff', borderRadius: RFPercentage(1.2),
                width: width, alignItems: 'flex-start', justifyContent: 'center', borderBottomWidth: 0.8, borderBottomColor: "#bababa"
            }
        }>
            {/* {value.length !== 0 ? <View style={{ padding: RFPercentage(1), paddingLeft: RFPercentage(4), paddingBottom: 0, width: "80%", flexDirection: "row", alignItems: "flex-end" }} >
                <Text style={{ color: "grey", fontSize: RFPercentage(2), fontWeight: 'bold' }} >{placeHolder}</Text>
            </View> : null} */}

            <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }} >
                {iconType === "MaterialIcons" ?
                    <MaterialIcons color="grey" style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(2.2)} name={icon} />
                    :
                    <MaterialCommunityIcons color="grey" style={{ padding: RFPercentage(1), paddingRight: 0 }} size={RFPercentage(2.2)} name={icon} />
                }

                <TextInput style={{ color: icon === "email" ? "grey" : "black", fontWeight: Platform.OS === "ios" ? "500" : "bold", padding: RFPercentage(1), width: rightButtonText ? "70%" : "90%", fontSize: RFPercentage(2.2) }}
                    placeholder={placeHolder}
                    onFocus={() => setFocus(true)}
                    onEndEditing={() => setFocus(false)}
                    value={value}
                    secureTextEntry={secure}
                    editable={editable}
                    onChangeText={(text) => onChange(text)}
                    onResponderStart={startEdit}
                    onSubmitEditing={endEdit}
                />
                {rightButtonText ?
                    <TouchableOpacity style={{ width: "20%" }}>
                        <Text style={{ fontWeight: Platform.OS === "ios" ? "500" : "bold", color: colors.primary, fontSize: RFPercentage(2) }} >{rightButtonText}</Text>
                    </TouchableOpacity>
                    : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AppTextInput;