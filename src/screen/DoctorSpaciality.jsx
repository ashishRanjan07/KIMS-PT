import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {TextInput} from 'react-native-paper';

const DoctorSpaciality = ({navigation}) => {
    const [search, setSearch] = useState('');
    return (
    <ScrollView style={styles.maincontainer}>
    <View
      style={{
        width: '80%',
        alignContent: 'center',
        alignSelf: 'center',
        marginVertical: 15,
      }}>
      <TextInput
        value={search}
        left={<TextInput.Icon icon="clipboard-search" />}
        onChangeText={text => setSearch(text)}
        label={'Search doctor specialties'}
        mode="outlined"
        style={{backgroundColor: 'white', borderRadius: 10}}
      />
    </View>
    <View style={{justifyContent: 'space-evenly',columnGap:15}}>
      <View style={styles.categoryholder}>
        <TouchableOpacity
          style={styles.imageholder}
          onPress={() => navigation.navigate('Select Doctor List')}>
          <Image
            source={require('../../assetes/medi.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>Medicine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageholder}
          onPress={() => navigation.navigate('Select Doctor List')}>
          <Image
            source={require('../../assetes/ono.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>General Oncology</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryholder}>
        <TouchableOpacity
          style={styles.imageholder}
          onPress={() => navigation.navigate('Select Doctor List')}>
          <Image
            source={require('../../assetes/medi.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>Medicine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageholder}
          onPress={() => navigation.navigate('Select Doctor List')}>
          <Image
            source={require('../../assetes/ono.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>General Oncology</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
    )
}

export default DoctorSpaciality

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'white',
        height: '100%',
    
        // flexDirection: 'column',
        // justifyContent: 'space-evenly',
      },
      categoryholder: {
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        gap: 25,
        marginVertical:10
    
      },
      imageholder: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 25,
        padding: 5,
        borderColor: 'gray',
      },
      text: {
        color: 'gray',
        fontSize: 18,
        fontWeight: '700',
      },
      image: {
        height: 175,
        width: 175,
      },
})