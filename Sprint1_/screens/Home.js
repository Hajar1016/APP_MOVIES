import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet,Image ,Text, StatusBar } from 'react-native';
import myImage from '../assets/film.jpg'

import myImage2 from '../assets/logo.png'
const liste1= [
  {
    id: '1',
   uri: myImage2,
  },
   {
    id: '2',
   uri: myImage2,
  },
    {
    id: '3',
   uri: myImage2,
  },
    {
    id: '4',
   uri: myImage2,
  },
    {
    id: '5',
   uri: myImage2,
  },
    {
    id: '6',
   uri: myImage2,
  },
];


const liste2 = [

  {
    id: '1',
   uri: myImage,
  },
   {
    id: '2',
   uri: myImage,
  },
    {
    id: '3',
   uri: myImage,
  },
    {
    id: '4',
   uri: myImage,
  },
    {
    id: '5',
   uri: myImage,
  },
    {
    id: '6',
   uri: myImage,
  },
];


const FlatListFilm = ({list}) => {

return(
 <FlatList
      horizontal
    
  showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item }) =>
         <View  style={styles.container}>        <Image
        source={item.uri}
 style={styles.itemPhoto}
       
        resizeMode="cover"
  

      />
      </View>
     
        }
     
        keyExtractor={item => item.id}
      />

)
}


const allList=[

{
 category:'Comedie',
 list:liste2
},
{
  category:'Horreur',
 list:liste1
},
{
  category:'Romance',
 list:liste2
},
{
  category:'Action',
 list:liste1
},
{
  category:'Action',
 list:liste1
},
{
  category:'Action',
 list:liste1
},
{
  category:'Action',
 list:liste1
},
]



const App = () => {


  return (
  <View style={ {backgroundColor:'black'}} >


 <FlatList
     
    
 
        data={allList}
        renderItem={({ item }) =>
              
       <View>
    
<FlatList
     
    
 
        data={allList}
        renderItem={({ item }) =>
              
       <View>
 
       <Text style={styles.title}> {item.category} </Text>
  <FlatListFilm  list={item.list}/>
     </View>
        }
     
        keyExtractor={item => item.category}
      />
   
     </View>
        }
     
        keyExtractor={item => item.category}
      />




    </View>    
    
  )}




/*

 
       */





const styles = StyleSheet.create({

container:
 {

 marginRight:20,
  marginTop:'10%',

   height:250,

 },
 itemPhoto :
 {
marginBottom:10,
  height:200,
  width:120, 
  borderRadius:15,


 },
 title:
 
 {
 color:'white',
 fontSize:30,
 fontFamily:"Algerian",


 },
});

export default App;