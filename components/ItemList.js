import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ItemList = (props) => (
    <View style={styles.row}>
        <Text>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        height: 40,
        justifyContent: 'center',
        paddingLeft: 4
    }
})

export default ItemList