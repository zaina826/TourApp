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
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as firebase from "firebase";

import HomeScreen from "./assets/components/Home";
import LoginScreen from "./assets/components/Login";
import Signup from "./assets/components/Signup";
import Loading from "./assets/components/loading";
import Profile from "./assets/components/myProfile";

const switchNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Profile }
});

const MainNavigator = createSwitchNavigator({
  Loading: { screen: Loading },
  Login: { screen: LoginScreen },
  afterLogin: { screen: switchNavigator },
  Signup: { screen: Signup }
});

const App = createAppContainer(MainNavigator);

var firebaseConfig = {
  apiKey: "AIzaSyCx-1hIJL3O5GWiO7u-4G7IxTJ_hOuCq0M",
  authDomain: "tourguide-c2afe.firebaseapp.com",
  databaseURL: "https://tourguide-c2afe.firebaseio.com",
  projectId: "tourguide-c2afe",
  storageBucket: "tourguide-c2afe.appspot.com",
  messagingSenderId: "166546082225",
  appId: "1:166546082225:web:c15323b27ba2d2a8695590",
  measurementId: "G-640ZSKSKV7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default App;
