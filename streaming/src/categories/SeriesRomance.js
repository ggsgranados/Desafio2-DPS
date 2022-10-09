import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import SeriesGeneral from './SeriesGeneral'

const SeriesRomance = () => {
  
    const romance = [
        {
            id: 1,
            nombre: 'Love',
            temporadas: 3,
            imagen: require('../img/romance7.jpg'),
            video: 'FwiU4O5Cxrc',

        },
        {
            id: 2,
            nombre: 'Love Alarm',
            temporadas: 2,
            imagen: require('../img/romance8.jpg'),
            video: '8sXTfzaLmiQ',

        },
        {
            id: 3,
            nombre: 'Recuerdos de juventud',
            temporadas: 4,
            imagen: require('../img/romance9.jpg'),
            video: 'tahWtPeNkM0',

        },
        {
            id: 4,
            nombre: 'Anatomía de Grey',
            temporadas: 19,
            imagen: require('../img/romance10.jpg'),
            video: 'uTYtGSmBe-k',

        },
        {
            id: 5,
            nombre: 'Kimi ni Todoke',
            temporadas: 2,
            imagen: require('../img/romance11.jpg'),
            video: '_gJR6gfRYEQ',

        },
        {
            id: 6,
            nombre: 'Wotaku ni Koi wa Muzukashī',
            temporadas: 1,
            imagen: require('../img/romance12.jpg'),
            video: 'Uy90rTP9mLs',

        },
    ]

    
    return (
        <SafeAreaView>
            <FlatList 
                data = { romance }
                keyExtractor = { (item) => item.id }
                renderItem = {({item,index}) => <SeriesGeneral item = { item }/>}
                ItemSeparatorComponent = { () => <View style={ styles.separador }/>}
                ListHeaderComponent = { () => <Text style = { styles.cabecera} > Romance</Text> }
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

export default SeriesRomance