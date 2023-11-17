import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Logo from '../assets/MenuManagerLogo.png'
import { PaperProvider } from 'react-native-paper'
import {url} from "./component/localtunnel" 
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function index() {
    const [username, onChangeusername] = React.useState('')
    const [password, onChangePassword] = React.useState('')
        
    const loginUser = async () => {
       
       const apiUrl = url + '/api/login';

       try{
        
        const response = await axios.post(apiUrl, {
            username: username,
            password: password,
        });

        const responData = response.data.token;

        await AsyncStorage.setItem('authToken', responData);
        router.replace('/home')
       
       } catch (error){
            console.error('Erreur de lors de la connexion', error)
       }
       
    }

  return (
    <PaperProvider>
        <View style = {styles.container}>
            <View style = {styles.viewLogo}>
                <Image source={Logo}/>
            </View>
            <Text style = {styles.label}> Nom d'utilisateur </Text>
            <TextInput 
                style={styles.input}
                onChangeText={(text) => onChangeusername(text)}
                value={username}
            />
            
            <Text style = {styles.label}> Mot de passe </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text)=>onChangePassword(text)}
                value={password}
            />
            <Pressable style = {styles.button} onPress={loginUser}>
                <Text style = {styles.buttonTxt}>Connexion</Text>
            </Pressable>
            
        </View>
    </PaperProvider> 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2F33',
        alignItems: 'center',
      },

    input: {
        width: 400,
        height: 40,
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
    label: {  
        color: '#ffffff',
        fontWeight : 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
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