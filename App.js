import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StoreProvider, { StoreContext } from './Store';

import React, { useEffect, useContext, useState } from 'react'


export default function App() {
  const [clicked, setClicked] = useState(false)

  const store = useContext(StoreContext)

  console.log('test')
  console.log(store?.state?.wasDataReceived)

  return (
    <StoreProvider>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {store.state.wasDataReceived}</Text>

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
