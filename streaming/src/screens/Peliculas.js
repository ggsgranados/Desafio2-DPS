import React, {useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, SafeAreaView, Modal, Button, TouchableHighlight} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Peliscomedia from '../categories/Peliscomedia';
import Pelisromance from '../categories/PelisRomance';
import Pelisaccion from '../categories/PelisAccion';
 
export default function Peliculas(){
    
 
    return(
    <SafeAreaView>
  
      <ScrollView>        
        <Peliscomedia/>
        <Pelisromance/>  
        <Pelisaccion/>  

      </ScrollView>
    
    </SafeAreaView>
    
     
    
    
 ); 
}



