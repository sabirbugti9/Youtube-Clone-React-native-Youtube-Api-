import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomHomeNavigation from './bottomHomeNavigation';
import VideoScreen from '../../screens/VideoScreen/index';
const Routes = () => {
    const RootStack = createStackNavigator();

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={BottomHomeNavigation}
                options={{ headerShown: false, }}
            />
            <RootStack.Screen
                name="VideoPlay"
                component={VideoScreen}
                options={{ headerShown: false, }}
            />


        </RootStack.Navigator>
    );
}
export default Routes;