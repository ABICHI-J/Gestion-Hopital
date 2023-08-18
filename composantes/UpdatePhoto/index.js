import {React, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setUserInfo} from '../../redux/actions/authActions';
import baseUrl from '../../api';
import styles from './style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const UpdatePhoto = ({navigation}) => {
  const [photo, setPhoto] = useState(null);

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const userInfo = useSelector(state => state.auth.userInfo);

  const handleChooseImage = () => {
    const options = {
      title: 'Choisir une image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Annulé');
      } else {
        setPhoto(response);
      }
    });
  };

  const handleUpdatePhoto = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      if (!photo) {
        console.log('Aucune image sélectionnée');
      } else {
        console.log("photo", photo);
      }

      const formData = new FormData();

      const imageUri = photo.assets[0].uri;
      const imageType = photo.assets[0].type;
      const imageFileName = photo.assets[0].fileName;

      formData.append('photo', {
        uri: imageUri,
        type: imageType,
        name: imageFileName,
      });

      // console.log('Form Data:', formData);

      const response = await axios.post(
        baseUrl + 'api/user/update/photo',
        formData,
        config,
      );

      const filePath = response.data.file_path

      dispatch(
        setUserInfo({
          name: userInfo.name,
          email: userInfo.email,
          photo: filePath,
        }),
      );

      console.log('API Response:', response.data);

      navigation.navigate('tabs_home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {/* {photo && (
        <Image source={{uri: photo.uri}} style={{width: 200, height: 200}} />
      )} */}
      <TouchableOpacity onPress={handleChooseImage}>
        <Text style={styles.fontColorGrey}>Choisir une image</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleUpdatePhoto}>
        <Text style={styles.fontColorGreen}>Modifier</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('settings')}>
        <Text style={styles.fontColorRed}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePhoto;
