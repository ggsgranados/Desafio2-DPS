import { RefreshControlBase } from "react-native";
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';
export default function Footer(props) {
 const {calculate} = props;
 return (
 <View style={styles.viewFooter}>
 <TouchableOpacity style={styles.button} onPress={calculate}>
 <Text style={styles.text}>CALCULAR</Text>
 </TouchableOpacity>
 </View>
 );
}
const styles = StyleSheet.create({
 viewFooter: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight:150,
    paddingLeft: 150,
  },

 button: {
    backgroundColor: colors.PRIMARY_COLOR_DARk,
    padding: 10,
    borderRadius: 20,
    height: 50,
    width: '500%',
  },

 text: {
 fontWeight: 'bold',
 fontSize: 18,
 color: '#fff',
 textAlign: 'center',
 },
});
