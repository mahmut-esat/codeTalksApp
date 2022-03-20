import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  input: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color:"white",
    padding: Platform.OS == 'android' ? 0 : 5,
  },

  
});