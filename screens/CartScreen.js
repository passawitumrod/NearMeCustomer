import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import foods from '../consts/foods';
import {PrimaryButton} from '../components/Button';

const CartScreen = ({navigation}) => {
  
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80, borderRadius: 15}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.price}บาท</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>จำนวน 3</Text>
          
          <View style={{flexDirection: 'row', marginTop: 5}}>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
          </View>
          <Text>{' '}</Text>
          <View style={style.actionBtn}>
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
          </View>


        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>กลับไปหน้าเลือกอาหาร</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                ร้านป้าตามสั่ง
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.primary}}>โรงพระเทพ</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                ราคาทั้งหมด
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.primary}}>225 บาท</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
                marginBottom: 30,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                จัดส่งที่
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.primary}}>ตึก ECC ชั้น 6 ห้อง 603</Text>
            </View>
            <View style={{marginHorizontal: 30, marginTop: 0}}>
              <PrimaryButton title="ยืนยันการสั่งซื้อ" onPress={() => navigation.navigate('Home')}/>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 35,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;

