
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      fontFamily:'Poppin'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'black'
    },
    headerIcons: {
      flexDirection: 'row',
      gap: 16,
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 16,
    },
    card: {
      width: '48%',
      padding: 16,
      borderRadius: 15,
      marginBottom: 16,
      borderWidth:1,
      paddingRight:40
    },
    cardTitle: {
      fontSize: 20,
      marginBottom: 8,
      color:'black',
      fontWeight:"500"
    },
    cardValue: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop:7
    },
    tabContainer: {
      flexDirection: 'row',
      paddingHorizontal:16,
      backgroundColor:'#fbfbfb'
    },
    tab: {
      flex: 1,
      paddingVertical: 16,
      alignItems: 'center',
    },
    activeTab: {
      borderWidth: 2,
      borderColor: '#3185fe',
      backgroundColor:'#3185fe',
      borderRadius:10
  
    },
    tabText: {
      fontWeight:"500",
      fontSize:17
    },
    activeTabText: {
      color: '#FFF',
      fontSize:17
   
    },
    leaveList: {
      flex: 1,
      padding: 16,
    },
    leaveItem: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 10,
      shadowRadius: 40,  
      elevation: 5
    },
    
    leaveItemTitle:{
     color:'black',
     marginBottom:10
    },
    leaveItemHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    leaveItemDate: {
      fontWeight: 'bold',
      color:'black',
      marginBottom:8
    },
    leaveItemStatus: {
      fontWeight: 'bold',
      padding:5
    },
    leaveItemDetails: {
      flexDirection:'row',
      justifyContent:'space-between'
    },
    TeamLeaveContainer:{
      flexDirection:'row',
      marginBottom:8
    },
    TeamLeveButton:{
      flexDirection:'row',
   
    },
    rejectButton:{
      
      marginRight:6,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
       width:'48%',
    backgroundColor:'#ff7f74',
    borderRadius:7
    },
    AcceptButton:{
      height:45,
      marginLeft:6,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
       width:'48%',
      backgroundColor:'#30beb6',
      borderRadius:7
  
    },
    Button:{
      color:'white'
    },
    Icon:{
      height:20,
      width:20,
      margin:5
    
    },
    addLeave:{
    height:25,
    width:25
  
    },
    profileicon:{
      height:60,
      width:60
    },
    TeamleaveItemDate:{
      fontWeight: 'bold',
      color:'black',
      marginTop:4,
    
    },
    TeamLeaves:{
  paddingHorizontal:10,
  marginVertical:5
    }
   
  });