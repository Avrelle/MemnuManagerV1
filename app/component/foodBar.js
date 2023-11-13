import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import {url} from "./localtunnel" 
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 



export default function foodBar() {
const [items, setItems] = React.useState([]);
const apiUrl = url + "/api/categories"

React.useEffect(()=>{
  axios.get(apiUrl)
  .then(response => {
    const test = response.data['hydra:member'];
    setItems(test)
    //console.log(items[0].name)
  })
  .catch(error=>{
    console.log('error')
  })
}, [])

  return (
    <View style={styles.container2}>
    {items.length > 0 ? (
      <View style={styles.foodName}>
        <Pressable>
         <Link href={'/aperitif'}>
          <View key={items[1].id}>
          <FontAwesome5 name="glass-martini-alt" style={styles.iconFood}/>
            <Text style={styles.titleFoodName}>{items[1].name}</Text>
          </View>
          </Link> 
        </Pressable>  
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
        </View>
        <Pressable>
          <Link href={'/drink'}>
            <View key={items[0].id}>
            <FontAwesome5 name="wine-glass-alt" style={styles.iconFood}/>
              <Text style={styles.titleFoodName}>{items[0].name}</Text>
            </View>
          </Link> 
        </Pressable> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
        </View>
        <Pressable>
          <Link href={'/plate'}>
            <View key={items[2].id}>
              <MaterialCommunityIcons name="bowl-mix-outline" style={{ alignItems:'center',marginTop:50,fontSize:40, color:"#898886"}}/>
              <Text style={styles.titleFoodName}>{items[2].name}</Text>
            </View>
          </Link> 
        </Pressable> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
        </View>
        <Pressable>
          <Link href={'/dessert'}>
            <View key={items[3].id}>
              <MaterialIcons name="icecream" style={styles.iconFood}/>
              <Text style={styles.titleFoodName}>{items[3].name}</Text>
            </View>
          </Link> 
        </Pressable> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
        </View>
        <Pressable>
          <Link href={'/menu'}>
            <View key={items[4].id}>
              <MaterialIcons name="menu-book" style={{alignItems:'center',marginTop:50,fontSize:40, color:"#898886"}} />
              <Text style={styles.titleFoodName}>{items[4].name}</Text>
            </View>
          </Link> 
        </Pressable> 
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
        </View>
      </View>
      
        ) : (
        <Text></Text>
        )}
    </View> 
    
  );
}


const styles = StyleSheet.create({

container2: {
  flex:3,
  backgroundColor:'#2C2F33', 
  alignItems:'center',
    
}, 
foodName:{
  flex:1,
  alignItems:'center'
},
iconFood:{
  alignItems:'center',
  marginTop:50,
  fontSize:40, 
  color:"#898886",
  marginLeft:10
},
titleFoodName:{
  alignItems:'center',
  color:'#898886'
}
})