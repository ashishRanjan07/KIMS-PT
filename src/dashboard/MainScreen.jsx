import {Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground} from 'react-native';
import React from 'react';

const MainScreen = ({navigation}) => {
    return (
        <View style={styles.maincontainer}>
          <ImageBackground source={require('../../assetes/main.jpg')} style={styles.backimage} resizeMode='cover'>
          <View style={styles.categoryholder}>
            <TouchableOpacity style={styles.imageholder} onPress={() => navigation.navigate('Select Spaciality')}>
              <Image
                source={require('../../assetes/doc.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholder}>
              <Image
                source={require('../../assetes/hos.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Hospital</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryholder}>
            <TouchableOpacity style={styles.imageholder}>
              <Image
                source={require('../../assetes/lab.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Pathology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageholder}>
              <Image
                source={require('../../assetes/books.png')}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.text}>Booking</Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
        </View>
      );
}

export default MainScreen

const styles = StyleSheet.create({
    maincontainer:{
        backgroundColor:'white',
        flex:1,
        width:'100%',
        alignContent:'center',
       
        // justifyContent:'center',
    },
      backimage: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
      },
    categoryholder: {
        marginVertical:17,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        gap:50,
      },
      imageholder: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:25,
        padding:5,
        elevation:10,
        borderColor:'gray',
        marginTop:15
      },
      text:{
        color:'gray',
        fontSize:18,
        fontWeight:'700'
      },
      image:{
        height:175,
        width:175
      }
})