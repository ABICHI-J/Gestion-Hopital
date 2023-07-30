import {StyleSheet} from 'react-native';
import {COLORS, PADDING} from '../../outils/constantes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    color: COLORS.black,
    marginBottom: 1,
  },
  userNumber: {
    color: COLORS.black,
  },
});

export default styles;
