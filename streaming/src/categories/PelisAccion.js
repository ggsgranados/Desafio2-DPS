import React, {useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, SafeAreaView, Modal, Button, TouchableHighlight} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Pelisaccion(){
    const [accion1, setaccion1] = useState(false);
    const [accion2, setaccion2] = useState(false);
    const [accion3, setaccion3] = useState(false);
    const [accion4, setaccion4] = useState(false);
    const [accion5, setaccion5] = useState(false);
    const [accion6, setaccion6] = useState(false);
    return(

    
    <>
    <Modal transparent={true} animationType="slide" visible={accion1} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'u9Mv98Gr5pY'} />
            <Button title='Cerrar' onPress={()=>{setaccion1(!accion1)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={accion2} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'kaU2A7KyOu4'} />
            <Button title='Cerrar' onPress={()=>{setaccion2(!accion2)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={accion3} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'Xm12NSa8jsM'} />
            <Button title='Cerrar' onPress={()=>{setaccion3(!accion3)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={accion4} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'vKQi3bBA1y8'} />
            <Button title='Cerrar' onPress={()=>{setaccion4(!accion4)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={accion5} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'C0BMx-qxsP4'} />
            <Button title='Cerrar' onPress={()=>{setaccion5(!accion5)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={accion6} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'B1E7h3SeMDk'} />
            <Button title='Cerrar' onPress={()=>{setaccion6(!accion6)}}></Button>
            </View>
        </View>            
    </Modal>

  


<View style={styles.contenedor}>
    <Text style={styles.titulo}>Acción</Text>
    <ScrollView horizontal>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion1(!accion1)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion1.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion2(!accion2)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion2.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion3(!accion3)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion3.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion4(!accion4)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion4.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion5(!accion5)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion5.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setaccion6(!accion6)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/accion6.jpg')}
            />
            </TouchableHighlight>
        </View>
    </ScrollView>
</View>
</>
);
}

const styles = StyleSheet.create({
    banner:{
     height:100,
     flex:1
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10,
    },
    contenedor:{
        marginHorizontal: 10,
    },
    peliculas:{
        width:250,
        height: 300,
        marginRight: 10,
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
});