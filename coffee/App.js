/**
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Button } from 'react-native';
import Constants from 'expo-constants';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Results';
import colors from './src/utils/colors';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [pago, setPago]=useState(null);
  const [total, setTotal]=useState(null);
  const [errorMessage,setErrorMessage] = useState("");


  useEffect(() => {
  if (capital && interest && months) calculate();
 else reset();
   }, [capital, interest, months, pago]);
  const calculate = () => {
  reset();
  if (!capital) {
 setErrorMessage('Añade la cantidad que quieres solicitar');
 } else if (!interest) {
 setErrorMessage('Añade el interes del prestamos');
 } else if (!months) {
 setErrorMessage('Seleccióna los meses a pagar');
 } else {
 const i = interest / 100;
 const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
 setTotal({
 monthlyFee: fee.toFixed(2).replace('.', ','),
 totalPayable: (fee * months).toFixed(2).replace('.', ','),
 });
 }
 };
 const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.HeadApp}> StarBosco App </Text>
       <Form
        setCapital = {setCapital}
        setInterest = {setInterest}
        setMonths = {setMonths}
        setPago = {setPago}
        /> 
      </View>

      <Result
      capital={capital}
      interest={interest}
      months={months}
      pago = {pago}
      total={total}
      errorMessage={errorMessage}
      />
      
      <View style={styles.container}>
        <Footer></Footer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 8,
    paddingLeft:30,
    paddingRight:30,

  },

  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  HeadApp: {
    margin: 24,
    fontsize: 25,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

  Header:{
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  }
});
