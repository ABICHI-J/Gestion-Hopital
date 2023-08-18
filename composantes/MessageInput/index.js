import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import baseUrl from '../../api';
import {useSelector} from 'react-redux';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MessageInput = ({onSendMessage}) => {
  const [message, setMessage] = useState(''); 

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message); // Appel à la fonction du parent
      setMessage(''); // Réinitialise le champ de saisie du message
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        color="black"
        style={styles.input}
        placeholder="Message ici..."
        placeholderTextColor="black"
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <TouchableOpacity onPress={handleSendMessage}>
        <MaterialCommunityIcons name="send" style={styles.send} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;
