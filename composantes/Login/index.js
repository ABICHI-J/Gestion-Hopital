import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.10.15:8000/api/login', {
        email: email,
        password: password,
      });

      // Traitez la réponse si nécessaire, par exemple, sauvegardez le jeton d'authentification
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {/* Champ d'e-mail */}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      {/* Champ de mot de passe */}
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* Bouton de connexion */}
      <TouchableOpacity onPress={handleLogin}>
        <Text>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
