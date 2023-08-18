import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import baseUrl from '../../api';
import {setToken} from '../../redux/actions/authActions';
import styles from './style';
const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      const body = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post(baseUrl + 'api/register', body);
      const token = response.data.token;

      dispatch(setToken(token));

      navigation.navigate('tabs_home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        color="black"
        placeholder="Nom"
        placeholderTextColor="grey"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        color="black"
        placeholder="E-mail"
        placeholderTextColor="grey"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        color="black"
        placeholder="Mot de passe"
        placeholderTextColor="grey"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.fontColorGreen}>Inscription</Text>
      </TouchableOpacity>
      <Text style={styles.fontColorBlack}>Tu as déja un compte ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.fontColorOrange}>Me connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
