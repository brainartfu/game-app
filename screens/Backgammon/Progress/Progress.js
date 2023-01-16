/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBar = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    animate();
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
    // setTimeout(() => {
    //   navigation.navigate('GameHome');
    // }, 6500);
  };

  return (
    <View style={styles.container}>
      <Progress.Circle 
        size={100} 
        progress={progress}
        showsText={true}
        strokeCap='square'
        textStyle={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProgressBar;
