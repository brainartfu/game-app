/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const dynamicStyle = () =>{
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1b1b1b',
    },    
    view: {
      flex: 1,
      flexDirection: 'row',
    },
    info: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
    },
    alert: {
      width: 400,
      marginHorizontal: '25.5%',
      backgroundColor: '#8e603e'
    },
  });
} 

export default dynamicStyle;