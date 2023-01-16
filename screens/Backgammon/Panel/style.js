/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const dynamicStyle = () =>{
  return StyleSheet.create({
    container: {
      flex: 1,
    },    
    gameBoard: {
      flex: 1,
      width: 650,
      marginLeft: 15,
      marginRight: 6,
      backgroundColor: '#8e603e',
    },
    panel: {
      width: '100%',
      height: 440,
      marginTop: 9,      
    },
  });
} 

export default dynamicStyle;