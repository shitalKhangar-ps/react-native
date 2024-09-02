import React, { useState } from 'react';
import { View, Text,ScrollView, } from 'react-native';
import { styles } from '../../Screens/LeaveScreen/LeaveScreenStyle';
import LeaveItem from './LeaveItem';
import TeamLeave from './TeamLeave';
const TabContent = ({ tab }) => {
    switch (tab) {
      case 'Upcoming':
        return (
          <ScrollView>
            <LeaveItem
              date="Apr 15, 2023 - Apr 18, 2023"
              applyDays="3 Days"
              leaveBalance="16"
              approvedBy="Martin Doe"
              status="Approved"
            />
            <LeaveItem
              date="May 1, 2023 - May 3, 2023"
              applyDays="2 Days"
              leaveBalance="14"
              approvedBy="Pending"
              status="Pending"
            />
             <LeaveItem
              date="May 1, 2023 - May 3, 2023"
              applyDays="2 Days"
              leaveBalance="14"
              approvedBy="Pending"
              status="Pending"
            />
          </ScrollView>
        );
      case 'Past':
        return (
          <ScrollView>
            <LeaveItem
              date="Mar 10, 2023 - Mar 12, 2023"
              applyDays="2 Days"
              leaveBalance="19"
              approvedBy="Martin Doe"
              status="Approved"
            />
            <LeaveItem
              date="Feb 5, 2023 - Feb 7, 2023"
              applyDays="2 Days"
              leaveBalance="21"
              approvedBy="Jane Smith"
              status="Approved"
            />
          </ScrollView>
        );
      case 'Team Leave':
        return (
          <ScrollView>
            <TeamLeave
              date="Apr 20, 2023 - Apr 22, 2023"
              name="Jane Copper"
              url={require('../../images/profilelogo.png')}
            />
            <TeamLeave
              date="May 5, 2023 - May 8, 2023"
              name="Janney Wilson"
              url={require('../../images/profilelogo.png')}
            />
          </ScrollView>
        );
      default:
        return null;
    }
  };
  export default TabContent;