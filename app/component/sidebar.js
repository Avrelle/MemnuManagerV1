import { Text, StyleSheet, View, Pressable } from 'react-native'
import { Link, router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logout = async () => {
  try {
      await AsyncStorage.removeItem('authToken');

      router.replace('/');
  } catch (error) {
      console.error('Error deconnexion', error);
  }
};


export default function sideBar() {
  return (

    <View style={styles.containerSidebar}>
      <Link style={styles.linkPerson}href="/">
        <Ionicons name="person-circle-sharp" style={styles.personIcon}/>
      </Link>
      <Link href="/home">
        <Ionicons name="home" style={styles.homeIcon}/>
      </Link>
      <Link style={styles.linkServer}href="/aperitif">
        <Ionicons name="restaurant" style={styles.serverIcon}/>
      </Link>
      <Link href="/server">
        <Ionicons name="pizza" style={styles.cookIcon}/>
      </Link>
      <Pressable style = {styles.button} onPress={logout}>
        <SimpleLineIcons name="logout" style= {styles.logoutIcon} />
        <Text style = {styles.buttonLogout}>Déconnexion</Text>
      </Pressable>
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
  },
  logoutIcon:{
    fontSize: 40,
    color: '#898886',
    marginLeft:10,
    marginTop:300
  },
  buttonLogout:{
    fontSize:"12px",
    marginTop: 10,
    color: '#898886'
  }

})