import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import SellScreen from './Sell';
import DonateScreen from './Donate';
import AdminHome from './AdminHome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Sell" component={SellScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;