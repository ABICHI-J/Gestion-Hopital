import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './style';
import {fakeSettings} from '../../fakeData/fakeSetting';
import SettingItem from '../../composantes/SettingItem';

const Settings = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./../../assets/img/user.jpg')}
          style={styles.image}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Jairo Jonas</Text>
          <Text style={styles.userEmail}>jyamoha@gmail.com</Text>
          <Text style={styles.userNumber}>+33 7 69 36 35 49</Text>
        </View>
      </View>
      {/* Fin Header */}

      <FlatList
        data={fakeSettings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <SettingItem item={item} />;
        }}
      />
    </View>
  );
};

export default Settings;
