import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import baseUrl from '../../api';
import { setToken } from '../../redux/actions/authActions';
import styles from './style';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };

      const response = await axios.post(baseUrl + 'api/login', body);
      const token = response.data.token;

      console.log(token);
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

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.fontColorGreen}>Connexion</Text>
      </TouchableOpacity>
      <Text style={styles.fontColorBlack}>Tu n'as pas encore de compte ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.fontColorOrange}>Créer mon compte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
