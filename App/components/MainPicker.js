import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from "@react-native-community/picker"
import { RFPercentage } from "react-native-responsive-fontsize"
import colors from "../config/colors"
import AppPicker from './AppPicker';

function MainPicker({ selectedValue, setSelectedValue, items }) {

    if (Platform.OS === 'ios') {
        return (
            <AppPicker
                items={items}
                numberOfColumns={1}
                onSelectItem={(item) => setSelectedValue(item)}
                placeholder='option'
                selectedItem={selectedValue}
            />
        )
    } else {
        return (
            // <LinearGradient colors={['transparent', '#e8e8e8']} style={{
            //     // flex: 1,
            //     marginTop: RFPercentage(1.5),
            //     width: "100%",
            //     alignItems: "center",
            // }}>
            <View style={{ width: "92%", borderBottomWidth: 0.8, borderBottomColor: "#bababa" }} >
                <Picker
                    selectedValue={selectedValue}
                    mode="dropdown"
                    style={{
                        transform: [
                            { scaleX: 1.2 },
                            { scaleY: 1.2 },
                        ],
                        width: "88%", marginLeft: "8%", color: "grey",
                    }}

                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {items.map(item => <Picker.Item label={item.label} value={item.label} />)}
                </Picker>
            </View>
            // </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})

export default MainPicker;