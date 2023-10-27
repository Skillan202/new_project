import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useState, useEffect, useRef} from 'react';

import Rive from 'rive-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Loginscreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      // Retrieve the array of users from AsyncStorage
      const users = JSON.parse(await AsyncStorage.getItem('users')) || [];

      // Check if the provided email and password match any user
      const user = users.find(
        u => u.email === email && u.password === password,
      );

      if (user) {
        navigation.navigate('home', {email: email, password: password}); // Navigate to the home page
      } else {
        console.log('Login failed. Invalid credentials.');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };
 
  const lottieRef = useRef(null);
  useEffect(() => {
    lottieRef.current?.reset();
    setTimeout(() => {
      lottieRef.current?.play();
    }, 0);
  }, []);
  return (
    <View
      style={tw`flex flex-1 flex-col justify-between  items-center bg-white`}>
      <Rive resourceName="login" style={{width: 250, height: 100}} />
      <Text style={tw`font-bold text-xl text-black mb-8`}>Login page</Text>
      <TextInput
        value={email}
        style={tw`w-70 h-16 px-3 text-white bg-black shadow-sm rounded-md mb-3 `}
        placeholder="Enter your Email"
        autoCapitalize={'none'}
        onChangeText={text => {
          setEmail(text);
          console.log('email', text);
        }}></TextInput>
      <TextInput
        value={password}
        style={tw`w-70 h-16 px-3 text-white bg-black shadow-sm rounded-md mb-5 `}
        placeholder="Enter your password"
        autoCapitalize="none"
        onChangeText={text => {
          setPassword(text);
          console.log(text);
        }}
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        onPress={() => {
          handleLogin();
        }}>
        <View
          style={tw`h-16 w-70 bg-black text-center mb-3 rounded-lg flex flex-row  justify-center items-center`}>
          <Text style={tw`text-white text-md`}>Login</Text>
        </View>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate('register');
        }}
        style={tw`font-md text-underline text-blue-300 mb-10`}>
        Go to register page
      </Text>
    </View>
  );
}

export default Loginscreen;
