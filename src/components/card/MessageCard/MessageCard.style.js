import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom:25,
    justifyContent:"center",
    borderWidth:1,
    borderRadius:10,
    padding:10,
    borderColor:"#eceff1"
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  user_text: {
    color: "black",
    fontSize:17
  },
  date_text: {
    color: 'black',
    fontSize:17
  },
  content: {
    marginTop:7
  },
  content_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:19
  },
});
