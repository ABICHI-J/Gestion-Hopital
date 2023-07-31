import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://192.168.1.51:8000/api/logout');

      // Traitez la réponse si nécessaire, par exemple, affichez un message de succès
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {/* Bouton de déconnexion */}
      <TouchableOpacity onPress={handleLogout}>
        <Text>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;
