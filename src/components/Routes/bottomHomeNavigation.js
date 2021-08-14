import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ADIcon from 'react-native-vector-icons/AntDesign';
import HomeRoutes from './home_route';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomHomeNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {

                    if (route.name === 'Home') {
                        return <Foundation name="home" size={size} color={color} />

                    }
                    if (route.name === 'Explore') {
                        return <MaterialIcons name="explore" size={size} color={color} />

                    }
                    if (route.name === 'Post') {
                        return <ADIcon name="pluscircleo" size={size} color={color} />

                    }
                    if (route.name === 'Subscriptions') {
                        return <MaterialCommunityIcons name={"youtube-subscription"} size={size} color={color} />

                    }
                    if (route.name === 'Library') {
                        return <MaterialIcons name={"video-library"} size={size} color={color} />

                    }
                },
                tabBarStyle: {
                    backgroundColor: "black"
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',

            })}

        >
            <Tab.Screen name="Home" component={HomeRoutes} options={{ headerShown: false }} />
            <Tab.Screen name="Explore" component={HomeRoutes} options={{ headerShown: false }} />
            <Tab.Screen name="Post" component={HomeRoutes} options={{ headerShown: false }} />
            <Tab.Screen name="Subscriptions" component={HomeRoutes} options={{ headerShown: false }} />
            <Tab.Screen name="Library" component={HomeRoutes} options={{ headerShown: false, }} />

        </Tab.Navigator>
    );
}
export default BottomHomeNavigation;