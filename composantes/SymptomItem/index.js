import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import React from 'react'
import dashboardStyles from '../../ecrans/Home/style';

const SymptomItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={require(`./../../assets/img/symptom.png`)}
          style={styles.itemImg}
        />
        <Text style={dashboardStyles.symptomName}>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SymptomItem