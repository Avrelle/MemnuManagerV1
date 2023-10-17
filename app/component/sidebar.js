import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { PaperProvider } from 'react-native-paper';

export default function sideBar() {
  return (
<PaperProvider>


    <View style={styles.containerSidebar}>

    <Link href={"/"}>login</Link>
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
  containerSidebar:{
    flex:1,
    alignItems: 'start',
    backgroundColor:'#BF40C1',
    height: 1000,
    width: 100
  },
})