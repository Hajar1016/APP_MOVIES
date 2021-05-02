// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Home from '../screens/Home';
import Header from '../shared/Header'

const Stack = createStackNavigator();

function App({navigation}) {
  return (

      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'gold', height:80}, headerTitle: ()=><Header navigation={navigation}
        
        
        
        /> }} />
          <Stack.Screen name="Detail" component={Detail}  options={{headerStyle:{backgroundColor:'gold' , height:80} }}  />
      </Stack.Navigator>

  );
}

export default App;