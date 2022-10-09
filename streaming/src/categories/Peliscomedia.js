import React, {useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, SafeAreaView, Modal, Button, TouchableHighlight} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Peliscomedia(){
    const [comedia1, setcomedia1] = useState(false);
    const [comedia2, setcomedia2] = useState(false);
    const [comedia3, setcomedia3] = useState(false);
    const [comedia4, setcomedia4] = useState(false);
    const [comedia5, setcomedia5] = useState(false);
    const [comedia6, setcomedia6] = useState(false);
    return(

    
    <>
    <Modal transparent={true} animationType="slide" visible={comedia1} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'tcdUhdOlz9M'} />
            <Button title='Cerrar' onPress={()=>{setcomedia1(!comedia1)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={comedia2} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'LZl69yk5lEY'} />
            <Button title='Cerrar' onPress={()=>{setcomedia2(!comedia2)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={comedia3} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'aeVkbNka9HM'} />
            <Button title='Cerrar' onPress={()=>{setcomedia3(!comedia3)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={comedia4} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'78dTtFCRcFI'} />
            <Button title='Cerrar' onPress={()=>{setcomedia4(!comedia4)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={comedia5} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'zZNC5emNyEQ'} />
            <Button title='Cerrar' onPress={()=>{setcomedia5(!comedia5)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={comedia6} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'oJVv3PBoPMc'} />
            <Button title='Cerrar' onPress={()=>{setcomedia6(!comedia6)}}></Button>
            </View>
        </View>            
    </Modal>

  <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('../img/bg.jpg')} />
 </View>


<View style={styles.contenedor}>
    <Text style={styles.titulo}>Comedia</Text>
    <ScrollView horizontal>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia1(!comedia1)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia1.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia2(!comedia2)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia2.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia3(!comedia3)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia3.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia4(!comedia4)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia4.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia5(!comedia5)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia5.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setcomedia6(!comedia6)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/comedia6.jpg')}
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