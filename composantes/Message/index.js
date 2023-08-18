import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {COLORS} from '../../outils/constantes';
dayjs.extend(relativeTime);

const Message = ({item, myUserId}) => {


  const fromUserId = item.from_user_id;

  console.log('fromUserId:', fromUserId);
  console.log('myUserId:', myUserId);
  const isMine = fromUserId === myUserId;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMine ? COLORS.main : 'white',
          alignSelf: isMine ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text
        style={{
          color: isMine ? 'white' : 'black',
        }}>
        {item.message}
      </Text>
      <Text
        style={{
          color: isMine ? 'blue' : 'blue',
        }}>
        {dayjs(item.created_at).fromNow(true)}
      </Text>
    </View>
  );
};

export default Message;
