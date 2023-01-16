/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, BackHandler, Alert} from 'react-native';
import { Button, Dialog, Portal, Provider } from 'react-native-paper';
import GameModal from './Modal/Modal';

const Home = ({ navigation }) => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit game?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [visible, setVisible] = useState(false);
  const [modalShow, setShow] = useState(false);

  const hideDialog = () => setVisible(false);
  const hideModal = () => setShow(false);
  const startGame = () => navigation.navigate('Board');

  return (
    <Provider>
      <View style={ styles.container }>
        <View style={styles.header}>
          <Image source={require('../img/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.content}>
          <Button 
            mode='contained' 
            style={styles.btn}
            onPress={() => setVisible(true)}
          >
            LOCAL GAME
          </Button>
          <Button mode='contained' style={styles.btn} onPress={() => setShow(true)}>
            ONLINE GAME
          </Button>
          <Button mode='contained' style={styles.btn}>
            OPTION
          </Button>
          <Button mode='contained' style={styles.btn}>
            HOW TO PLAY
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.alert}>
          <Dialog.Content>
            <Text style={styles.info}>Would you like to start game from first?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button textColor='white' onPress={() => setVisible(false)}>Cancel</Button>
            <Button textColor='white' buttonColor='#26150d' mode='contained' onPress={() => navigation.navigate('Board')}>New Game</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <GameModal visible={modalShow} hide={hideModal} navigate={startGame} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
  content: {
    flex: 2,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    margin: 10,
    width: 350,
    fontSize: 30,
    fontWeight: 900,    
  },
  alert: {
    width: 400,
    marginHorizontal: '25.5%',
    backgroundColor: '#8e603e'
  },
  info: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Home;
