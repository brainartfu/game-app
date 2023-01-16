/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

const dynamicStyle = () =>{
  return StyleSheet.create({
    modal: {
      backgroundColor: '#8e603e',
      height: 235,
      margin: 200,
      marginTop: 110,
      borderRadius: 5,
      alignItems: 'center',
    },    
    imgDiv: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    box: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    vs: {
      width: 150,
      resizeMode: 'contain',
    },
    start: {
      width: 150,
      marginVertical: 20,
    },
    header: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    text: {
      color: 'white',
      marginTop: 3,
      fontWeight: 'bold',
      fontSize: 15,
    }        
  });
} 

export default dynamicStyle;