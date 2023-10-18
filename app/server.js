import { StyleSheet, View, Image, TextInput, Text } from 'react-native'
import React, { Component } from 'react'
import { PaperProvider} from 'react-native-paper'
import Sidebar from './component/sidebar'

export default function server() {
  return (
<PaperProvider>
    <View style={styles.container}>
        <View style={styles.sidebarComponent}>
            <Sidebar/>
        </View>
        <View style={styles.container2}>
      
        </View> 
        <View style={styles.container3}>
            <TextInput 
                    style={styles.search}
                    placeholder='Rechercher'
                />
            <Text style={styles.titleCategory}>Viande</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.9, height: 1 , backgroundColor: 'white', marginBottom: 35}} />
            </View>
            <View style={styles.plate}>
                <View style={styles.plate1}>
                    <View style={styles.allplateCate}>
                        <Text style={styles.plateName}> Entrecote</Text>
                    </View>

                </View>
                <View style={styles.plate2}>
                    <View style={styles.allplateCate}>
                        <Text style={styles.plateName}> Kobe </Text>  
                    </View>
                </View>
            </View>

        </View> 
        <View style={styles.container4}>
      
      </View> 
    </View> 
</PaperProvider>    
  );
}


const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'row',
  },

  sidebarComponent:{
    flex:2,
  },

  container2: {
    flex:3,
    backgroundColor:'#2C2F33', 
    alignItems:'center',
    
  },
  container3: {
    flex:10,
    backgroundColor:'#32353A', 
    alignItems:'center',
  },
  container4: {
    flex:10,
    backgroundColor:'#2C2F33', 
    alignItems:'center',
  },

  search: {
    width: 400,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor : '#DADADA',
    borderRadius: 20,
    marginBottom: 30,
    color: '#ffffff',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  titleCategory:{
    color: 'white',
    fontWeight:'bold',
    marginBottom:10
  },

  WhiteBar:{
    backgroundColor: '#FFFFFF',
    height:100,
    width:100
  },
  plate:{
    flex:1,
    flexDirection:'row'
  },
  plate1:{
    flex:1,
    alignItems:'center'
   
  },
  plate2:{
    flex:1,
 
  },
  allplateCate:{
    backgroundColor:"#2C2F33",
    width:200,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  plateName:{
    fontWeight: '900',
    color:'white',
    fontSize: 19
  }
})