import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/index';

import React from 'react';
import { Image, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';

import ADIcon from 'react-native-vector-icons/AntDesign';
const HomeStack = createStackNavigator();
const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home" component={HomeScreen} options={{
                    headerTitleAlign: 'center',
                    headerTintColor: "white",
                    title: "",
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                    headerLeft: () => {
                        return <Image source={require("../../assets/images/logo.png")} resizeMode="contain" style={{ height: 20, width: 110 }} />
                    },
                    // headerLeft: () => {
                    //     return <Feather name="camera" size={25} color={"#000"} style={{ marginLeft: 12.0 }} />

                    // },
                    headerRight: () => {
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <Ionicon name="notifications" size={25} color={"white"} style={{marginRight:16.0}} />

                                <Feather name="search" size={25} color={"white"} style={{marginRight:16.0}} />

                                <Image style={{
                                    width: 30,
                                    height: 30,
                                    marginRight:22.0,
                                    borderRadius: 15,
                                }} source={require('../../assets/images/logo.jpg')} />


                            </View>
                        );


                    }
                }}

            />

        </HomeStack.Navigator>
    );
}
export default HomeRoutes;