import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Products from '../Screens/Products';
import ProductDetails from '../Screens/ProductDetail';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
        <Stack.Screen options={{title:'Products'}} name="Products" component={Products} />
        <Stack.Screen options={{title:'ProductDetails'}} name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;