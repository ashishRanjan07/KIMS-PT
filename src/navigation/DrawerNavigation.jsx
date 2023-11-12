import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../dashboard/Profile';
import ViewReport from '../dashboard/ViewReport';
import AddFamilyMember from '../dashboard/AddFamilyNumber';
import FamilyMemberList from '../dashboard/FamilyMemberList';
import BookingHistory from '../dashboard/BookingHistory';
import MainScreen from '../dashboard/MainScreen';
import CustomDrawer from './CustomDrawer';
import MedicalRecord from '../dashboard/MedicalRecord';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Service"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Service"
        component={MainScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="View Report"
        component={ViewReport}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Add Family Member"
        component={AddFamilyMember}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Family Member List"
        component={FamilyMemberList}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Booking Reschedule"
        component={BookingHistory}
        options={{headerTitleAlign: 'center'}}
      />
      {/* <Drawer.Screen 
      name='Medial Record'
      component={MedicalRecord}
      options={{headerTitleAlign:'center'}}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
