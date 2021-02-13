import React from "react";
import { Button, Divider, Drawer } from "react-native-paper";
import { Image, StyleSheet, Share, View } from "react-native";

function AppDrawer({ navigation }) {
    const [active, setActive] = React.useState('');

    return (
        <Drawer.Section style={{ backgroundColor: "white", flex: 1 }} >
            <View style={{ flexDirection: 'row', padding: 20, marginTop: 25 }} >
                {/* <Image style={{ width: 260, height: 50 }} source={require("../assets/navigationIcon.png")} /> */}
            </View>
            <Divider />
            <Drawer.Item
                label="Home"
                icon="home"
                active={active === 'second'}
                onPress={() => navigation.navigate('Home')}
            />
            <Divider />
            <Drawer.Item
                label="Features"
            />

            <Drawer.Item
                label="Image To Text"
                icon="camera"
                active={active === 'second'}
                onPress={() => navigation.navigate('Home')}
            />
            <Drawer.Item
                label="Listen"
                icon="volume-high"
                active={active === 'third'}
                onPress={() => navigation.navigate("TextToVoice")}

            />
            <Drawer.Item
                label="Translate"
                icon="translate"
                active={active === 'third'}
                onPress={() => navigation.navigate("TranslateScreen")}

            />

        </Drawer.Section>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        justifyContent: "flex-start",
        paddingVertical: 20,

    }
})

export default AppDrawer;