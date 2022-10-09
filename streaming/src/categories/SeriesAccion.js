import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import SeriesGeneral from './SeriesGeneral'

const SeriesAccion = () => {
  
    const accion = [
        {
            id: 1,
            nombre: 'Daredevil',
            temporadas: 3,
            imagen: require('../img/accion7.jpg'),
            video: 'jAy6NJ_D5vU',

        },
        {
            id: 2,
            nombre: 'Moon Knight',
            temporadas: 1,
            imagen: require('../img/accion8.jpg'),
            video: 'x7Krla_UxRg',

        },
        {
            id: 3,
            nombre: 'Miraculous: Las aventuras de Ladybug',
            temporadas: 5,
            imagen: require('../img/accion9.jpg'),
            video: 'WpM5BDRRlJg',

        },
        {
            id: 4,
            nombre: 'Loki',
            temporadas: 1,
            imagen: require('../img/accion10.jpg'),
            video: 'KcBStos46EM',

        },
        {
            id: 5,
            nombre: 'Castlevania',
            temporadas: 4,
            imagen: require('../img/accion11.jpg'),
            video: 'gUdI50Jv37E',

        },
        {
            id: 6,
            nombre: 'Hawaii Five-0',
            temporadas: 10,
            imagen: require('../img/accion12.jpg'),
            video: 'LVegcA6FaVQ',

        },
    ]

    
    return (
        <SafeAreaView>
            <FlatList 
                data = { accion }
                keyExtractor = { (item) => item.id }
                renderItem = {({item,index}) => <SeriesGeneral item = { item }/>}
                ItemSeparatorComponent = { () => <View style={ styles.separador }/>}
                ListHeaderComponent = { () => <Text style = { styles.cabecera} > Accion</Text> }
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

export default SeriesAccion