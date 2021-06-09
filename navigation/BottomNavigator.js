//All about the bottom tab navigator, its icons, and what links to which page
import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

//screens added by myself

import ProfileScreen from '../screens/ProfileScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen'

//screens from john

import CanteenScreen from '../IntegrationTestScreens/CanteenScreen';
import ShopScreen from '../IntegrationTestScreens/ShopScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0.5,
          elevation: 0,
        },
        showLabel: true,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="ค้นหาอาหาร"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="restaurant-menu" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ประวัติการสั่ง"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="menu-book" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="ร้านโปรด"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="บัญชี"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigator;

{/*

<Tab.Screen
        name="testcart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
      name="testShopScreen"
      component={ShopScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Icon name="person" color={color} size={28} />
        ),
      }}
    />

*/}