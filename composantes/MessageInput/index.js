import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const MessageInput = ({onSendMessage, userId}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
      try {
        onSendMessage(message); // Cela appelle la fonction sendCustomMessage du parent
        setMessage('');
        
        const response = await axios.post('http://192.168.1.51/api/messages', {
          content: message,
          user_id: userId,
        });

        console.log(response.data.content);

        
      } catch (error) {
        console.error(error);
      }
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
