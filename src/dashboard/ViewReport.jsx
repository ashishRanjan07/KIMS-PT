import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const ViewReport = ({navigation}) => {
  const ReportDetails = [
    {
      id: 1,
      date: '10-10-2023',
      nameofservice: 'Blood Test',
      amount: '520',
      gender:'Male',
     name:'Rahul kumar',
     doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 2,
      date: '31-09-2023',
      nameofservice: 'Diabetes',
      amount: '1235',
      name:'Radhe Shyaam ',
      gender:'Male',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 3,
      date: '09-10-2023',
      nameofservice: 'HIV',
      amount: '5200',
      name:'Shubham Mehta',
      gender:'Male',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 4,
      date: '08-10-2023',
      nameofservice: 'Anemia',
      amount: '250',
      gender:'Male',
      name:'Vikash Das',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 5,
      date: '07-10-2023',
      nameofservice: 'Cancer',
      amount: '52000',
      name:'Naveen Kumar',
      doctorname:"Dr. abc",
      gender:'Male',
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 6,
      date: '06-10-2023',
      nameofservice: 'Coronary heart disease',
      amount: '520',
      name:'Bablu Kumar',
      gender:'Male',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 7,
      date: '05-10-2023',
      nameofservice: 'MRI Scans',
      amount: '520',
      gender:'Male',
      name:'Rishu',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 8,
      date: '04-10-2023',
      nameofservice: 'CT Scans',
      amount: '520',
      gender:'Male',
      name:'Mohan kumar',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 9,
      date: '03-10-2023',
      nameofservice: 'PET Scans',
      amount: '520',
      name:'Saurabh Kumar',
      doctorname:"Dr. abc",
      gender:'Male',
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 10,
      date: '02-10-2023',
      nameofservice: 'Blood Sugar test',
      amount: '520',
      gender:'Male',
      name:'Raja Kumar',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
    {
      id: 11,
      date: '01-10-2023',
      nameofservice: 'white blood cells',
      amount: '520',
      name:'Monal Kumar',
      gender:'Male',
      doctorname:"Dr. abc",
     priscription :[
      {
        id:1,
        pressure:'80-120',
        temperature:'98F',
        bodyWeight:'72kg'
      }
     ],
     description:"Pain in liver",
     medicine:[
      {
        id:1,
        m1:'pain Killer',
        m2:'abc',
        m3:'abc',
        m4:'abc',
        m5:'abc',
      }
     ],
     dite:[
      {
        id:1,
        plan:'Normal Food'
      }
     ],
     followup:"after 5 days"
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderviewholder} onPress={() => navigation.navigate('Report Details',{item})}>
        <Text style={styles.texttransaction}>Date of Visiting - {item.date}</Text>
        <Text style={styles.texttransaction}>Paitent's Name - {item.name}</Text>
        <Text style={styles.texttransaction}>Service Name - {item.nameofservice}</Text>
        <Text style={styles.texttransaction}>Amount Paid - {item.amount}</Text>
        
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.maincontainer}>
        <View style={{marginBottom:15}}> 
      <FlatList
        data={ReportDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>
    </View>
  );
};

export default ViewReport;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  viewholder:{
    borderWidth:2,
    borderColor:'red',
    width:'80%',
    elevation:5,
    flexDirection:'row',
    alignSelf:'center',
    backgroundColor:'white',
    padding:10,
  },
  renderviewholder: {
    borderColor: 'green',
    borderWidth: 2,
    borderRadius:10,
    width: '95%',
    flexDirection: 'column',
    alignSelf:'center',
    marginTop:25,
    gap:5,
    elevation:10,
    backgroundColor:'white',
    padding:10,
   
  },
  texttransaction:{
    fontSize:16,
    fontWeight:'bold',
    // textAlign:'center'
  }
});