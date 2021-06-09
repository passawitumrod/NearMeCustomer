import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
window.apiurl = "https://nearme-kmitl.herokuapp.com/"

//screens
import BottomNavigator from './src/navigation/BottomNavigator';

//screens that I add while doing store side
import ProfileScreen from './src/screens/ProfileScreen';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

//screens that I add while doing customer side
import SelectStoreScreen from './src/screens/SelectStoreScreen';
import SelectMenuScreen from './src/screens/SelectMenuScreen';
import OrderHistoryScreen from './src/screens/OrderDetailsScreen';
import HistoryDetailsScreen from './src/screens/OrderDetailsScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CartScreen from './src/screens/CartScreen';

//screens from john
import CanteenScreen from './src/screens/CanteenScreen';
import ShopScreen from './src/screens/ShopScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        
        <Stack.Screen name="SelectStoreScreen" component={SelectStoreScreen}/>
        <Stack.Screen name="SelectMenuScreen" component={SelectMenuScreen}/>
        <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen}/>
        <Stack.Screen name="HistoryDetailsScreen" component={HistoryDetailsScreen}/>
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen}/>

        <Stack.Screen name="CanteenScreen" component={CanteenScreen}/>
        <Stack.Screen name="ShopScreen" component={ShopScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
