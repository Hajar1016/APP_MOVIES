import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';
//cette page c la page qui affiche la description du film 
import { globalStyles } from '../styles/globalStyle';
export default function Detail({navigation, route}) {
     const {rating} = route.params;
  return (
    <View style={globalStyles.container}>
       <Text> description du film </Text>

     
    </View>
  );
}