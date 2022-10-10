/**
* @format
* @flow strict-local
*/
import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import colors from './src/utils/colors';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <StatusBar> barStyle="light-content"<statusbar/>
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}
