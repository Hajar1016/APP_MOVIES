import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import myImage from '../assets/logo.png'
export default function Header({title,navigation}) {



  return (
    <View style={styles.header}> 
      <MaterialIcons name='menu' size={38} onPress={  ()=>{ navigation.openDrawer(); }} style={styles.menu} /> 
     <Image source ={myImage}  style={styles.logo}  />
          <MaterialIcons name='person' size={35}   style={styles.person}  onPress={  ()=>{ navigation.navigate('Login') }} /> 
              <MaterialIcons name='search' size={35}   style={styles.search}  /> 
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
 
   menu : {
    position: 'absolute',
    left: 0,
    opacity:0.9,
    color:'white',
   backgroundColor:'gold',
  }
  ,
person:
{
   position: 'absolute',
    left: '95%',

color:'white',
},

search:
{
   position: 'absolute',
    left: '75%',
color:'white',
},
  logo: {
 

   width:80,

   height:60,

  },
});