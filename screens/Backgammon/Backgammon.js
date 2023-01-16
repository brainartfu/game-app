/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import * as Progress from 'react-native-progress';

const Backgammon = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    animate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    let progress = 0;
    setProgress(progress);
    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setProgress(progress);
      }, 500);
    }, 500);
    setTimeout(() => {
      navigation.navigate('GameHome');
    }, 6500);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/backg.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.loading}>
        <Text style={styles.text}>Loading</Text>
        <Progress.Bar
          style={styles.progress}
          width={350}
          height={10}
          color="white"
          progress={progress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover', // or 'stretch'
  },
  loading: {
    position: 'absolute',
    flex: 1,
    bottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  progress: {
    margin: 10,
  },
});

export default Backgammon;
