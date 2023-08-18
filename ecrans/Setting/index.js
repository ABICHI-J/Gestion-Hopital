import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import baseUrl from '../../api';
import {useSelector} from 'react-redux';
import styles from './style';
import Logout from '../Logout';
import {fakeSettings} from '../../fakeData/fakeSetting';
import SettingItem from '../../composantes/SettingItem';

const Settings = ({navigation}) => {
  const userInfo = useSelector(state => state.auth.userInfo);

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        {userInfo.photo && (
          <Image
            source={{uri: `${baseUrl}${userInfo.photo}`}}
            style={styles.image}
          />
        )}

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userInfo.name}</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
          <Text style={styles.fontColorBlack}>+33 7 53 53 77 83</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateNameEmail')}>
            <Text style={styles.fontColorGrey}>Modifier nom et email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePassword')}>
            <Text style={styles.fontColorGrey}>Modifier mot de passe</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UpdatePhoto')}>
            <Text style={styles.fontColorGrey}>Modifier photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Logout navigation={navigation} />

      {/* <EditName /> */}

      {/* <EditImage /> */}

      {/* <SignUp /> */}

      {/* <Login /> */}

      {/* Fin Header */}

      {/* <FlatList
        data={fakeSettings}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return <SettingItem item={item} />;
        }}
      /> */}
    </View>
  );
};

export default Settings;
