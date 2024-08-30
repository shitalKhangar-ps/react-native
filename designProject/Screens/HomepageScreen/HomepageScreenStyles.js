import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  profileContainer:{ 
    backgroundColor: "#ffffff" 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:26,
    marginHorizontal:26,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileinfocontainer: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "black",
  },
  profileTitle: {
    fontSize: 18,
    color: "black",
  },
  notificationIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  notificationIconText: {
    fontSize: 18,
  },
  dateDayContainer:{ 
    marginLeft: 20
   },
  dateTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  dateTab: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 10,
    margin: 5,
    marginRight: 20,
    alignItems: 'center',
    borderWidth:1,
    borderColor:"#D3D3D3"
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  dateContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateNumber: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dateDay: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  activeDateText: {
    color: 'white',
  },
  attendanceContainer:{
    paddingHorizontal:20,
    marginTop:20,
  },
  attendanceText:{
    fontSize:16,
    color:"black",
    fontWeight:"bold"
  },
  attendanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  attendanceBlock: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  attendanceImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendanceIcons:{
    height:40,
    width:40, 
    marginRight:10
  },
  attendanceLabel: {
    fontSize: 16,
  },
  attendanceTime: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  attendanceStatus: {
    color: '#666',
    marginTop: 5,
  },
  activitySection: {
    marginVertical: 20,
    paddingHorizontal:20
  },
  activityViewAllContainer:{
    justifyContent:"space-between", 
    flexDirection:"row",
  },
  activityTitle: {
    marginBottom: 10,
    fontSize:16,
    color:"black",
    fontWeight:"bold"
  },
  viewAllTitle:{
    color:"blue"
  },
  activitiesList:{
    height: 150
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  activityItemImgInfo:{ 
    flexDirection: "row"
   },
  activityType: {
    fontSize: 18,
    fontWeight:"bold"
  },
  activityDate: {
    color: '#666',
    fontSize:12
  },
  activityTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityStatus: {
    // marginTop: 5,
    fontSize:12
  },
  swipeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    marginHorizontal:20,
    borderRadius: 10,
    alignItems: 'center',
  },
  swipeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  swipeButtonContainer:{
    marginHorizontal:20,
    marginTop:20
  }
});

export default styles;