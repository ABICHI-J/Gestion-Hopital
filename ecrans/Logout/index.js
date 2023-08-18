import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {clearToken} from '../../redux/actions/authActions';
import baseUrl from '../../api';
import styles from './style';
const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleLogout = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.get(baseUrl + 'api/logout', config);

      dispatch(clearToken());

      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.fontColorRed}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
