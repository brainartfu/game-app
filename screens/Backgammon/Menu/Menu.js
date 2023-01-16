/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Panel = (navigation) => {
  return (
    <View style={ styles.menu }>
      <Text style={styles.icon}>
        <Icon name='chevron-down' size={20} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    width: 30,
    height: 25,
    alignItems: 'center',
    backgroundColor: '#8e603e',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  icon: {
    color: '#26150d',
  },   
});

export default Panel;
