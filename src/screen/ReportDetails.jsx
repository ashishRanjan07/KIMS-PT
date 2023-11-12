import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const ReportDetails = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item, 'LIne 6');
  return (
    <ScrollView style={styles.maincontainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap:5
        }}>
        <Text style={{color: 'black', fontSize: 20,marginBottom:10,marginTop:5}}>
          Find the details of report
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Name : </Text>
          {item.name}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Gender : </Text>
          {item.gender}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Date of Birth : </Text>
          {item.date}
        </Text>
        <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
          <Text style={{color: 'black'}}>Doctor Name : </Text>
          {item.doctorname}
        </Text>
        
      </View>

      <View style={styles.prescriptionholder}>
        <Text style={{fontSize:22,fontWeight:'600'}}>Prescription Details : - </Text>
        <Text style={styles.prescriptionText}>Blood Pressure - {item.priscription[0].pressure}</Text>
        <Text style={styles.prescriptionText}>Body Weight - {item.priscription[0].bodyWeight}</Text>
        <Text style={styles.prescriptionText}>Temperature - {item.priscription[0].temperature}</Text>
      </View>

      <View style={styles.prescriptionholder}>
        <Text style={{fontSize:22,fontWeight:'600'}}>Medicine List Name</Text>
        <Text style={styles.prescriptionText}>First Medicine Name - {item.medicine[0].m1}</Text>
        <Text style={styles.prescriptionText}>Second Medicine Name - {item.medicine[0].m2}</Text>
        <Text style={styles.prescriptionText}>Third Medicine Name - {item.medicine[0].m3}</Text>
        <Text style={styles.prescriptionText}>Fourth Medicine Name - {item.medicine[0].m4}</Text>
        <Text style={styles.prescriptionText}>Fifth Medicine Name - {item.medicine[0].m5}</Text>
      </View>

      <View style={styles.prescriptionholder}>
        <Text style={{fontSize:22,fontWeight:'600'}}>Dite Plan</Text>
        <Text style={styles.prescriptionText}>{item.dite[0].plan}</Text>
        </View>

        <View style={styles.prescriptionholder}>
        <Text style={{fontSize:22,fontWeight:'600'}}>Conclusion / Result</Text>
        <Text style={styles.prescriptionText}>{item.followup}</Text>
        </View>

        <View style={styles.inputholder}>
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={styles.button}>
            <Text style={styles.buttonText}>Close</Text>
          </Button>
        </View>
    </ScrollView>
  );
};

export default ReportDetails;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  prescriptionholder:{
    borderColor:'pink',
    borderWidth:2,
    width:'80%',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:15,
    gap:5,
    borderRadius:25,
    padding:20,
    backgroundColor:'white',
    elevation:8,
  },
  prescriptionText:{
    fontSize:18,
    fontWeight:'700',

  },
  inputholder: {
    width: '80%',
    alignSelf:'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
});
