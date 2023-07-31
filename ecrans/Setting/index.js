import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './style';
import {fakeSettings} from '../../fakeData/fakeSetting';
import SettingItem from '../../composantes/SettingItem';
import SignUp from './../../composantes/SignUp/index';
import Login from './../../composantes/Login/index';
import Logout from './../../composantes/Logout/index';
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

      {/* Composant SignUp */}
      <SignUp />

      {/* Composant Login */}
      <Login />

      {/* Composant Logout */}
      <Logout />
      {/* Fin Header */}

      {/* FlatList des autres paramètres */}
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
