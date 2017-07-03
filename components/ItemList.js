import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const ItemList = (props) => (
    <Touchable onPress={props.onPress}>
        <View style={styles.row}>
            <Text>{props.title}</Text>
        </View>
    </Touchable>
)

const styles = StyleSheet.create({
    row: {
        height: 40,
        justifyContent: 'center',
        paddingLeft: 4,
        backgroundColor: 'white'
    }
})

export default ItemList