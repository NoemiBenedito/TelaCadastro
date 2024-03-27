import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text,View,TextInput,TouchableOpacity} from 'react-native';



export default function App() {

  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro=() =>{

  }
  return(
      <View style={styles.container}>

      <Text style={styles.formTitle}>Login do Aplicativo</Text>
          <StatusBar style="auto" />
         
          <TextInput placeholder="Digite seu nome" style={styles.textInput} onChangeText={text=>setNome(text)} />
          <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />
            
        
          <TouchableOpacity style={styles.botao} onPress = {()=>cadastro()}>
              <Text style={{ color:'white',textAlign:'center'}}>Vamos cadastrar!</Text>
          </TouchableOpacity>
      
      </View>

  );
}



const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'write',
      alignItems:'center',
      justifyContent:'center',
      padding:20,
  },

  formTitle:{
    fontSize: 36,
    fontWeight: 'bold',
    color: '#443457',
    margin: 10,
  },


textInput:{
    width:'100%',
    height:40,
    borderRadius:20,
    paddingLeft:10,
    margin: 5,
  
},

botao:{
    width:'100%',
    height:40,
    backgroundColor:'#6931ad',
    borderRadius:20,
    justifyContent:'center',

},


});