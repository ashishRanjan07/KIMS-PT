import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //     // Navigate from Splash to Welcome after 3 seconds
      navigation.navigate('Welcome');
    }, 2000);
  }, []);

  return (
    <View style={styles.maincontainer}>
      {/* Image Holder */}
      <ImageBackground
        source={require('../../assetes/doc.jpg')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
        }}>
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'blue',fontSize:22,fontWeight:'700'}}>Welcome to the KIMS - PT </Text>
          </View>
        <View style={styles.imageholder}>
          <Image
            source={require('../../assetes/logopt.png')}
            style={styles.imagestyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textholder}>
          <Text style={{color:'green',fontSize:22,fontWeight:'700',textAlign:'center'}}>
            Welcome to the Patient Referal System for Patient and their family
            Member
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 300,
    width: 300,
    borderRadius: 150,
  },
  textholder: {
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width:'90%'
  },
  text: {
    color: 'gray',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
