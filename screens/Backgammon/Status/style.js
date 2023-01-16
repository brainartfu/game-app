/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const dynamicStyle = () =>{
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 25,
    },   
    other: {
      width: 100,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8e603e',
      borderTopRightRadius: 20,
    },
    state: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#26150d',
    },
    you: {
      width: 100,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8e603e',
      borderBottomRightRadius: 20,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginBottom: 3,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      margin: 1,
    },
  });
} 

export default dynamicStyle;