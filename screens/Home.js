/* eslint-disable prettier/prettier */
import React from 'react';
// import all the components we are going to use
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

import Animated, { BounceInRight, BounceInLeft } from 'react-native-reanimated';

//import AppIntroSlider to use it

const Home = ({navigation}) => {
 
  const RenderNextButton = () => {
    return (
      <View>
        <Text></Text>
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View>
        <Text> </Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <TouchableHighlight style={styles.item} onPress={() => navigation.navigate(`${item.title}`)} >
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 50,
          }}>
          <Animated.View entering={BounceInRight.delay(500).springify()}>
            <Text style={styles.introTitleStyle}>{item.title}</Text>
          </Animated.View>
          <Animated.View entering={BounceInLeft.delay(1000).springify()}>
            <Image
              style={styles.introImageStyle}
              source={item.image} />       
          </Animated.View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
        />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  introImageStyle: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  introTitleStyle: {
    fontSize: 50,
    fontFamily: 'cursive',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    elevation: 3,
  },
});

const slides = [
  {
    key: 's1',
    title: 'Backgammon',
    image: require('./img/slider1.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: '8Ball',
    image: require('./img/slider2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Chess',
    image: require('./img/slider3.png'),
    backgroundColor: '#f6437b',
  },
];