import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
    CameraRoll
} from "react-native";
import uuid from "uuid";
import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {

    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
                <Button title='Get UID'
                    onPress={() => {
                        // this.props.navigation.navigate('Signup')
                        console.log(this.state.currentUser)
                    }} />
                <Button title='edit user'
                    onPress={() => {
                        var userNow = firebase.auth().currentUser;

                        userNow.updateProfile({
                            displayName: 'Sobhi Ashraf',
                            photoURL: 'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/87302109_842701872914116_4846887880779366400_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=KPwpNdIhctgAX9pg-ci&_nc_ht=scontent.fgza2-1.fna&oh=787e5a8fa7a7ea9cbffb523946990a2f&oe=5EA9C487'
                        })
                    }} />
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

});
