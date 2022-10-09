import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import SeriesGeneral from './SeriesGeneral'

const SeriesComedia = () => {
  
    const comedia = [
        {
            id: 1,
            nombre: 'CHUCK',
            temporadas: 5,
            imagen: require('../img/comedia7.jpg'),
            video: 'hykkUZMSv5o',

        },
        {
            id: 2,
            nombre: 'Fenomenoide',
            temporadas: 2,
            imagen: require('../img/comedia8.jpg'),
            video: '-9CQI_HPxv4',

        },
        {
            id: 3,
            nombre: 'The Good Place',
            temporadas: 4,
            imagen: require('../img/comedia9.jpg'),
            video: '9QxRbzFk3zk',

        },
        {
            id: 4,
            nombre: 'Los Simpson',
            temporadas: 34,
            imagen: require('../img/comedia10.jpg'),
            video: 'SR8WWFzrZAg',

        },
        {
            id: 5,
            nombre: 'The Office',
            temporadas: 9,
            imagen: require('../img/comedia11.jpg'),
            video: 'A4FMZpNNrzA',

        },
        {
            id: 6,
            nombre: 'ALF',
            temporadas: 4,
            imagen: require('../img/comedia12.jpg'),
            video: '2hBSMInlDGg',

        },
    ]

    
    return (
        <SafeAreaView>
            <FlatList 
                data = { comedia }
                keyExtractor = { (item) => item.id }
                renderItem = {({item,index}) => <SeriesGeneral item = { item }/>}
                ItemSeparatorComponent = { () => <View style={ styles.separador }/>}
                ListHeaderComponent = { () => <Text style = { styles.cabecera} > Comedia</Text> }
            />
        </SafeAreaView>
  )  
  
}

const styles = StyleSheet.create({
    separador:{
        marginVertical: 10, 
        borderColor: '#cdcdcd', 
        borderWidth: 0.5,
    },
    cabecera:{
        fontWeight: '500', 
        fontSize: 20, 
        marginBottom: 10, 
        backgroundColor: '#7d1c15',
        padding: 10,
        color: '#FFFF'
    },
    
  })

export default SeriesComedia