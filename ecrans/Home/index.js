import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import dashboardStyles from './style.js';
import {fakeActivity} from '../../fakeData/fakeActivity.js';
import ActivityItem from '../../composantes/ActivityItem/index.js';
import {fakeSymptomes} from '../../fakeData/fakeSymptom.js';
import SymptomItem from '../../composantes/SymptomItem/index.js';
import {fakeDoctor} from '../../fakeData/fakeDoctor.js';

const Home = () => {
  return (
    <ScrollView>
      {/*Début du header*/}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>
          Jairo Jonas
        </Text>
        <Image
          source={require('./../../assets/img/user.jpg')}
          style={dashboardStyles.userImg}
        />
      </View>
      {/*Fin du header*/}

      {/* Liste des activités  */}

      {/* FlatList sert à pouvoir scroller horizontalement  */}
      <FlatList
        data={fakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Supprimme la barre de scrollement horizontal
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          return <ActivityItem item={item} />;
        }}
      />

      {/* Fin de liste des activités  */}

      {/* Liste des symptomes  */}
      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>
          Quel symptomes avez-vous ?
        </Text>
      </View>

      <FlatList
        data={fakeSymptomes}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Supprimme la barre de scrollement horizontal
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          return <SymptomItem item={item} />;
        }}
      />

      {/* Fin de liste des symptomes  */}

      {/* Docteurs list  */}

      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>
          Nos Docteurs
        </Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      {/* Map sert à pouvoir scroller verticalement  */}
      <View style={dashboardStyles.doctorsContainer}>
        {fakeDoctor.map((doctor, index) => {
          return (
            <TouchableOpacity
              key={doctor.id}
              style={dashboardStyles.doctorCard}>
              <Image
                source={{uri: `${doctor.img}`}}
                style={dashboardStyles.doctorImg}></Image>
              <View style={dashboardStyles.doctorInfo}>
                <Text style={dashboardStyles.doctorName}>
                  {doctor.fullname}
                </Text>
                <Text style={dashboardStyles.doctorSpe}>
                  {doctor.speciality}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Fin Docteurs list  */}
    </ScrollView>
  );
};

export default Home;
