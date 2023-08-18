import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import baseUrl from '../../api';
import styles from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const MessagesList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.messagesContainer}
      onPress={() => navigation.navigate('MessageDetails', {item})}>
      {/* Pressable peut remplacer TouchableOpacity*/}
      {item.photo && (
        <Image
          source={{uri: `${baseUrl}${item.photo}`}}
          style={styles.messageImg}
        />
      )}
      <View style={styles.messagesInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.fontColor}></Text>
        </View>
        <Text style={styles.fontColor}></Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessagesList;
