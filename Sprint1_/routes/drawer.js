

import * as React from 'react';
import HomeStack from './homeStack';
import AboutStack from './AboutStack';
import LoginStack from './login'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItem,DrawerContentScrollView,DrawerItemList,Linking } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';








function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} forceInset={{ top: 'always}'}}>
      <DrawerItemList {...props} forceInset={{ top: 'always}'}}/>
      <DrawerItem
      icon={() =>  <MaterialIcons name='close' size={28}  onPress={() => props.navigation.closeDrawer()}  />  }
      label=" "

       />
    </DrawerContentScrollView>
  );
}



const Drawer = createDrawerNavigator();


export default function App({navigation}) {
  return (

    <NavigationContainer theme={MyTheme}     >
      <Drawer.Navigator    initialRouteName="Home" drawerContent={props => <CustomDrawerContent  {...props} />}>
 
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Favoris" component={AboutStack} />
      <Drawer.Screen name="Login" component={LoginStack} />    
      </Drawer.Navigator>
    </NavigationContainer>
  
  );




}

const MyTheme = {

 dark: true,

  colors: {
    primary: 'gold',
height:120,
 card: 'rgb(255, 255, 255)',
    text: 'black',
    border: 'grey',
   
  },
};