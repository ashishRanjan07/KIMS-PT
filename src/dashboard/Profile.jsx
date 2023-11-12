import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import {TextInput,Button} from 'react-native-paper';
  
  const Profile = () => {
    const [name, setName] = useState('Ashish Ranjan');
    const [dob, setDob] = useState('15-08-2001');
    const [sex, setSex] = useState('Male');
    const [address, setAddress] = useState('Village - Bairiya, Post - Bairiya');
    const [email, setEmail] = useState('aviashishranjan@gmail.com');
    const [mobile, setMobile] = useState('6206416452');
    const [aadhaarNo, setAadhaarNo] = useState('211214149837');
    const [panNo, setPanNo] = useState('EVQPR7427M');
    const [imageUpload, setImageUpload] = useState('YES');
    const [userId, setUserId] = useState('ashish_monal');
    const [password, setPassword] = useState('Monal@123');
    const [showPassword,setShowPassword] = useState(false);
    return (
      <ScrollView style={styles.maincontaner}>
        {/* Image Profile Image Holder */}
        <TouchableOpacity style={styles.imageholder}>
          <Image
            source={{uri:'https://icon2.cleanpng.com/20180523/wxj/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc2ee812.2252011515270566041921.jpg'}}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.form}>
          {/* UserId */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={userId}
              label={'User Id*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Name */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={name}
              label={'Name*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* DOB */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={dob}
              label={'Date of Birth DD/MM/YYYY*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Sex */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={sex}
              label={'Gender*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Address */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={address}
              label={'Address*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Email */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={email}
              label={'Email*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Mobile */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={mobile}
              label={'Mobile Number*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Aadhaar No */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={aadhaarNo}
              label={'Aadhaar No*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Pan No */}
          <View style={styles.inputholder}>
            <TextInput
              editable={false}
              value={panNo}
              label={'Pan Card*'}
              mode="outlined"
              style={styles.textinput}
            />
          </View>
          {/* Password */}
          <View style={styles.inputholder}>
            <TextInput
              editable={true}
              value={password}
              label={'Password*'}
              mode="outlined"
              secureTextEntry={!showPassword}
              style={styles.textinput}
              right={<TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
              />}
            />
          </View>
          
        </View>
        <View style={[styles.inputholder]}>
            <Button mode="contained" style={styles.button}>
              <Text style={styles.buttonText}>Update</Text>
            </Button>
          </View>
      </ScrollView>
    );
  };
  
  export default Profile;
  
  const styles = StyleSheet.create({
    maincontaner: {
      flex:1,
      backgroundColor: 'white',
    },
    imageholder: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 150,
      width: 150,
      borderColor: 'green',
      borderWidth: 3,
      borderRadius: 75,
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
    form: {
      flexDirection: 'column',
      marginHorizontal: 15,
    },
    button: {
      width: '90%',
      height: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    buttonText: {
      fontSize: 18,
      width: '100%',
    },
  });