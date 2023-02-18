import {Text} from '@rneui/base';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {colors} from '../global/styles';
import {sizes} from '../global/size';
import {fonts} from '../global/font';
import {allQuestion} from '../data/quiz';

export default function QuizScreen({navigation}) {
  const [count, setCount] = useState(3);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setCount(0);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent navigation={navigation} title="Quiz Select" />
        <Text style={styles.quiz_title}>
          Please select quiz to receive best our the recommend
        </Text>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* VIEW QUESTION AREA */}
          <View>
            <View>
              <Text style={{textAlign: 'center', color: colors.baseText}}>{`${
                count + 1
              }/${allQuestion?.length}`}</Text>
              <Text style={styles.question_text}>
                {`${count + 1}.${allQuestion[0]?.question}`}
              </Text>
              <View style={styles.quiz_list}>
                {allQuestion[count]?.answer?.map((answer, index) => {
                  return (
                    <View style={styles.quiz_item} key={index}>
                      <TouchableHighlight>
                        <Text style={styles.text_quiz_item}>
                          {answer?.data}
                        </Text>
                      </TouchableHighlight>
                    </View>
                  );
                })}
              </View>
            </View>
            <TouchableHighlight style={styles.submit_btn}>
              <Text>Next question</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    padding: sizes.padding,
  },
  quiz_title: {
    color: colors.baseText,
    fontSize: 20,
    marginVertical: 20,
    fontFamily: fonts.text,
  },
  quiz_list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.baseText,
    paddingVertical: 30,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  quiz_item: {
    margin: 10,
    width: '44%',
    backgroundColor: colors.mainColor,
    height: 120,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.baseText,
  },
  text_quiz_item: {
    color: colors.baseText,
    textAlign: 'center',
    width: 100,
  },
  question_text: {
    color: colors.baseText,
    marginVertical: 20,
  },
});
