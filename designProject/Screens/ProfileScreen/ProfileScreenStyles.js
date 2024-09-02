import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileSection: {
    alignItems: 'center',
  },
  ProflePicEditContainer:{
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color:"black"
  },
  profileTitle: {
    color: 'black',
    marginTop: 5,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    left: 110,
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius:10
  },
  EditIcon:{
    height:20,
    width:20,
  },
  editProfileButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  menuItemContainer:{
    marginTop:20,
    marginBottom:40
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 15,
    height:30,
    width:30,
  },
  menuLabel: {
    fontSize: 16,
    color: 'black',
    fontWeight:"bold"
  },
  forwarArrow:{

  }
});

export default styles;