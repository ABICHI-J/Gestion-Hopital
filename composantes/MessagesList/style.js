import { StyleSheet } from "react-native"
import { COLORS, PADDING } from "../../outils/constantes";

const styles = StyleSheet.create({
  messagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 15,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  messagesInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
  },

  date_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    color: COLORS.black,
    fontWeight: 'bold',
    marginRight: 5,
  },
  fontColorBlack: {
    color: COLORS.black,
  },
});

export default styles;