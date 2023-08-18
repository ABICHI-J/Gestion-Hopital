import {React, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import baseUrl from '../../api';
import styles from './style';

const UpdatePassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const token = useSelector(state => state.auth.token);

  const handleUpdatePassword = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (!currentPassword || !newPassword) {
        console.log('Veuillez remplir tous les champs.');
      } 

      const body = {
        current_password: currentPassword,
        new_password: newPassword,
      };

      const response = await axios.post(
        baseUrl + 'api/user/update/password',
        body,
        config,
      );

      console.log('API Response:', response.data);

      navigation.navigate('tabs_home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        color="black"
        placeholder="Mot de passe actuel"
        placeholderTextColor="grey"
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />
      <TextInput
        color="black"
        placeholder="Nouveau mot de passe"
        placeholderTextColor="grey"
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TouchableOpacity onPress={handleUpdatePassword}>
        <Text style={styles.fontColorGreen}>Modifier</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <Text style={styles.fontColorRed}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePassword;
