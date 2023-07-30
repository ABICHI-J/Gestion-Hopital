  import {View, FlatList} from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {fakeConversation} from '../../fakeData/fakeConversation';
  import Message from '../../composantes/Message';
  import MessageInput from '../../composantes/MessageInput';
  import axios from 'axios';
  const MessageDetails = ({route, navigation}) => {
    const {item} = route.params;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({title: item.fullname});

      // Effectuer une requête GET à l'API pour récupérer les messages
      const fetchMessages = async () => {
        try {
          const response = await axios.get(
            'http://192.168.193.168:8000/api/messages',
          );

          // console.log('MessageDetails ' + JSON.stringify(response));
          // console.log(response.data.data);
          setMessages(response.data.data); // Supposons que l'API renvoie un objet avec la propriété "data" contenant les messages
        } catch (error) {
          console.error(error);
          // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur ou effectuer une action spécifique en cas d'erreur
        }
      };

      fetchMessages();
    }, []);

    const sendCustomMessage = message => {
      const newMessage = {
        content: message,
      };
      setMessages([...messages, newMessage]);
    };

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id} // Assurez-vous que l'id est une chaîne de caractères}
          renderItem={({item}) => {
            return <Message item={item} />;
          }}
        />
        <MessageInput onSendMessage={sendCustomMessage} />
      </View>
    );
  };

  export default MessageDetails;
