import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  title_container: {
    paddingVertical:10, 
    alignItems:"center",
    borderBottomColor:colors.blueBottom,
    borderBottomWidth:2

  },
  title: {
    color: colors.darkblue,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
