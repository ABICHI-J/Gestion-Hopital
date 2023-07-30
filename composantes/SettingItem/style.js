import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constantes';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
  },
});

export default styles; 