
import React from 'react';
import {Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons'

const HomeScreen: React.FC = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AntDesign name="menufold" size={32}/>
    </View>
);

export default HomeScreen;
