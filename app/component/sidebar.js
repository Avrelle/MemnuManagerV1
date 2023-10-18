import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { PaperProvider } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function sideBar() {
  return (

    <View style={styles.containerSidebar}>
      <Link style={styles.linkPerson}href="/">
        <Ionicons name="person-circle-sharp" style={styles.personIcon}/>
      </Link>
      <Link href="/home">
        <Ionicons name="home" style={styles.homeIcon}/>
      </Link>
      <Link style={styles.linkServer}href="/server">
        <Ionicons name="restaurant" style={styles.serverIcon}/>
      </Link>
      <Link href="/home">
        <Ionicons name="pizza" style={styles.cookIcon}/>
      </Link>
    </View>    
  );
}


const styles = StyleSheet.create({

  containerSidebar:{
    flex:1,
    alignItems: 'center',
    backgroundColor:'#23272A',
    height: 10000000,
    width: 97
  },
  personIcon: {
    marginTop: 40,
    fontSize: 45,
    color: '#898886'
  },
  homeIcon: {
    marginTop: 35,
    fontSize: 45,
    color: '#898886'
  },
  serverIcon: {
    marginTop: 20,
    fontSize: 45,
    color: '#898886'
  },
  cookIcon: {
    marginTop: 20,
    fontSize: 45,
    color: '#898886'
  },
  linkPerson:{
    marginTop:40,
    marginBottom:40
  },
  linkServer:{
    marginTop: 20,
    marginBottom:20
  }

})