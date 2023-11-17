import * as React from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, Pressable } from 'react-native'
import { Modal, PaperProvider, Portal} from 'react-native-paper'
import Sidebar from './component/sidebar'
import { SelectList } from 'react-native-dropdown-select-list'
import { Link } from 'expo-router';
import FoodBar from './component/foodBar';
import {url} from "./component/localtunnel" 
import axios from 'axios';
import Order from './component/order';


export default function server() {
const [plates, setPlates] = React.useState();
const apiUrl = url + "/api/plate/categorie/4"
React.useEffect(()=>{
  axios.get(apiUrl)
  .then(response => {
    const plate = response.data;
    setPlates(plate)
  })
  .catch(error=>{
    console.log('error')
  })
}, [])

const saveMainDish = async(idPlate) => {
  const apiUrl = url + 'api/order/plate'
  const response = await axios.post(apiUrl, {
    id: JSON.stringify(idPlate),
  });

  console.log(idPlate)
}

const [visible, setVisible] = React.useState(false);
const [selectedItem, setSelectedItem] = React.useState(null);

const showModal = (item) => {
  setSelectedItem(item);
  setVisible(true);
};
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
      <Text style = {{color:'white',fontWeight:'bold', marginTop:20}}>fzeds</Text>
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
              <Link href="commande" style = {styles.buttonTxt}>Ajouter à la note</Link>
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
            <Text style={styles.titleCategory}>Plats</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 0.9, height: 1 , backgroundColor: 'white', marginBottom: 35}} />
            </View>
            <View style={styles.plate}>
            {plates && plates.map((plate) => 
            (
              <View style={styles.plate1} key={plate.id}>
                  <Pressable  onPress={() => saveMainDish(plate?.id)}>
                      <View style={styles.allplateCate}>
                          <Text style={styles.plateName}>
                          {plate?.name}
                          </Text>
                      </View>
                  </Pressable>
              </View>
            ))}
            </View>

            

        </View> 
        <View style={styles.container4}>
          <Text style={styles.titleTable}> Commande </Text>  
          <Order/>
              
         
      </View> 
    </View> 
</PaperProvider>    
  );
}


const styles = StyleSheet.create({

  container: {
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
    backgroundColor:'red', 
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
    flexDirection:'row',
    backgroundColor:'green',
    padding:20,
    flexWrap:'wrap',
    width: "100%",
   
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
},
orderContainer:{
    marginTop:20,
    backgroundColor:'#3E434C',
    width:'90%',
    height:'87%',
    borderRadius: 30,
    flexDirection:'column',
},
tableContainer:{
    flexDirection:'row',
    width:'100%',
    height: 50

},
tableTitlePrice:{
    flex:1,
    flexDirection:'row',
  

},
tableTitle:{
 flex:1,
  alignItems:'center',
  justifyContent:'center',
},
tablePrice:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',

},
inProgressOrder:{
  flex:3,
  alignItems:'center',
  
},
timerFood:{
  marginTop:20
},

waitOrder:{
  flex:6,
  alignItems:'center',
 
},
commentContainer:{
  flex:5,
  alignItems:'center',

},
comment:{
  marginTop: 20,
  width: 400,
  height: 120,
  margin: 12,
  padding: 10,
  backgroundColor : '#4F5560',
  borderRadius: 20,
  marginBottom: 30,
  color: '#ffffff',
  shadowColor: 'black',
  shadowOffset: {width: 6, height: 6},
  shadowOpacity: 0.5,
  shadowRadius: 9,
},
doubleButton:{
  flexDirection:'row',
  width: '100%',
  height: '15%'
},
cookButton:{
  flex:1,
  alignItems:'center'
},
buyButton:{
  flex:1,
  alignItems:'center'
},
button: {
  alignItems: 'center',
  width: 150,
  height: 35,
  margin: 12,
  padding: 10,
  backgroundColor : '#FFBD59',
  borderRadius: 20,
  marginBottom: 30,
  color: '#ffffff',
  fontWeight : 'bold',
  shadowColor: 'black',
  shadowOffset: {width: 3, height: 3},
  shadowOpacity: 0.5,
  shadowRadius: 9,
  marginBottom: 30
},
buttonTxt:{
  color: '#ffffff',
  fontWeight : 'bold'
}

})