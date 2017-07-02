import React from 'react'
import { TouchableHighlight, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors'

const NavButton = (props) => (
    <TouchableHighlight style={styles.button}>
        <Ionicons name={props.name} size={32} color={Platform.OS === 'ios' ? Colors.iosButtonFontColor : Colors.androidButtonFontColor}/>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        width:40, 
        alignItems:'center'
    }
})

export default NavButton;