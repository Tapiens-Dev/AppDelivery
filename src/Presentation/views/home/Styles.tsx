
import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
     
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      opacity: 0.7,
      bottom: '30%'
    },
    form:{
      width: '100%',
      height: '40%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 30
    },
    formText:
    {
      fontWeight: 'bold',
      fontSize: 16
      
    },
    formTextInput:
    {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA',
      marginLeft: 15
    },
    formInput:
    {
      flexDirection: 'row',
      marginTop: 30
    },
    formIcon:
    {
      width: 25,
      height: 25,
      marginTop: 5
    },
    formRegister:
    {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30
    },
    formRegisterText:
    {
      fontStyle: 'italic',
      color: 'orange',
      borderBottomWidth: 1,
      borderBottomColor: 'orange',
      fontWeight: 'bold',
      marginLeft: 20
    },
    logoContainer:{
      position: 'absolute',
      alignSelf: 'center',
      top: '15%'
    },
    logoImage:{
      width: 100,
      height: 100
    },
    logoTexto:{
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
      marginTop: 10
    },
    
  });
  

  export default HomeStyles;