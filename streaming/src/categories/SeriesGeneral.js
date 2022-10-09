import { SafeAreaView, View, Text, StyleSheet, Image, TouchableHighlight, Modal, Button} from 'react-native'
import React, {useState} from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

const SeriesGeneral = ({item}) => {
  
  const { id, nombre, temporadas, imagen, video } = item
  const [serie, setSerie] = useState(false);

  return (
    <SafeAreaView style = { styles.container }>

      <Modal transparent={true} animationType="slide" visible={serie} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={video} />
            <Button title='Cerrar' onPress={()=>{setSerie(!serie)}}></Button>
            </View>
        </View>            
    </Modal>

      <TouchableHighlight
            onPress={()=>{setSerie(!serie)}}
            >      
            <Image style = { styles.imagenes} source = {imagen}></Image>
      </TouchableHighlight>
      <SafeAreaView style = { styles.contenido}>
      <Text style = { styles.titulo}>{nombre}</Text>
      <Text>Cantidad de temporadas: {temporadas}</Text>
      </SafeAreaView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
  },
  imagenes:{
    width: 100, 
    height: 75,
    flex: 1,
  },
  contenido:{
    marginEnd: 60,
    marginLeft: 20,
    flex: 1,
  },
  titulo:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#000000'
  },
  vistaModal:{
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal:{
    backgroundColor: '#ffffffaa',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    flex: 1,
  },
  
})

export default SeriesGeneral