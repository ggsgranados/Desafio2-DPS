import React, {useState} from 'react';
import {View, Text, StyleSheet,Image, ScrollView, SafeAreaView, Modal, Button, TouchableHighlight} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Pelisromance(){
    const [romance1, setromance1] = useState(false);
    const [romance2, setromance2] = useState(false);
    const [romance3, setromance3] = useState(false);
    const [romance4, setromance4] = useState(false);
    const [romance5, setromance5] = useState(false);
    const [romance6, setromance6] = useState(false);
    return(

    
    <>
    <Modal transparent={true} animationType="slide" visible={romance1} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'FC6biTjEyZw'} />
            <Button title='Cerrar' onPress={()=>{setromance1(!romance1)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={romance2} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'vWhX8aTj5TI'} />
            <Button title='Cerrar' onPress={()=>{setromance2(!romance2)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={romance3} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'FRrc2X4Uzm4'} />
            <Button title='Cerrar' onPress={()=>{setromance3(!romance3)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={romance4} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'zfQXKVCudec'} />
            <Button title='Cerrar' onPress={()=>{setromance4(!romance4)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={romance5} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'VDphy_R8z6g'} />
            <Button title='Cerrar' onPress={()=>{setromance5(!romance5)}}></Button>
            </View>
        </View>            
    </Modal>

    <Modal transparent={true} animationType="slide" visible={romance6} onRequestClose={()=>{
        alert('Modal has veen closed.');
    }} >
        <View style={styles.vistaModal}>
            <View style={styles.Modal}>
            <YoutubePlayer height={225} play={false} videoId={'ayi6VfCKBcA'} />
            <Button title='Cerrar' onPress={()=>{setromance6(!romance6)}}></Button>
            </View>
        </View>            
    </Modal>

  


<View style={styles.contenedor}>
    <Text style={styles.titulo}>Romance</Text>
    <ScrollView horizontal>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance1(!romance1)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance1.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance2(!romance2)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance2.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance3(!romance3)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance3.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance4(!romance4)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance4.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance5(!romance5)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance5.jpg')}
            />
            </TouchableHighlight>
        </View>
        <View>
            <TouchableHighlight
            onPress={()=>{setromance6(!romance6)}}
            >
            <Image
            style={styles.peliculas}
            source={require('../img/romance6.jpg')}
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