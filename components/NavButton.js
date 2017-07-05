import React from 'react'
import { View, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors'
const Button = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const NavButton = (props) => (
    <Button onPress={props.onPress}>
        <View style={styles.button}>
            <Ionicons name={props.name} size={32} color={Platform.OS === 'ios' ? Colors.iosButtonFont : 'black'}/>
        </View>
    </Button>
)

const styles = StyleSheet.create({
    button: {
        width:60,
        flex: 1,
        justifyContent: 'center', 
        alignItems:'center'
    }
})

export default NavButton;