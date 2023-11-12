import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screen/Splash';
import Welcome from '../screen/Welcome';
import Registration from '../screen/Registration';
import Login from '../screen/Login';
import DrawerNavigation from './DrawerNavigation';
import ForgetPassword from '../screen/ForgetPassword';
import ReportDetails from '../screen/ReportDetails';
import DoctorSpaciality from '../screen/DoctorSpaciality';
import DoctorList from '../screen/DoctorList';
import DoctorDetails from '../screen/DoctorDetails';
import Reschudel from '../screen/Reschudel';
import BookingDetails from '../screen/BookingDetails';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name ="Registration" component={Registration} />
        <Stack.Screen name = "ForgetPassword" component={ForgetPassword}/>
        <Stack.Screen name ="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Report Details" component={ReportDetails} />
        <Stack.Screen name='Select Spaciality' component={DoctorSpaciality}/>
        <Stack.Screen name='Select Doctor List' component={DoctorList}/>
        <Stack.Screen name='Doctor Details' component={DoctorDetails}/>
        <Stack.Screen name='Reschedule' component={Reschudel}/>
        <Stack.Screen name='Booking Details' component={BookingDetails}/>
        <Stack.Screen name="DrawerNavigaton" component={DrawerNavigation}   options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation