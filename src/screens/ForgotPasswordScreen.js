import {Text} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {colors} from '../global/styles';
import {Input} from '@rneui/themed';
import HeaderComponent from '../components/HeaderComponent';
import {sizes} from '../global/size';
import {Icon} from '@rneui/base';
import {fonts} from '../global/font';
export default function ForgotPasswordScreen({navigation}) {
  const {navigate} = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{zIndex: 1}}>
        <HeaderComponent title="Forgot Password" navigation={navigation} />
      </View>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View>
        <Text style={styles.title_login}>
          Have you forgotten your password?
        </Text>
        <View style={styles.input_login}>
          <Text style={styles.lable_auth}>Email</Text>
          <Input
            placeholder="thudungngungoc@gmail.com"
            leftIcon={{type: 'material', name: 'email', color: 'white'}}
            style={styles.input_login_detail}
            errorStyle={{color: 'red'}}
            errorMessage=""
            inputStyle={styles.input_login_detail}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text onPress={() => navigate('SignIn')} style={styles.lable_auth}>
          SignIn
        </Text>
        <Text onPress={() => navigate('SignUp')} style={styles.lable_auth}>
          SignUp
        </Text>
      </View>
      <TouchableHighlight
        underlayColor={colors.mainColor}
        onPress={() => alert('Nguyen Thanh Tung')}
        style={styles.login_btn}>
        <Text style={styles.login_text}>Submit</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    padding: sizes.padding,
    justifyContent: 'center',
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
