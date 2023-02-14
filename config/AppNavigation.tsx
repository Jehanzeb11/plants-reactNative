// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import HomeScreen from '../screens/HomeScreen';
import HomeProducts from '../screens/HomeProducts';
import SingleProduct from '../screens/SingleProduct';
import Cart from '../screens/Cart';
import CheckOut from '../screens/CheckOut';
import Favourites from '../screens/Favourites';
import AllProducts from '../screens/AllProducts';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
            headerShown:false
        }}component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeProducts" options={{
            headerShown:false
        }} component={HomeProducts} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;