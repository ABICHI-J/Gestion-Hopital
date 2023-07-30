import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fakeChats} from '../../fakeData/fakeChat';
import MessagesList from '../../composantes/MessageList';
import styles from './style';
import axios from 'axios';

const Messages = ({navigation}) => {

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          'http://192.168.193.168:8000/api/chats',
        );

        setChats(response.data.data);
      } catch (error) {
        console.error(error);
        }
    };

    fetchChats();
  }, []);

  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      style={styles.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <MessagesList item={item} navigation={navigation}/>;
      }} />
  );
};

export default Messages;
