/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import { Modal, Portal, Text, Button } from 'react-native-paper';

import dynamicStyle from './style';

const GameModal = (props) => {

  const styles = dynamicStyle();

  return (
      <Portal>
        <Modal visible={props.visible} onDismiss={props.hide} style={styles.modal}>
          <Text style={styles.header}>ONLINE PLAY</Text>
          <View style={styles.imgDiv}>
            <View style={styles.box}>
              <Image source={require('../../img/you.png')} style={styles.img} />
              <Text style={styles.text}>Islam</Text> 
            </View>
            <View style={styles.box}>
              <Image source={require('../../img/vs.png')} style={styles.vs} />
            </View>
            <View style={styles.box}>
              <Image source={require('../../img/other.png')} style={styles.img} />
              <Text style={styles.text}>Guest1653</Text> 
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button mode='contained' buttonColor='#26150d' textColor='white' 
              style={styles.start}
              onPress={props.navigate}>
              Start Game
            </Button>
          </View>
        </Modal>
      </Portal>
  );
};

export default GameModal;
