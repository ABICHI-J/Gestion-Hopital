import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        'http://192.168.10.15:8000/api/register',
        {
          name: name,
          email: email,
          password: password,
          // role: 'normal', // 'normal' pour un utilisateur normal, vous pouvez également utiliser 'doctor' pour un médecin
        },
      );

      // Traitez la réponse si nécessaire, par exemple, affichez un message de succès
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Une erreur s'est produite lors de l'inscription");
    }
  };

  return (
    <View>
      {/* Champ de nom */}
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={text => setName(text)}
      />
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

      {/* Bouton d'inscription */}
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
