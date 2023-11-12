import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';

const Login = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('User Login Details:', userId, password);
    navigation.navigate('DrawerNavigaton');
  };

  return (
    <View style={styles.maincontainer}>
      {/* Login Text Heading */}
      <ImageBackground
        source={require('../../assetes/login.png')}
        resizeMode="cover"
        style={styles.backimage}>
        <View style={{marginTop: -25}}>
          <Text style={styles.headingtext}>Login</Text>
          {/* Image Holder */}
          <View style={styles.imageholder}>
            <Image
              source={require('../../assetes/userlogin.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          {/* Input holder */}
          <View style={styles.form}>
            <View style={styles.inputholder}>
              <TextInput
                value={userId}
                onChangeText={text => setUserId(text)}
                keyboardType="default"
                label={'UserId*'}
                mode="flat"
                style={styles.textinput}
              />
            </View>
            <View style={styles.inputholder}>
              <TextInput
                value={password}
                secureTextEntry={!showPassword}
                onChangeText={text => setPassword(text)}
                keyboardType="default"
                label={'Password*'}
                mode="flat"
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye' : 'eye-off'}
                    onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
                  />
                }
                style={styles.textinput}
              />
            </View>
            <TouchableOpacity
              style={styles.forgetpasswordholder}
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.fpasswordtext}>Forget Password ?</Text>
            </TouchableOpacity>
            <View style={styles.inputholder}>
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Button>
            </View>
          </View>
          {/* Don't have an account */}
          <TouchableOpacity
            style={styles.accountholder}
            onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.account}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,    
  },
  headingtext: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  form: {
    flexDirection: 'column',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  inputholder: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textinput: {
    height: 65,
    width: '90%',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    width: '100%',
  },
  button: {
    width: '90%',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  forgetpasswordholder: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  fpasswordtext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'blue',
  },
  accountholder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  backimage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});
