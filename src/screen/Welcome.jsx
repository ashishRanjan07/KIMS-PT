import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      {/* Heading Holder */}
      <ImageBackground
        source={require('../../assetes/welcome.jpg')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '700'}}>
            Welcome to the KIMS - PT
          </Text>
        </View>
        {/* Image Holder */}
        <View style={styles.imageholder}>
          <Image
            source={require('../../assetes/logopt.png')}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        {/* Button Holder */}
        <View style={styles.buttonholder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.text}>Registration</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'90%',
            marginTop:25,
            alignSelf:'center'
          }}>
          <Text style={{color: 'orange', fontSize: 22, fontWeight: '700',textAlign:'center'}}>
            You can book the appointment with Doctor for treatment and book Pathology for various test.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  imageholder: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  imagestyle: {
    height: 200,
    width: 200,
    borderRadius: 150,
  },
  buttonholder: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});
