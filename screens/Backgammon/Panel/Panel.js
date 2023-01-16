/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text } from 'react-native';
import dynamicStyle from './style';

const Panel = () => {

  const styles = dynamicStyle();

  return (
    <View style={ styles.container }>
      <View style={styles.gameBoard}>
        <Image source={require('../../img/panel.png')} style={styles.panel} />
      </View>
    </View>
  );
};

export default Panel;
