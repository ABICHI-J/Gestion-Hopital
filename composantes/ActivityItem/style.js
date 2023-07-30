import {StyleSheet} from 'react-native';
import { COLORS } from '../../outils/constantes';

export const styles = StyleSheet.create({
  scrollableListItem: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: 'white',
    elevation: 1,
  },

  mainText: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 16,
  },
  subText: {
    color: COLORS.black,
    marginTop: 10,
    fontSize: 12,
  },
});

export default styles;