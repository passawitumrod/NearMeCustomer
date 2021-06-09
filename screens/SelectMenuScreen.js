//STILL BEING DECIDED WHAT TO BE USE FOR, SINCE IT MIGHT REPLACE POS
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import menus from '../consts/menus';

const {width} = Dimensions.get('screen');   //get size of current screen to calculate card width 
const cardWidth = width - 20;               //card width constant when we have 2 cards per row

const TestAPI = 'http://cold-squid-62.loca.lt/media/images/shopOwner/kekw.jpg';
const TestAPI2 = 'http://cold-squid-62.loca.lt/';
const TestAPI3 = 'media/images/shopOwner/kekw.jpg';


const SelectMenuScreen = ({navigation}) => {
  const Card = ({menus}) => {
    return (
      
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('HomeScreen')}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end', top: 20, left:-20 }}>
            <Image source={menus.image} style={{height: 120, width: 120, borderRadius: 15}} />
          </View>
          <View style={{marginHorizontal: 20, marginVertical: -80}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{menus.name}</Text>
            <Text style={{fontSize: 16, color: COLORS.grey, marginTop: 2}}>
              {menus.decorator}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                ราคา :<Text>{' '}</Text>
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.primary}}>
                {menus.price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
        <View style={{flexDirection: 'row', marginTop: 40, }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Near
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary, marginBottom: 20}}>
            Me
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark, marginBottom: 20, marginLeft: 290}}>
          </Text>
        </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>กรุณาเลือกรายการอาหารภายใน</Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.primary}}>
            ร้านป้าตามสั่ง โรงพระเทพ
          </Text>
          <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 0,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="ค้นหาอาหาร"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <View style={style.cartBtn}>
        <Text style={{color: COLORS.white, fontSize: 18}} >ไปที่ตะกร้า</Text>
        <Icon name="shopping-cart" size={28} color={COLORS.white} />
        </View>
        </TouchableOpacity>
      </View>
        </View>
        
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={menus}
        renderItem={({item}) => <Card menus={item} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    height: 160,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cartBtn: {
    width: 140,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addToFavoriteBtn: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 125,
    marginTop: 20,
  },// Margin left is added later
});

export default SelectMenuScreen;











