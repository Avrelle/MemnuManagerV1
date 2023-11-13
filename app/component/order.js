import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native'

export default function order () {
    return( 
        <View style={styles.orderContainer}>
            <View style={styles.tableTitlePrice}>
            <View style={styles.tableTitle}>
                <Text style={{color:'white', fontWeight:'bold'}}> Table n° 1</Text>
            </View>  
            <View style={styles.tablePrice}>
                <Text style={{color:'white', fontWeight:'bold'}}> Totale : 6.90€</Text>
            </View>
            </View>
            <View style={styles.inProgressOrder}>  
                <Text style={{color:'white', fontWeight:'bold'}}> En cour</Text>              
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
                </View>
                <View style={styles.timerFood}>
                    <Text style={{color:'green'}}>Timer</Text>
                    <Text style={{color:'white'}}>order</Text>
                    <Text style={{color:'white'}}>order</Text>
                </View>  
            </View>   
            <View style={styles.waitOrder}>
                <Text style={{color:'white', fontWeight:'bold'}}> En attente</Text>              
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
                </View>
            </View>
            <View style={styles.commentContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 0.9, height: 1 , backgroundColor: 'white'}} />
                </View>
                <TextInput style={styles.comment} placeholder='Commentaire'></TextInput> 
                <View style={styles.doubleButton}>
                    <View style={styles.cookButton}>
                        <Pressable style = {styles.button}>
                            <Text style = {styles.buttonTxt}>En cuisine</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buyButton}>
                        <Pressable style = {styles.button}>
                            <Text style = {styles.buttonTxt}>Payer</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

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
  },
  titleTable:{
    marginTop: 30,
    fontWeight : 'bold',
    color:'white',
    fontSize: 20
  },
  
  })