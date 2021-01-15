import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from 'navigations/DrawerNavigation';
import { TouchableOpacity } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Container from "components/Container";


const Stack = createStackNavigator();


export default function RootNavigarion() {

    return (
        <Stack.Navigator
            screenOptions={({navigation}) => {
                return {
                    headerLeft: () => {
                        return (
                            <Container mx={3}>
                                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                                    <Ionicons name="menu-outline" size={32}/>
                                </TouchableOpacity>
                            </Container>
                        )
                    }
                }
            }}
        >
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}
