import {React, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setUserInfo} from '../../redux/actions/authActions';
import baseUrl from '../../api';
import styles from './style';

const UpdateNameEmail = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const userInfo = useSelector(state => state.auth.userInfo);

  const handleUpdateNameEmail = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if (!name || !email) {
        console.log('Veuillez remplir tous les champs.');
      }

      const body = {
        name: name,
        email: email,
      };

      const response = await axios.post(
        baseUrl + 'api/user/update/nameEmail',
        body,
        config,
      );

      dispatch(
        setUserInfo({
          name: name,
          email: email,
          photo: userInfo.photo,
        }),
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
        placeholder="Nom"
        placeholderTextColor="grey"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        color="black"
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TouchableOpacity onPress={handleUpdateNameEmail}>
        <Text style={styles.fontColorGreen}>Modifier</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <Text style={styles.fontColorRed}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateNameEmail;
