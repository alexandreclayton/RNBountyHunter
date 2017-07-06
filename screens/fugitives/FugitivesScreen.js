import React, { Component } from 'react'
import { FlatList, Platform, StyleSheet } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import { ItemList, NavButton, ItemSeparator } from '../../components'
import Dao from '../../db/Dao'

export default class FugitivesScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Fugitives',
        headerRight: (
            <NavButton name={ Platform.OS === "ios" ? "ios-add" : "md-add" } 
                onPress={()=>navigation.navigate('AddFugitive')}/>
        )
    });

    state ={
        fugitives: []
    }

    componentWillMount() {
        this.listener = EventRegister.addEventListener('reloadFugitives', this.loadFugitives)
    }
    
    componentWillUnmount() {
        EventRegister.removeEventListener(this.listener)
    }
    componentDidMount() {
        this.loadFugitives()
    }

    loadFugitives = async () => {
        try {
            const fugitives = await Dao.listFugitives(0)
            this.setState({fugitives})

        } catch (error) {
            alert(error)
        }
    }

    openModal = () => {
        this.props.navigation.navigate('AddFugitive')
    }

    renderItem = ({item}) => (
        <ItemList title={item.name} onPress={() => {
                this.props.navigation.navigate('FugitivesDetail', { fugitive: item })
            } } />
    )

    render() {
        return (
            <FlatList 
                style={styles.list}
                data={this.state.fugitives}
                renderItem={this.renderItem}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={({id})=>id}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex:1, 
        backgroundColor: 'white'
    }
})