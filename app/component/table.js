import * as React from 'react';
import { StyleSheet, View} from 'react-native'
import { Link } from 'expo-router'
import {url} from "./localtunnel" 
import axios from 'axios';

export default function server() {
const [tables, setTables] = React.useState();
const apiUrl = url + "/api/table"

React.useEffect(()=>{
  axios.get(apiUrl)
  .then(response => {
    const table = response.data;
    setTables(table)
    table.map((table) =>{
      console.log(table.numero)
    } )
  })
  .catch(error=>{
    console.log('error')
  })
}, [])
return (
    <View style={styles.plate}>
        <View style={styles.plate1}>
            {tables && tables.map((table) =>
            (
            <View style={styles.allTable}>
            <Link href='/aperitif' style={styles.plateName}> Table {table?.numero}</Link>
            </View>
            ))}
            
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
  plate:{
    flex:1,
    flexDirection:'row'
  },
  plate1:{
    flex:1,
    alignItems:'center'
   
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
  },
  allTable:{
    marginTop: 40,
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
  }
})