import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import dayjs from 'dayjs';
import relativeTime  from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MessagesList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.messagesContainer}
      onPress={() => navigation.navigate('MessageDetails', {item})}>
      {/* Pressable peut remplacer TouchableOpcaity*/}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        }}
        style={styles.messageImg}
      />
      <View style={styles.messagesInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text style={styles.fontColor}>{dayjs(item.created_at).fromNow(true)}</Text>
        </View>
        <Text style={styles.fontColor}>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessagesList;
