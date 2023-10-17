import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { PaperProvider } from 'react-native-paper';

export default function home() {
  return (
<PaperProvider>
  <View style={styles.container}>
    <Text>Les Foufous Du Resto</Text>
    <Link href="/">Test</Link>
  </View>

  </PaperProvider>    
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2C2F33',
    alignItems: 'center',
  },
})