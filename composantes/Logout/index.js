import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      // Récupérez le token depuis le stockage local ou l'endroit où vous le stockez
      const monToken = 'votre_token_ici';
      const response = await axios.post(
        'http://192.168.10.15:8000/api/logout',
        {
          headers: {
            Authorization: `Bearer ${monToken}`,
          },
        },
      );

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
