import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import STYLES from '../styles/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PrimaryButton} from '../components/Button';

const SignUpScreen = ({navigation}) => {
  return (
    <View
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40, }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Near
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
            Me
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            ยินดีต้อนรับ
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.dark}}>
            สมัครบัญชี เพื่อเริ่มการใช้งาน
          </Text>
        </View>

        <View style={{marginTop: 20}}>
        <View style={STYLES.inputContainer}>
            <Icon
              name="person"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="ชื่อจริง"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="นามสกุล"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="email"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="อีเมล" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="รหัสผ่าน"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock"
              color={COLORS.dark}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="ยืนยันรหัสผ่าน"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{marginHorizontal: 30 , marginVertical:50}}>
              <PrimaryButton title="สมัครบัญชี" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: -65,
            marginBottom: 0,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            มีบัญชีอยู่แล้ว?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
              เข้าสู่ระบบเลย!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;