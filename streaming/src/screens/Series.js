import React from 'react';
import {View, ScrollView, StyleSheet, Image, SafeAreaView} from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import SeriesComedia from '../categories/SeriesComedia';
import SeriesRomance from '../categories/SeriesRomance';
import SeriesAccion from '../categories/SeriesAccion';


export default function Series({item}){
    
 return(
    <SafeAreaView>  
        <ScrollView>
        <View style={{flexDirection:'row'}} >
            <Image
            style={styles.banner}
            source={require('../img/bg2.jpg')} />
        </View>
        <SeriesComedia/>
        <SeriesRomance/>
        <SeriesAccion/>
        </ScrollView>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    banner:{
        height: 150,
        flex:1
    },
    container:{
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 10,
      flexDirection: 'row',
    },
    imagenes:{
      width: 75, 
      height: 75, 
      borderRadius:50,
    },
    contenido:{
      marginEnd: 60,
      marginLeft: 20,
    },
    titulo:{
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: '#000000'
    }
    
  })