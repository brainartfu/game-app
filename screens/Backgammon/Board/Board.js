/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, BackHandler, Text } from 'react-native';
import { Button, Dialog, Portal, Provider } from 'react-native-paper';

import Status from '../Status/Status';
import Panel from '../Panel/Panel';
import Menu from '../Menu/Menu';

import dynamicStyle from './style';

const Board = ({ navigation }) => {

  const backAction = () => {
    setVisible(true);
  }

  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);

  BackHandler.addEventListener(
    "hardwareBackPress", backAction
  )
  const styles = dynamicStyle();

  return (
    <Provider>
      <View style={ styles.container }>
        <View style={styles.view}>
          <View>
            <Status />
          </View>
          <View>
            <Panel />
          </View>
          <View>
            <Menu />
          </View>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.alert}>
          <Dialog.Content>
            <Text style={styles.info}>Are you sure you want to quit the game?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button textColor='white' onPress={() => setVisible(false)}>Cancel</Button>
            <Button textColor='white' onPress={() => navigation.navigate('GameHome')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>  
  );
};

export default Board;
