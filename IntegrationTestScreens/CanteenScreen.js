
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, View} from 'react-native';

import { useState, useEffect } from "react";
//import TabNavigator from '../navigations/BottomNavigation';

const CanteenScreen = ({navigation}) => {

  const apiUrl = window.apiurl + 'api/markets/markets/marketchain/1/';

  const [Canteens, setCanteens] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  setCanteens(data);
  console.log(data);
  }

  function CanteenID(id)
  {
    console.log(id)
  }

  //<Image source={canteen.main_image} width="100" height="100"/> cannot fetch this image for some reason

  const MenuDetail = ({canteen}) => {
    return (
      <View style={styles.background}>
        
        <Text style={styles.titlestyle}>{canteen.name}</Text>
        <Text style={styles.locationstyle}>ตึกพระเทพ</Text>
      </View>
    )
  }

/*
  const canteens = [
    { name: 'Canteen A', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Near by HM building', goto: 'Shop' },
    { name: 'Canteen L', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Near by ECC building', goto: 'Shop' },
    { name: 'Phrathep canteen', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Phrathep building', goto: 'Shop' },
    { name: 'Phrathep canteen', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Phrathep building', goto: 'Shop' },
    { name: 'Phrathep canteen', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Phrathep building', goto: 'Shop' },
    { name: 'Phrathep canteen', canteenimg: require('../../assets/menu/FriedRice.jpg'), location:'Phrathep building', goto: 'Shop' }
  ];
  */

  return (
    <View>
        <Text style = {styles.Header}>โรงอาหารและศูนย์อาหาร</Text>
        <FlatList
          data={Canteens}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {navigation.navigate('Shop', {canteenid: item.id}); CanteenID(item.id);}}>
              <MenuDetail canteen={item}/>
              </TouchableOpacity>
            );
          }}
        />
    </View> 
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 15,
    top: 10,
    paddingBottom: 15
  },
  top: {
    flexDirection: 'row'
  },
  bg: {
    backgroundColor: 'white'
  },
  titlestyle: {
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    fontWeight: "bold"

  },
  locationstyle: {
    fontSize: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingRight: 10

  },
  image: {
    width: 100,
    height: 100
  },
  background: {
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    marginHorizontal: 15,
    height: 100,
    margin: 10,
    flexDirection: 'row',
  }
});

export default CanteenScreen;