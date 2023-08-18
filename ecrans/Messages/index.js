import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import baseUrl from '../../api';
import {useSelector} from 'react-redux';
import MessagesList from '../../composantes/MessagesList';
import styles from './style';

const Messages = ({navigation}) => {

  const [chats, setChats] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(baseUrl + 'api/user/showAll', config);

        // console.log(response.data.users)
        setChats(response.data.users);
      } catch (error) {
        console.error(error);
        }
    };
    fetchChats();
  }, [token]);

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
