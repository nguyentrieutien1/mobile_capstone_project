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
export default function SignInScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{zIndex: 1}}>
        <HeaderComponent title="Login" navigation={navigation} />
      </View>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View>
        <Text style={styles.title_login}>Login To Hotel</Text>
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
        <View style={styles.input_login}>
          <Text style={styles.lable_auth}>Password</Text>
          <Input
            style={styles.input_login_detail}
            placeholder="thudungngungoc@gmail.com"
            leftIcon={{
              type: 'material',
              name: 'person',
              color: 'white',
            }}
            rightIcon={{
              type: 'material',
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
        Forgot Password
      </Text>
      <TouchableHighlight
        underlayColor={colors.mainColor}
        onPress={() => alert('Nguyen Thanh Tung')}
        style={styles.login_btn}>
        <Text style={styles.login_text}>Login</Text>
      </TouchableHighlight>
      <Text style={{textAlign: 'center', color: colors.baseText}}>Or</Text>
      <TouchableHighlight>
        <View style={styles.social_btn}>
          <Icon name="facebook" color={colors.secondColor} />
          <Text style={styles.social_text}>Facebook</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.social_btn}>
          <Icon type="font-awesome" name="google" color={colors.secondColor} />
          <Text style={styles.social_text}>Google</Text>
        </View>
      </TouchableHighlight>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 1,
            width: 200,
            backgroundColor: colors.baseText,
            marginVertical: 20,
          }}></View>
      </View>
      <Text
        style={{
          color: colors.baseText,
          letterSpacing: 1,
          textAlign: 'center',
          lineHeight: 23,
        }}>
        Everything you need to know, all in one place. HOW WE WORK. Terms of
        Service. Terms you agree to when you use Facebook. Privacy Policy.
        Service. Terms you agree to when you use Facebook. Privacy Policy,
        <Text style={{color: 'blue'}}> Learn More !</Text>
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
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
