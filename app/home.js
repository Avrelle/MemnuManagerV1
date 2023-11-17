import { StyleSheet, View, Image, TextInput, Text } from 'react-native'
import { PaperProvider} from 'react-native-paper'
import Sidebar from './component/sidebar'
import imgRestaurant from '../assets/restauExemple.jpg'
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {userConnect} from './component/stayConnect'

console.log(AsyncStorage.getItem('authToken'))
userConnect

export default function home() {
  return (
<PaperProvider>
    <View style={styles.container}>
      <View style={styles.sidebarComponent}>
          <Sidebar/>
      </View>
      <View style={styles.container2}>
        <TextInput style = {styles.nameResto}>ozeizjen</TextInput>
        <Image style = {styles.fondResto} source={imgRestaurant}/>
        <View style={styles.PODandInfoContainer}>
          
          <View style={styles.PODContainer}>
            <Text style={styles.titlePODinfo} >Plat du Jour :</Text>
            <View style={styles.plateOfDay}>
            <Ionicons name="list" style={styles.modifIcon}/>
              <TextInput style={styles.txtPDOinfo}>zgehdiun</TextInput>
            </View>
          </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titlePODinfo} >Information :</Text>
              <View style={styles.info}>
                <Ionicons name="list" style={styles.modifIcon}/>
                <TextInput style={styles.txtPDOinfo} >zgehdiun</TextInput>
              </View>
            </View>
        </View>
      
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
    flex:23,
    backgroundColor:'#2C2F33', 
    alignItems:'center',
  },

  nameResto:{
    marginTop : 20,
    fontSize: 37,
    fontWeight:'800',
    backgroundColor:'transparent',
    color: '#FFBD59',
  },

  fondResto:{
    marginTop: 30,
    width: 1101,
    height: 290
  },
  PODandInfoContainer:{
    flex:1,
    flexDirection:'row',
  
  },
  PODContainer:{
    flex: 3,
    backgroundColor:'#2C2F33',
    alignItems:'center',
    justifyContent:'center',
  },
  infoContainer:{
    flex: 6,
    backgroundColor:'#2C2F33',
    alignItems:'center',
    justifyContent:'center',
  },
  plateOfDay:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#3E434C',
    width:200,
    height:250,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 9,
  },
  info:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#3E434C',
    width:600,
    height:250,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 9,
  },
  titlePODinfo:{
    marginBottom : 20,
    fontSize: 22,
    fontWeight:'800',
    color: '#FFBD59',
  },
  txtPDOinfo:{
    flexWrap: 'wrap',
    color:'#FFFFFF',
    fontWeight:'bold'
  },
  modifIcon: {
    position:'absolute',
    top:5,
    right: 10,
    fontSize: 25,
    color: '#898886'
  },
})