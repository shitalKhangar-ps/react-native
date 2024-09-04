import { Dimensions, StyleSheet, Platform } from 'react-native';

import{getFontSize,getIconSize} from '../../components/cssHelper/Helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Poppin',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: getFontSize(28, 20),
    fontWeight: 'bold',
    color: 'black',
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
    borderWidth: 1,
    paddingRight: 40,
  },
  cardTitle: {
    fontSize: getFontSize(24, 20),
    marginBottom: 8,
    color: 'black',
    fontWeight: '500',
  },
  cardValue: {
    fontSize: getFontSize(28, 24),
    fontWeight: 'bold',
    marginTop: getFontSize(15, 7),
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#fbfbfb',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderWidth: 2,
    borderColor: '#3185fe',
    backgroundColor: '#3185fe',
    borderRadius: 10,
  },
  tabText: {
    fontWeight: '500',
    fontSize: getFontSize(20, 17),
  },
  activeTabText: {
    color: '#FFF',
    fontSize: getFontSize(20, 17),
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
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 5,
  },
  leaveItemTitle: {
    color: 'black',
    marginBottom: 10,
    fontSize: getFontSize(18, 14),
  },
  leaveItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  leaveItemDate: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: getFontSize(12, 8),
    fontSize: getFontSize(18, 14),
  },
  leaveItemStatus: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: getFontSize(18, 14),
  },
  leaveItemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TeamLeaveContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  TeamLeveButton: {
    flexDirection: 'row',
  },
  rejectButton: {
    marginRight: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    backgroundColor: '#ff7f74',
    borderRadius: 7,
  },
  AcceptButton: {
    height: 45,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    backgroundColor: '#30beb6',
    borderRadius: 7,
  },
  Button: {
    color: 'white',
    fontSize: getFontSize(20, 14),
  },
  Icon: {
    height: getIconSize(25, 20),
    width: getIconSize(25, 20),
    margin: getIconSize(10, 5),
  },
  addLeave: {
    height: getIconSize(30, 25),
    width: getIconSize(30, 25),
  },
  profileicon: {
    height: getIconSize(70, 60),
    width: getIconSize(70, 60),
  },
  TeamLeaveName: {
    fontSize: getFontSize(18, 14),
  },
  TeamleaveItemDate: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: getFontSize(7, 4),
    fontSize: getFontSize(18, 14),
  },
  TeamLeaves: {
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
