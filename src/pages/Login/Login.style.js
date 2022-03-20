import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
  },
  title_container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  title: {
    fontSize: 55,
    color:"#e1f5fe"
  },
  input: {
    marginBottom: 30,
  },
  button: {
    marginBottom: 50,
  },
});
