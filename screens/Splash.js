/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

const Splash = ({ navigation }) => {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2500)
  }, [])

  return (
    <View style={ styles.container }>
      <Animated.View entering={ZoomIn.delay(500)}>
        <Image source={require('./img/1.png')} style={styles.logo} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',      
  },
  logo: {    
    flex: 1,
    width: 350,     
    resizeMode: 'contain',
  },
});

export default Splash;
