import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.darkblue,
    },
    title_container:{
        margin:10,
        padding:5,
        justifyContent:"center",
        alignItems:"center",
        borderColor:'#e1f5fe',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius:10,
    },
    title:{
        color: '#e1f5fe',
        fontSize:20,
    },
    data_container:{
        margin:10,
    }

})