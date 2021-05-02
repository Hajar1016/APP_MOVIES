// In App.js in a new project

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/logIn';
import Header from '../shared/Header'


const Stack = createStackNavigator();

function App({navigation}) {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerStyle:{backgroundColor:'gold' , height:80}, headerTitle: ()=><Header navigation={navigation}
        
        
        
        /> }} />
      </Stack.Navigator>

  );
}

export default App;