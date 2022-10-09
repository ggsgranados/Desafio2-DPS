import React from 'react';
import {View,Text, StyleSheet,Image, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function Proximamente(){
 return(
    <SafeAreaView >
      <ScrollView>
        
      
        <Text style={styles.sectionHeader}>Super Mario Bros (Película)</Text>
        <YoutubePlayer height={225} play={false} videoId={'SvJwEiy2Wok'} />
        <Text style={styles.texto}>Super Mario Bros.: La película (The Super Mario Bros. Movie) es una película animada CGI que será producida por Illumination en asociación con Nintendo, con distribución por Universal Pictures, que se estrena el 7 de abril de 2023 en los Estados Unidos.</Text>
        <Text style={styles.texto}>Fecha de estreno: 7 de abril de 2023</Text>

        <Text style={styles.sectionHeader}>The Last of Us (Serie)</Text>
        <YoutubePlayer height={225} play={false} videoId={'TdqGeWVixEo'} />
        <Text style={styles.texto}>The Last of Us es una próxima serie de televisión estadounidense postapocalíptica que se emitirá en HBO. Basada en el videojuego de 2013 del mismo nombre desarrollado por Naughty Dog, la serie seguirá a Joel, un contrabandista encargado de escoltar a la adolescente Ellie a través de un Estados Unidos postapocalíptico.</Text>
        <Text style={styles.texto}>Fecha de estreno: 2023</Text>

        <Text style={styles.sectionHeader}>Wakanda Por Siempre (Película)</Text>
        <YoutubePlayer height={225} play={false} videoId={'BPjbiZQmBI4'} />
        <Text style={styles.texto}>Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018.</Text>
        <Text style={styles.texto}>Fecha de estreno: 11 de noviembre de 2022</Text>

        <Text style={styles.sectionHeader}>Willow (Serie)</Text>
        <YoutubePlayer height={225} play={false} videoId={'i_NKBLRacME'} />
        <Text style={styles.texto}>Un grupo de héroes peculiares emprende una peligrosa misión a lugares mucho más allá de su hogar, donde deben enfrentarse a sus demonios internos y unirse para salvar su mundo.</Text>
        <Text style={styles.texto}>Fecha de estreno: 30 de noviembre de 2022</Text>

        <Text style={styles.sectionHeader}>Avatar 2 (Película)</Text>
        <YoutubePlayer height={225} play={false} videoId={'NZrX_ES93JA'} />
        <Text style={styles.texto}>Un grupo de héroes peculiares emprende una peligrosa misión a lugares mucho más allá de su hogar, donde deben enfrentarse a sus demonios internos y unirse para salvar su mundo.</Text>
        <Text style={styles.texto}>Fecha de estreno: 16 de diciembre de 2022</Text>

        <Text style={styles.sectionHeader}>1899 (Serie)</Text>
        <YoutubePlayer height={225} play={false} videoId={'2JV1KjA1nc8'} />
        <Text style={styles.texto}>Una odisea de gran impacto visual en la que nada es lo que parece. Las mentes creadoras de la mundialmente aclamada «Dark» nos llevan al año «1899» a bordo del Kerberos. Lo que está perdido será encontrado.</Text>
        <Text style={styles.texto}>Fecha de estreno: 18 de noviembre de 2022</Text>
      

      
        
      
      

    
      </ScrollView>
    </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    banner:{
     height:250,
     flex:1
    },
    texto: {
        textAlign: 'justify',
        padding: 15, 
      },
      sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#7d1c15',
        color: 'white',
        padding: 10,
      },

});