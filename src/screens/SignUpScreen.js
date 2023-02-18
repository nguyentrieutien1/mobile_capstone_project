import {Text} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {colors} from '../global/styles';
import {Input} from '@rneui/themed';
import HeaderComponent from '../components/HeaderComponent';
import {sizes} from '../global/size';
import {fonts} from '../global/font';
import {ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <ScrollView>
        <View style={{zIndex: 1}}>
          <HeaderComponent title="SignUp" navigation={navigation} />
        </View>

        <View>
          <Text style={styles.title_login}>Register Account</Text>
          <View style={styles.input_login}>
            {/* USERNAME */}
            <Text style={styles.lable_auth}>Username</Text>
            <Input
              placeholder="tiendzok111"
              leftIcon={{
                type: 'font-awesome-5',
                name: 'signature',
                color: 'white',
              }}
              style={styles.input_login_detail}
              errorStyle={{color: 'red'}}
              errorMessage=""
              inputStyle={styles.input_login_detail}
            />
          </View>
          <View style={styles.input_login}>
            {/* EMAIL */}
            <Text style={styles.lable_auth}>Email</Text>
            <Input
              style={styles.input_login_detail}
              placeholder="thudungngungoc@gmail.com"
              leftIcon={{
                type: 'font-awesome',
                name: 'envelope-open',
                color: 'white',
              }}
              rightIcon={{
                type: 'font-awesome',
                name: 'visibility',
                color: 'white',
              }}
              secureTextEntry={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              errorProps={false}
              inputStyle={styles.input_login_detail}
            />
          </View>
          <View style={styles.input_login}>
            {/* ADDRESS */}
            <Text style={styles.lable_auth}>Address</Text>
            <Input
              style={styles.input_login_detail}
              placeholder="******"
              leftIcon={{
                type: 'font-awesome',
                name: 'address-card',
                color: 'white',
              }}
              rightIcon={{
                type: 'font-awesome',
                name: 'visibility',
                color: 'white',
              }}
              secureTextEntry={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              errorProps={false}
              inputStyle={styles.input_login_detail}
            />
          </View>
          <View style={styles.input_login}>
            {/* PHONE NUMBER */}
            <Text style={styles.lable_auth}>Phone Number</Text>
            <Input
              style={styles.input_login_detail}
              placeholder="0866037302"
              leftIcon={{
                type: 'font-awesome',
                name: 'phone',
                color: 'white',
              }}
              secureTextEntry={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              errorProps={false}
              inputStyle={styles.input_login_detail}
            />
          </View>
          <View style={styles.input_login}>
            {/* SEX */}
            <Text style={styles.lable_auth}>Sex</Text>
            <Picker
              //   selectedValue={selectedValue}
              style={{height: 50, color: colors.baseText}}
              //   onValueChange={(itemValue, itemIndex) =>
              //     setSelectedValue(itemValue)
              //   }
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <View style={styles.input_login}>
            {/* PASSWORD */}
            <Text style={styles.lable_auth}>Password</Text>
            <Input
              style={styles.input_login_detail}
              placeholder="thudungngungoc@gmail.com"
              leftIcon={{
                type: 'font-awesome',
                name: 'key',
                color: 'white',
              }}
              rightIcon={{
                type: 'font-awesome',
                name: 'visibility',
                color: 'white',
              }}
              secureTextEntry={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              errorProps={false}
              inputStyle={styles.input_login_detail}
            />
          </View>
          <View style={styles.input_login}>
            {/* RE-PASSWORD */}
            <Text style={styles.lable_auth}>Re-Password</Text>
            <Input
              style={styles.input_login_detail}
              placeholder="thudungngungoc@gmail.com"
              leftIcon={{
                type: 'font-awesome',
                name: 'key',
                color: 'white',
              }}
              rightIcon={{
                type: 'font-awesome',
                name: 'visibility',
                color: 'white',
              }}
              secureTextEntry={true}
              errorStyle={{color: 'red'}}
              errorMessage=""
              errorProps={false}
              inputStyle={styles.input_login_detail}
            />
          </View>
        </View>
        <Text onPress={() => alert(123)} style={styles.lable_auth}>
          Are you have an account ? let sign right now !
        </Text>
        <TouchableHighlight
          underlayColor={colors.mainColor}
          onPress={() => alert('Nguyen Thanh Tung')}
          style={styles.login_btn}>
          <Text style={styles.login_text}>SignUp</Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    position: 'relative',
    padding: sizes.padding,
  },
  view1: {
    position: 'absolute',
    left: '95.76%',
    right: '-90%',
    top: '-24.41%',
    bottom: '-10%',
    backgroundColor: colors.secondColor,
    transform: 'rotate(20deg)',
    borderRadius: 100,
  },
  view2: {
    position: 'absolute',
    right: '95.76%',
    left: '-50%',
    bottom: '-10.41%',
    top: '-10%',
    backgroundColor: colors.secondColor,
    transform: 'rotate(25deg)',
    borderRadius: 100,
  },
  lable_auth: {
    color: colors.lableAuth,
  },
  title_login: {
    fontSize: 28,
    marginTop: 30,
    marginBottom: 30,
    color: colors.baseText,
    fontFamily: fonts.text,
  },
  input_login_detail: {
    color: colors.baseText,
  },
  login_btn: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.baseText,
    padding: sizes.padding,
    borderRadius: sizes.borderButton,
  },
  login_text: {
    textAlign: 'center',
    color: colors.secondColor,
    fontSize: 18,
    fontFamily: fonts.text,
  },
  social_btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.baseText,
    borderRadius: sizes.borderButton,
    marginTop: 10,
    padding: sizes.padding,
  },
  social_text: {
    color: colors.secondColor,
    position: 'absolute',
    left: '45%',
    width: 65,
    textAlign: 'center',
    fontFamily: fonts.text,
  },
});
