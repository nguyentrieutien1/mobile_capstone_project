import {Text} from '@rneui/base';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {colors} from '../global/styles';
import {sizes} from '../global/size';
import {fonts} from '../global/font';
import {allQuestion} from '../data/quiz';
export default function QuizScreen({navigation}) {
  const [count, setCount] = useState(0);
  const [quizs, setQuizs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef(null);
  const quizRef = useRef(null);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setCount(0);
      setRefreshing(false);
    }, 2000);
  };
  useEffect(() => {
    setQuizs([...allQuestion]);
  }, []);
  const handleSaveQuiz = () => {
    setCount(prevState => ++prevState);
    scrollViewRef.current?.scrollTo({y: 1, animated: true});
  };
  const handleSelectQuiz = index => {
    const isSelected = quizs[count]?.answer[index]['isSelected'];
    if (isSelected) {
      quizs[count]['answer'][index]['isSelected'] = 0;
    } else {
      quizs[count]['answer'][index]['isSelected'] = 1;
    }
    setQuizs([...quizs]);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderComponent navigation={navigation} title="Quiz Select" />
        <Text style={styles.quiz_title}>
          Please select quiz to receive best our the recommend
        </Text>
        <ScrollView
          ref={scrollViewRef}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* VIEW QUESTION AREA */}
          <View>
            <View>
              <Text style={{textAlign: 'center', color: colors.baseText}}>{`${
                count + 1
              }/${quizs?.length}`}</Text>
              <Text style={styles.question_text}>
                {`${count + 1}.${quizs[0]?.question}`}
              </Text>
              {/* MAP QUIZS */}
              <View style={styles.quiz_list}>
                {quizs[count]?.answer?.map((answer, index) => {
                  return (
                    <View
                      ref={quizRef}
                      style={
                        !answer?.isSelected
                          ? styles.quiz_item
                          : styles.quiz_item_false
                      }
                      key={index}>
                      <TouchableHighlight
                        underlayColor={colors.mainColor}
                        style={{
                          width: '100%',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => handleSelectQuiz(index)}>
                        <Text style={styles.text_quiz_item}>
                          {answer?.data}
                        </Text>
                      </TouchableHighlight>
                    </View>
                  );
                })}
                <View style={styles.view_btn}>
                  <TouchableHighlight
                    underlayColor={colors.mainColor}
                    onPress={handleSaveQuiz}
                    style={styles.submit_btn}>
                    <Text style={styles.text_btn}>Next question</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
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
  view_btn: {
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submit_btn: {
    borderWidth: 1,
    borderColor: colors.secondColor,
    borderRadius: sizes.borderButton,
    padding: 15,
    marginVertical: 20,
  },
  text_btn: {
    textAlign: 'center',
    color: colors.secondColor,
  },
  quiz_item_false: {
    margin: 10,
    width: '44%',
    backgroundColor: colors.secondColor,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.baseText,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
