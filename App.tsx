import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import { RoundedButton } from './src/components/RoundedButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={ require('./assets/chef.jpg')} style={styles.imageBackground} />
      <View style={styles.logoContainer}>
          <Image source={require('./assets/logo.png')} style={styles.logoImage} />
          <Text style={styles.logoTexto}>FOOD APP</Text>
      </View>
      
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <View style={styles.formInput}>
        <Image source={require('./assets/email.png')} style={styles.formIcon}/>
        <TextInput
          style={styles.formTextInput}
          placeholder='Correo Electronico'
          keyboardType='email-address'
        />
        </View>

        <View style={styles.formInput}>

        <Image source={require('./assets/password.png')} style={styles.formIcon}/>
        <TextInput
          style={styles.formTextInput}
          placeholder='Contraseña'
          keyboardType='default'
          secureTextEntry={true}
        />

        </View>
        <View style={{ marginTop: 30}}>
            <RoundedButton text='INGRESAR' onPress={() => ToastAndroid.show('Ingresando...', ToastAndroid.LONG)} />
        </View>

        <View style={styles.formRegister}>
            <Text>No tienes Cuenta ?</Text>
            <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
