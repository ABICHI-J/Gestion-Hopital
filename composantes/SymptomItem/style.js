import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/constantes';

export const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  itemImg: {
    width: 30,
    height: 30,
    marginRight: 5,
  }
});

export default styles;