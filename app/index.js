import { StyleSheet, Text, View, Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Logo from '../assets/MenuManagerLogo.png'
import { PaperProvider } from 'react-native-paper'

export default function index() {
    const [username, onChangeusername] = React.useState('')
    const [password, onChangePassword] = React.useState('')
  return (
    <PaperProvider>
        <View style = {styles.container}>
            <View style = {styles.viewLogo}>
                <Image source={Logo}/>
            </View>
            <Text style = {styles.label}> Nom d'utilisateur </Text>
            <TextInput 
                style={styles.input}
                onChangeText={onChangeusername}
                value={username}
            />
            
            <Text style = {styles.label}> Mot de passe </Text>
            <TextInput 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                value={password}
            />
            <Link href={"/home"}>HOME</Link>
            <Link href={"/component/sidebar"}>sidebar</Link>
            <Pressable style = {styles.button}>
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
        marginTop: 20
    },
    buttonTxt:{
        color: '#ffffff',
        fontWeight : 'bold'
    }
        
})