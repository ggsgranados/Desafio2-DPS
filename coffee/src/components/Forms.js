import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect  from 'react-native-picker-select';

export default function Form(props) {
 const {setCapital, setInterest, setMonths, setPago} = props;
 return (
 <View style={styles.viewForm}>
 <View style={styles.viewInputs}>
 <RNPickerSelect style={picketSelectStyles}
 onValueChange={(value) => setMonths(value)}
 placeholder={{
 label: 'Seleccione tamaño de café...',
 value: null,
 }}
 items={[
 {label: 'Short 8 onz.', value: 1},
 {label: 'Tall 12 onz.', value: 1.50},
 {label: 'Grande 16 onz.', value: 2},
 ]}
 /></View>
 <RNPickerSelect style={picketSelectStyles}
 onValueChange={(value) => setInterest(value)}
 placeholder={{
 label: 'Seleccione tipo de café...',
 value: null,
 }}
 items={[
 {label: 'Moccha', value: 2},
 {label: 'Te Chai', value: 2.50},
 {label: 'Americano', value: 1.50},
 {label: 'Frapper', value: 3.00},
 ]}
 />
 
 <RNPickerSelect style={picketSelectStyles}
 onValueChange={(value) => setPago(value)}
 placeholder={{
 label: 'Tipo de pago',
 value: null,
 }}
 items={[
{label: 'Efectivo', value: 1},
 {label: 'Tarjeta de crédito', value: 2},
 ]}
 />

 <TextInput
 placeholder="Cantidad"
 keyboardType="numeric"
 style={styles.input}
 onChange={(e) => setCapital(e.nativeEvent.text)}
/>
 </View>
 );
}
const styles = StyleSheet.create({
 viewForm: {
    position: 'center',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 50,
    backgroundColor: '#554648',
    borderRadius: 30,
    height: 280,
    justifyContent: 'center',
    paddingRight:50,
  },

 viewInputs: {
    flexDirection: 'row',
 },

 input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#A49093',
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
 },

 inputPercentage: {
 width: '40%',
 marginLeft: 5,
 },
});

const picketSelectStyles = StyleSheet.create({
 inputIOS: {
 fontSize: 16,
 paddingVertical: 12,
 paddingHorizontal: 10,
 borderWidth: 1,
 borderColor: 'grey',
 borderRadius: 4,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 marginLeft: -5,
 marginRight: -5,
 },
 inputAndroid: {
 fontSize: 16,
 paddingHorizontal: 10,
 paddingVertical: 8,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 },
});