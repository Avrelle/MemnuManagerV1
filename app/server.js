import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Pressable } from 'react-native'
import { Modal, PaperProvider, Portal} from 'react-native-paper'
import Sidebar from './component/sidebar'
import FoodBar from './component/foodBar';
import { SelectList } from 'react-native-dropdown-select-list'
import { Link } from 'expo-router'
import {url} from "./component/localtunnel" 
import axios from 'axios';





export default function server() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle={backgroundColor: '#3E434C', width:'50%', height:'20%', flex:1, alignItems:'center', justifyContent:'center', alignSelf:'center', borderRadius: 20}
  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]
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
<PaperProvider> 
  <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <View style={styles.modalPlate}>
        <View style={styles.title}>
          <Text style = {{color:'#FFBD59', fontWeight:'bold'}}>Selection : </Text>
          <Text style = {{color:'#FFBD59', fontWeight:'bold', marginTop:20}}>Quantité : </Text>
          <Text style = {{color:'#FFBD59', fontWeight:'bold', marginTop:90}}>Option : </Text>
          <Text style = {{color:'#FFBD59', fontWeight:'bold', marginTop:100}}>Supplément : </Text>
        </View>
        <View style={styles.select}>
        <Text style = {{color:'white',fontWeight:'bold', marginTop:20}}>oizhrgsvdm</Text>
        <SelectList 
        data={data} 
        setSelected={setSelected} 
        boxStyles={{width: '100%',backgroundColor:'#3E434C', marginTop:20}}
        dropdownStyles={{width: '100%'}}
        
        />
        <SelectList 
          data={data} 
          setSelected={setSelected} 
          boxStyles={{width: '100%', marginTop: 40,backgroundColor:'#3E434C'}}
          dropdownStyles={{width: '100%'}}
        
        />
        <SelectList 
          data={data} 
          setSelected={setSelected} 
          boxStyles={{width: '100%', marginTop: 50,backgroundColor:'#3E434C'}}
          dropdownStyles={{width: '100%'}}
        
        />
       </View>
       <Pressable style = {styles.button} onPress={console.log('gezfds')}>
                <Link href='/commande' style = {styles.buttonTxt}>Ajouter à la note</Link>
      </Pressable>
      </View>
      
    
    </Modal>  
  </Portal> 

    <View style={styles.container}>
        <View style={styles.sidebarComponent}>
            <Sidebar/>
        </View>
        <FoodBar/>
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
                  <Pressable onPress={showModal}>
                    <View style={styles.allplateCate}>
                        <Text style={styles.plateName}>Entrecote</Text>
                    </View>
                    </Pressable>
                </View>
                <View style={styles.plate2}>
                    <View style={styles.allplateCate}>
                        <Text style={styles.plateName}>Kobe</Text>  
                    </View>
                </View>
                
            </View>

        </View> 
        <View style={styles.container4}>
          <Text style={styles.titleTable}> Table </Text>  
          <View style={styles.plate}>
            <View style={styles.plate1}>
              {tables && tables.map((table) =>
              (
              <View style={styles.allTable}>
                <Link href='/commande' style={styles.plateName}> Table {table?.numero}</Link>
              </View>
              ))}
              
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
  },
  titleTable:{
    marginTop: 30,
    fontWeight : 'bold',
    color:'white',
    fontSize: 20
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
  },
  modalPlate:{
    flex: 1,
    flexDirection:'row',
    backgroundColor:'#3E434C',
    height:750,
    width:'70%',
    marginTop: 70
  },
  select:{
    flex:3,

  },
  title:{
    flex:3,
    height:'100%',
    marginTop: 20,
    
   
  },
  button: {
    position:'relative',
    top:540,
    right:-70,
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor : '#FFBD59',
    borderRadius: 20,
    marginBottom: 30,
    color: '#ffffff',
    fontWeight : 'bold',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 9,
},
buttonTxt:{
    color: '#ffffff',
    fontWeight : 'bold'
}

})