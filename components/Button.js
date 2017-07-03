import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'
import Colors from '../utils/Colors'
const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const Button = (props) => {
    const formattedTitle = Platform.OS === 'android' ? props.title.toUpperCase() : props.title;
    return (
        <Touchable>
            <View style={[styles.button, props.style]}>
                <Text style={[styles.text, props.color && {color: props.color}]}>{formattedTitle}</Text>
            </View>
        </Touchable>
    )
}

const styles = StyleSheet.create({
    text: Platform.select({
        ios: {
            color: Colors.iosButtonFont,
            textAlign: 'center',
            padding: 8
        },
        android: {
            color: Colors.androidButtonFont,
            textAlign: 'center',
            padding: 8,
            fontWeight: '500'
        }
    })
    ,
    button: Platform.select({
        ios: {
            backgroundColor: '#f7f7f7'
        },
        android: {
            elevation: 4,
            backgroundColor: '#2196F3',
            borderRadius: 2
        }
    })
})

export default Button;

