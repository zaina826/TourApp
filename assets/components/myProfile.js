import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    Image
} from "react-native";
import * as firebase from "firebase";


export default class Profile extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>{firebase.auth().currentUser.displayName}</Text>

                <Image
                    style={styles.logo}
                    source={{
                        uri: firebase.auth().currentUser.photoURL,
                    }}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 50,
        height: 50,
    },
    VtoRow: {
        flex: 1 / 4,
        flexDirection: "row"
    },
    Btn: {
        margin: 8
    },

});




