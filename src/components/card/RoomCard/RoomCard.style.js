import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex:1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "#eceff1",
    borderRadius: 25,
    height: Dimensions.get('window').height / 5,
    backgroundColor:colors.darkblue
  },
  text: {
    color: "white",
    fontSize: 27,
    fontWeight: 'bold',
  },
});
