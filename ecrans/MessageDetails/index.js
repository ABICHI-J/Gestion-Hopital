import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import baseUrl from '../../api';
import Message from '../../composantes/Message';
import MessageInput from '../../composantes/MessageInput';
import axios from 'axios';
const MessageDetails = ({route, navigation}) => {
  const {item} = route.params;
  const [messages, setMessages] = useState([]);
  const token = useSelector(state => state.auth.token);
  const userInfo = useSelector(state => state.auth.userInfo);

  useEffect(() => {
    navigation.setOptions({title: item.name});

    const fetchMessages = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(baseUrl + 'api/messages/get', {
          ...config,
          params: {
            to_user_id: item.id,
          },
        });

        console.log(response.data.messages);
        setMessages(response.data.messages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, [token, setMessages]);

  const sendCustomMessage = async message => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const body = {
        to_user_id: item.id,
        message: message,
      };

      const response = await axios.post(
        baseUrl + 'api/messages/send',
        body,
        config,
      );
      const newMessage = response.data.data;
      // console.log(newMessage)
      setMessages(prevMessages => [...prevMessages, newMessage]);

      console.log('New message added:', newMessage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Message item={item} myUserId={userInfo.id} />;
        }}
      />
      <MessageInput onSendMessage={sendCustomMessage} />
    </View>
  );
};

export default MessageDetails;
