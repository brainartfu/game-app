/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({ navigation }) => {

  const onLogin = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={ styles.container }>
      <View style={styles.header}>
        <Image source={require('../img/gamelogo.png')} style={styles.logo} />
      </View>
      <View style={styles.text}>
        <Text style={styles.textContent}>
          Don't have account? 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.div}>
        <View>
          <TextInput
            label='Email'
            mode='outlined'
            style={styles.input}
            left={<TextInput.Icon icon='email' />}
          />
        </View>
        <View>
          <TextInput
            label='Password'
            secureTextEntry
            mode='outlined'
            style={styles.input}
            left={<TextInput.Icon icon='key' />}
          />
        </View>
        <View>
          <Button mode='contained' style={styles.btn} onPress={onLogin}>
            Sign In
          </Button>
        </View>
        <View style={styles.link}>
          <View style={styles.box}>
            <Image source={require('../img/facebook.png')} style={{ width: 50, height: 50 }} />
          </View>
          <View style={styles.box}>
            <Image source={require('../img/google.png')} style={{ width: 50, height: 50 }} />
          </View>
          <View style={styles.box}>
            <Image source={require('../img/twitter.png')} style={{ width: 50, height: 50 }} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',     
  },
  header: {
    alignItems:'center',
  },
  logo: {    
    width: 270,
    height: 107,     
    resizeMode: 'contain',
  },
  input: {
    margin: 5,
  },
  div: {
    width: '55%',
  },
  btn: {
    margin: 7,
    paddingVertical: 3,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  textContent: {
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10
  }
});

export default Login;
