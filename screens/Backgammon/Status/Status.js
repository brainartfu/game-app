/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text } from 'react-native';
import dynamicStyle from './style';

const Status = () => {

  const styles = dynamicStyle();

  return (
    <View style={ styles.container }>
      <View style={styles.other}>
        <Image source={require('../../img/other.png')} style={styles.avatar} />
        <Text style={styles.text}>Marshal</Text>
        <Text style={styles.text}>Soccer</Text>
        <Text style={styles.text}>146</Text>
      </View>
      <View style={styles.state}>
        <Text style={styles.text}>Match To</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>Game</Text>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.you}>
        <Image source={require('../../img/you.png')} style={styles.avatar} />
        <Text style={styles.text}>Richard</Text>
        <Text style={styles.text}>Soccer</Text>
        <Text style={styles.text}>186</Text>
      </View>
    </View>
  );
};

export default Status;
